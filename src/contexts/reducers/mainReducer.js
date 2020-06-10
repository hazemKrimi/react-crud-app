export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_ONLINE = 'SET_ONLINE';
export const SET_OFFLINE = 'SET_OFFLINE';

export const reducer = (state, { type }) => {
    switch (type) {
        case TOGGLE_DARK_MODE: return { ...state, darkMode: !state.darkMode };
        case SET_OFFLINE: return { ...state, offline: true };
        case SET_ONLINE: return { ...state, offline: false };
        default: return state;
    }
}