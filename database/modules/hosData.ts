import HosModel, { HosInt } from '../models/HosModel.ts';

export async function getHosData(id: string): Promise<HosInt | null> {
    const hosData = await HosModel.findOne({ id: id });
    return hosData;
}

export async function createHosData(hosData: {
    id: string;
    fromId: string;
    targetId?: string;
}): Promise<HosInt> {
    const newHosData = await HosModel.create({
        id: hosData.id,
        fromId: hosData.fromId,
        targetId: hosData.targetId ?? '',
        reactCount: 0,
    });
    return newHosData;
}
