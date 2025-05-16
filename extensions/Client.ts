import { Collection } from 'discord.js';
import { BotCommand } from '../types/_index.ts';
import { ConfigData } from '../database/models/ConfigModel.ts';
import { RandomName } from '../utils/_index.ts';

declare module 'discord.js' {
    interface Client {
        cooldowns: Collection<string, Collection<string, number>>;
        commands: Collection<string, BotCommand>;
        images: Collection<string, string[]>;
        botConfig: ConfigData;
        randomName: RandomName;
    }
}
