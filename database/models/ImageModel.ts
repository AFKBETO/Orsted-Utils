import { Document, model, Schema } from 'mongoose';
import { isValidURL } from '../../utils/isValidURL.ts';

export interface ImageInt extends Document {
    name: string;
    urls: string[];
}

export const Image = new Schema({
    name: String,
    urls: {
        type: [String],
        default: [],
        validate: {
            validator: function (v: string[]) {
                return v.every((url) => isValidURL(url));
            },
        },
    },
});

export default model<ImageInt>('image', Image);
