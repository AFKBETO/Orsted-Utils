import { Client } from 'discord.js';
import { RandomName } from './RandomName.ts';

export function initializeClientUtils(client: Client): void {
    if (!client.botConfig) {
        throw new Error('Client botConfig is not initialized');
    }
    client.randomName = new RandomName(
        client.botConfig.maleNames,
        client.botConfig.femaleNames,
    );
}
