import { Document, model, Schema } from 'mongoose';
export interface StickerInt extends Document {
    stickerId: string;
    stickerName: string;
    useCount: number;
    lastUse: number;
}
export const StickerSchema = new Schema({
    stickerId: String,
    stickerName: String,
    useCount: {
        type: Number,
        default: 0,
    },
    lastUse: {
        type: Number,
    },
});
export default model<StickerInt>('sticker', StickerSchema);
