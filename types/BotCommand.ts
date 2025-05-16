import {
    ChatInputCommandInteraction,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
    UserContextMenuCommandInteraction,
} from 'discord.js';

/**
 * The SlashCommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {SlashCommandBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */
export type SlashCommand = {
    cooldown?: number;
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

/**
 * The MessageContextMenuCommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {ContextMenuCommandBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */
export type MessageContextMenuCommand = {
    cooldown?: number;
    data: ContextMenuCommandBuilder;
    execute: (
        interaction: MessageContextMenuCommandInteraction,
    ) => Promise<void>;
};

/**
 * The UserContextMenuCommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {ContextMenuCommandBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */

export type UserContextMenuCommand = {
    cooldown?: number;
    data: ContextMenuCommandBuilder;
    execute: (interaction: UserContextMenuCommandInteraction) => Promise<void>;
};

export type BotCommand =
    | SlashCommand
    | MessageContextMenuCommand
    | UserContextMenuCommand;
