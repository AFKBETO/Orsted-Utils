import AnimeModel, { AnimeInt } from '../models/AnimeModel.ts';

export async function getAnimeData(): Promise<AnimeInt[]> {
    return await AnimeModel.find();
}

export async function getAnimeByName(name: string): Promise<AnimeInt | null> {
    return await AnimeModel.findOne({ name: name });
}
