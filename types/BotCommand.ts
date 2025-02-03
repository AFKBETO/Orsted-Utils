import {
    CommandInteraction,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
    SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js';

/**
 * The ICommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder | SlashCommandOptionsOnlyBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */
export type BotCommand = {
    cooldown?: number;
    data:
        | SlashCommandBuilder
        | SlashCommandSubcommandsOnlyBuilder
        | SlashCommandOptionsOnlyBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
};
