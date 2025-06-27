/**
 * Options for error handler
 * @property {number} [cooldown] - The cooldown of the error, in seconds.
 * @property {string} [notes] - Additional notes for the error.
 */
export type ErrorHandlingOptions = {
    cooldown?: number;
    notes?: string;
};
