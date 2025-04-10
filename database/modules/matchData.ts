import MatchModel, { MatchInt } from '../models/MatchModel.ts';

export async function getMatchData(
    id1: string,
    id2: string,
): Promise<MatchInt> {
    const matchData = await MatchModel.findOne({
        $or: [
            { id1: id1, id2: id2 },
            { id1: id2, id2: id1 },
        ],
    }) ||
        new MatchModel({
            id1,
            id2,
            value: 0,
            timestamp: 0,
        });

    return matchData;
}
