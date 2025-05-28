import { Collection } from 'discord.js';
import { ConfigData } from '../database/models/ConfigModel.ts';
import { BotCommand, RandomName } from '../types/_index.ts';

declare module 'discord.js' {
    interface Client {
        cooldowns: Collection<string, Collection<string, number>>;
        commands: Collection<string, BotCommand>;
        images: Collection<string, string[]>;
        botConfig: ConfigData;
        randomName: RandomName;
    }
}
