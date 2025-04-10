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
    initializeClientUtils,
    isBotCommand,
    isMessageContextMenuCommand,
    isUserContextMenuCommand,
    isSlashCommand,
    isValidURL,
};
