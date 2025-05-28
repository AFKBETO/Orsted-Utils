import { Collection } from 'discord.js';
import { ConfigData } from '../database/models/ConfigModel.ts';
import { RandomName } from '../utils/RandomName.ts';
import { BotCommand } from '@orsted/types';
declare module 'discord.js' {
    interface Client {
        cooldowns: Collection<string, Collection<string, number>>;
        commands: Collection<string, BotCommand>;
        images: Collection<string, string[]>;
        botConfig: ConfigData;
        randomName: RandomName;
    }
}
