import { isValidURL } from './isValidURL.ts';
import {
    isBotCommand,
    isMessageContextMenuCommand,
    isSlashCommand,
    isUserContextMenuCommand,
} from './typeguard.ts';

export const Utils = {
    isBotCommand,
    isMessageContextMenuCommand,
    isUserContextMenuCommand,
    isSlashCommand,
    isValidURL,
};
