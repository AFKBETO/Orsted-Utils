import { ContextMenuCommandBuilder, SlashCommandBuilder } from 'discord.js';
import { BotCommand } from '../types/_index.ts';
import {
    MessageContextMenuCommand,
    SlashCommand,
    UserContextMenuCommand,
} from '../types/BotCommand.ts';
import {} from 'discord.js';

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

export function isMessageContextMenuCommand(
    command: BotCommand,
): command is MessageContextMenuCommand {
    return command.data instanceof ContextMenuCommandBuilder &&
        (command as MessageContextMenuCommand).type === 'MESSAGECONTEXT';
}

export function isUserContextMenuCommand(
    command: BotCommand,
): command is UserContextMenuCommand {
    return command.data instanceof ContextMenuCommandBuilder &&
        (command as UserContextMenuCommand).type === 'USERCONTEXT';
}
