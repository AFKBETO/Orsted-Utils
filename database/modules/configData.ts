import { ConfigData, ConfigModel } from '../models/ConfigModel.ts';

export async function getConfigData(): Promise<ConfigData> {
    const configQuery = await ConfigModel.find()
        .sort({ timestamp: -1 }).limit(1);
    if (configQuery.length === 0) {
        throw new Error('No config data found');
    }
    const latestConfig = configQuery[0];
    // deno-lint-ignore no-unused-vars
    const { _id, __v, timestamp, ...result } = latestConfig.toObject();
    return result;
}

export async function updateConfigData(config: ConfigData): Promise<boolean> {
    const newConfig = new ConfigModel(config);
    const result = await newConfig.save();
    return result !== null;
}
