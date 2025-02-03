import { BotCommand } from '../types/_index.ts';

/**
 * Type guard for ICommand
 * @param object any
 * @returns boolean
 */
// deno-lint-ignore no-explicit-any -- This is a type guard, so it needs to be any
export function isBotCommand(object: any): object is BotCommand {
    return 'data' in object && 'execute' in object;
}
