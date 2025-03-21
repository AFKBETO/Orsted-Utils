import AnimeModel, { AnimeInt } from '../models/AnimeModel.ts';

export const getAnimeData = async (): Promise<AnimeInt[]> => {
    return await AnimeModel.find();
};

export const getAnimeByName = async (
    name: string,
): Promise<AnimeInt | null> => {
    return await AnimeModel.findOne({ name: name });
};
