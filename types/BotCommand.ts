import {
    CommandInteraction,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
} from 'discord.js';

/**
 * The SlashCommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder | SlashCommandOptionsOnlyBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */
export type SlashCommand = {
    cooldown?: number;
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
};

/**
 * The ContextMenuCommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {ContextMenuCommandBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */
export type ContextMenuCommand = {
    cooldown?: number;
    data: ContextMenuCommandBuilder;
    execute: (
        interaction: MessageContextMenuCommandInteraction,
    ) => Promise<void>;
};

export type BotCommand = SlashCommand | ContextMenuCommand;
