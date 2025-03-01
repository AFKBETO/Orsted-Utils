import { UserContextMenuCommandInteraction } from 'discord.js';
import {
    CommandInteraction,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    SlashCommandBuilder,
} from 'discord.js';

type BotInteraction =
    | CommandInteraction
    | MessageContextMenuCommandInteraction
    | UserContextMenuCommandInteraction;

/**
 * The SlashCommand type.
 * @property {number} [cooldown] - The cooldown of the command.
 * @property {SlashCommandBuilder} data - The data of the command.
 * @property {Function} execute - The function to execute when the command is called.
 */
export type SlashCommand = {
    cooldown?: number;
    data: SlashCommandBuilder;
    execute: (interaction: BotInteraction) => Promise<void>;
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
    type: 'MESSAGECONTEXT';
    execute: (interaction: BotInteraction) => Promise<void>;
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
    type: 'USERCONTEXT';
    execute: (interaction: BotInteraction) => Promise<void>;
};

export type BotCommand =
    | SlashCommand
    | MessageContextMenuCommand
    | UserContextMenuCommand;
