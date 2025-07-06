import { Sticker } from 'discord.js';
import StickerModel, { StickerInt } from '../models/StickerModel.ts';
export async function fetchStickerUsages(): Promise<StickerInt[]> {
    return await StickerModel.find({}, null, { sort: { timestamp: -1 } });
}
export async function updateStickerUsage(sticker: Sticker): Promise<void> {
    await StickerModel.findOneAndUpdate(
        {
            stickerId: sticker.id,
            stickerName: sticker.name,
        },
        {
            $inc: {
                useCount: 1,
            },
            $set: {
                lastUse: Math.floor(Date.now() / 1000),
            },
        },
        {
            upsert: true,
        },
    );
}
