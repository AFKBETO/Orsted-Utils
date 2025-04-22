import { Document, model, Schema } from 'mongoose';

export interface ConfigData {
    version: string;
    changelogChannelId: string;
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
    twitterEmbedLinks: string[];
}

export interface ConfigInt extends Document, ConfigData {
    timestamp: number;
}

export const Config = new Schema({
    version: String,
    changelogChannelId: String,
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
    twitterEmbedLinks: {
        type: [String],
        default: [],
    },
    timestamp: {
        type: Number,
        default: Date.now(),
    },
});

const unconfigurableFields = [
    'version',
    'timestamp',
];
export type ConfigField = keyof ConfigData;
export const configurableFields: ConfigField[] = Object.keys(Config.obj).filter(
    (key) => unconfigurableFields.includes(key) === false,
) as ConfigField[];

export const ConfigModel = model<ConfigInt>('config', Config);
