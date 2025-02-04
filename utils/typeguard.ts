import { SlashCommandBuilder } from 'discord.js';
import { BotCommand } from '../types/_index.ts';
import { ContextMenuCommand, SlashCommand } from '../types/BotCommand.ts';
import { ContextMenuCommandBuilder } from 'discord.js';

/**
 * Type guard for ICommand
 * @param object any
 * @returns boolean
 */
// deno-lint-ignore no-explicit-any -- This is a type guard, so it needs to be any
export function isBotCommand(object: any): object is BotCommand {
    return 'data' in object && 'execute' in object;
}

export function isSlashCommand(command: BotCommand): command is SlashCommand {
    return command.data instanceof SlashCommandBuilder;
}

export function isContextMenuCommand(
    command: BotCommand,
): command is ContextMenuCommand {
    return command.data instanceof ContextMenuCommandBuilder;
}
