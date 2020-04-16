import React, { createContext, useState, useEffect } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [jwt, setJwt] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('jwt') && localStorage.getItem('jwt').length > 0) setJwt(localStorage.getItem('jwt'));
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode(true);
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const login = async(email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_LINK}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                    query {
                        login(email: "${email}", password: "${password}") {
                            token
                        }
                    }
                `
                })
            });
            res = await res.json();
            console.log(res.data.login.token);
            localStorage.setItem('jwt', res.data.login.token);
        } catch(err) {
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem('jwt');
    };
    
    return (
        <MainContext.Provider value={{ darkMode, jwt, login, logout, toggleDarkMode }}>
            { children }
        </MainContext.Provider>
    );
}
 
export default MainContextProvider;