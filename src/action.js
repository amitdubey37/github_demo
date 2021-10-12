import { ACTION } from './utils/constants/index';

export function showMainLoader() {
    return { type: ACTION.SHOW_MAIN_LOADER };
}

export function hideMainLoader() {
    return { type: ACTION.HIDE_MAIN_LOADER };
}

export function showError() {
    return { type: ACTION.SHOW_ERROR };
}

export function clearError() {
    return { type: ACTION.CLEAR_ERROR };
}
