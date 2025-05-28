import { Client } from 'discord.js';
import { RandomName } from '../types/_index.ts';
import { cacheImageData } from './cacheImageData.ts';

export async function initializeClientUtils(client: Client): Promise<void> {
    if (!client.botConfig) {
        throw new Error('Client botConfig is not initialized');
    }
    client.images = await cacheImageData();
    client.randomName = new RandomName(
        client.botConfig.maleNames,
        client.botConfig.femaleNames,
    );
}
