import { Collection } from 'discord.js';
import { ErrorHandlingOptions } from '../types/ErrorHandlingOptions.ts';
const DEFAULT_COOLDOWN = 0;
function isError(error: unknown): error is Error {
    return error instanceof Error;
}
export class ErrorHandlingService {
    private _errorCooldowns: Collection<string, number>;
    constructor() {
        this._errorCooldowns = new Collection();
    }
    /**
     * Method to handle error
     *
     * @method
     * @name ErrorHandlingServiceD#handleError
     * @param {unknown} error The error to handle
     * @param {ErrorHandlingService} opts Options for handling error
     * @returns
     */
    handleError(
        error: unknown,
        opts?: ErrorHandlingOptions,
    ) {
        const now = new Date();
        const cooldown = opts?.cooldown ?? DEFAULT_COOLDOWN;
        const notes = opts?.notes;
        const timestamp = now.getTime();
        const errorName = isError(error) ? error.name : `${error}`;
        const errorTimestamp = this._errorCooldowns.get(errorName);
        if (!errorTimestamp || errorTimestamp < timestamp) {
            const newTimestamp = timestamp + cooldown * 1_000;
            this._errorCooldowns.set(errorName, newTimestamp);
            console.error(
                `[${now}] - Error: ${errorName}${notes ? `- ${notes}` : ''}`,
            );
            console.error(error);
        }
    }
}
