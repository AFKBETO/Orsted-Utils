import { Collection } from 'discord.js';
import {
    MessageContextMenuCommand,
    SlashCommand,
    UserContextMenuCommand,
} from '../types/_index.ts';
import { ConfigData } from '../database/models/ConfigModel.ts';
import { RandomName } from '../utils/_index.ts';

declare module 'discord.js' {
    interface Client {
        cooldowns: Collection<string, Collection<string, number>>;
        slashCommands: Collection<string, SlashCommand>;
        messageContextCommands: Collection<string, MessageContextMenuCommand>;
        userContextCommands: Collection<string, UserContextMenuCommand>;
        images: Collection<string, string[]>;
        botConfig: ConfigData;
        randomName: RandomName;
    }
}
