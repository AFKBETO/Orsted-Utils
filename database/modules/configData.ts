import ConfigModel, { ConfigData } from '../models/ConfigModel.ts';

export const getConfigData = async (): Promise<ConfigData> => {
    const configQuery = await ConfigModel.find().sort({ timestamp: -1 }).limit(
        1,
    );
    if (configQuery.length === 0) {
        throw new Error('No config data found');
    }
    const latestConfig = configQuery[0];
    const result: ConfigData = { ...latestConfig.toObject() };

    return result;
};

export const updateConfigData = async (
    config: ConfigData,
): Promise<boolean> => {
    const latestConfig = await ConfigModel.find().sort({ timestamp: -1 }).limit(
        1,
    );
    if (latestConfig.length > 0) {
        const result = await ConfigModel.updateOne(
            { _id: latestConfig[0]._id },
            { $set: config },
        );
        if (result.acknowledged) {
            return true;
        }
        return false;
    } else {
        return false;
    }
};
