import { Collection } from 'discord.js';
import { getAllImageData } from '../database/_index.ts';

export async function cacheImageData(): Promise<Collection<string, string[]>> {
    const imageDatas = await getAllImageData();
    const images = new Collection<string, string[]>();
    for (const imageData of imageDatas) {
        images.set(imageData.name, imageData.urls);
    }
    return images;
}
