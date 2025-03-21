import { Document, model, Schema } from 'mongoose';

export interface AnimeInt extends Document {
    animeId: string;
    name: string;
    commandName: string;
    cron: string;
}

export const Anime = new Schema({
    animeId: String,
    name: String,
    commandName: String,
    cron: String,
});

export default model<AnimeInt>('anime', Anime);
