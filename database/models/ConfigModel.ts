import { Document, model, Schema } from 'mongoose';

export interface ConfigData {
    authorizeRole: string;
    donutId: string;
    eventLogId: string;
    hotSauceId: string;
    sweetSauceId: string;
    looperId: string;
    shameId: string;
    shameReactIconId: string;
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
    donutId: String,
    eventLogId: String,
    hotSauceId: String,
    sweetSauceId: String,
    looperId: String,
    shameId: String,
    shameReactIconId: String,
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

const unconfigurableFields = [
    'timestamp',
];
export type ConfigField = keyof ConfigData;
export const configurableFields: ConfigField[] = Object.keys(Config.obj).filter(
    (key) => unconfigurableFields.includes(key) === false,
) as ConfigField[];

export default model<ConfigInt>('config', Config);
