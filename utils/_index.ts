import { cacheImageData } from './cacheImageData.ts';
import { initializeClientUtils } from './initializeClientUtils.ts';
import { isValidURL } from './isValidURL.ts';
import {
    isBotCommand,
    isMessageContextMenuCommand,
    isSlashCommand,
    isUserContextMenuCommand,
} from './typeguard.ts';
export { RandomName } from './RandomName.ts';

export const Utils = {
    cacheImageData,
    initializeClientUtils,
    isBotCommand,
    isMessageContextMenuCommand,
    isUserContextMenuCommand,
    isSlashCommand,
    isValidURL,
};
