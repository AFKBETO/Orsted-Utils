import ImageData, { ImageInt } from '../models/ImageModel.ts';

export async function getAllImageData(): Promise<ImageInt[]> {
    return await ImageData.find();
}

export async function getImageData(name: string): Promise<string[]> {
    const result = await ImageData.findOne({ name: name });
    if (result) {
        return result.urls;
    } else {
        return [];
    }
}

export async function addNewImageData(
    name: string,
    url: string,
): Promise<boolean> {
    const result = await ImageData.findOneAndUpdate(
        { name: name },
        { $addToSet: { urls: url } },
        { new: true, upsert: true },
    );
    return result !== null;
}

export async function updateImageData(
    name: string,
    urls: string[],
): Promise<boolean> {
    const result = await ImageData.findOneAndUpdate(
        { name: name },
        { urls: urls },
        { new: true, upsert: false },
    );
    return result !== null;
}
