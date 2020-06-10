import React, { createContext, useReducer, useEffect } from 'react';
import { reducer, TOGGLE_DARK_MODE, SET_ONLINE, SET_OFFLINE } from './reducers/mainReducer';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [{ darkMode, offline }, dispatch] = useReducer(reducer, {
        darkMode: false,
        offline: false
    });

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) dispatch({ type: TOGGLE_DARK_MODE });

        window.addEventListener('offline', () => dispatch({ type: SET_OFFLINE }));
        window.addEventListener('online', () => dispatch({ type: SET_ONLINE }));
    }, []);

    const toggleDarkMode = () => dispatch({ type: TOGGLE_DARK_MODE });
    
    return (
        <MainContext.Provider value={{ darkMode, offline, toggleDarkMode }}>
            { children }
        </MainContext.Provider>
    );
}
 
export default MainContextProvider;