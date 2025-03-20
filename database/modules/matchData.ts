import MatchModel, { MatchInt } from '../models/MatchModel.ts';

const EXP_TIME = 86400;

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

    if ((Date.now() - matchData.timestamp) / 1000 > EXP_TIME) {
        matchData.value = Math.floor(Math.random() * 101);
        matchData.timestamp = Date.now();
        await matchData.save();
    }

    return matchData;
}
