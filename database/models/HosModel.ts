import { Document, model, Schema } from 'mongoose';

export interface HosInt extends Document {
    id: string;
    fromId: string;
    targetId: string;
    reactCount: number;
}

export const Hos = new Schema({
    id: String,
    fromId: String,
    targetId: String,
    reactCount: Number,
});

export default model<HosInt>('shame', Hos);
