import { Sticker } from 'discord.js';
import StickerModel from '../models/StickerModel.ts';
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
