export const SIGN_UP = 'LOG_IN';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case SIGN_UP: return { ...state, user: payload };
        case LOG_IN: return { ...state, user: payload };
        case LOG_OUT: return { ...state, user: null };
        default: return state;
    }
}