import { Document, model, Schema } from 'mongoose';

export interface ConfigData {
    authorizeRole: string;
    eventLogId: string;
    hotSauceId: string;
    sweetSauceId: string;
    looperId: string;
    shameId: string;
    orstedHotId: string;
    orstedSweetId: string;
    databaseId: string;
    botDevId: string;
    generalId: string;
    privateId: string;
    logsId: string;
    councilId: string;
    spoilerId: string;
    trashId: string;
    femaleNames: string[];
    maleNames: string[];
}

export interface ConfigInt extends Document, ConfigData {
    timestamp: number;
}

export const Config = new Schema({
    authorizeRole: String,
    eventLogId: String,
    hotSauceId: String,
    sweetSauceId: String,
    looperId: String,
    shameId: String,
    orstedHotId: String,
    orstedSweetId: String,
    databaseId: String,
    botDevId: String,
    generalId: String,
    privateId: String,
    logsId: String,
    councilId: String,
    spoilerId: String,
    trashId: String,
    femaleNames: {
        type: [String],
        default: [],
    },
    maleNames: {
        type: [String],
        default: [],
    },
    timestamp: {
        type: Number,
        default: Date.now(),
    },
});

export default model<ConfigInt>('config', Config);
