import React, { createContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [offline, setOffline] = useState(false);
    const [user, setUser] = useState(null);
    const [form, setForm] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode(true);
        if (localStorage.getItem('authToken') && localStorage.getItem('refreshToken')) {
            setUser(jwtDecode(localStorage.getItem('refreshToken')));
        }

        window.addEventListener('offline', () => setOffline(true));
        window.addEventListener('online', () => setOffline(false));
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const signup = async(username, email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_LINK}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                    mutation {
                        createUser(username: "${username}", email: "${email}", password: "${password}") {
                            authToken
                            refreshToken
                        }
                    }
                `
                })
            });
            res = await res.json();
            if (res.errors) throw res.errors[0].message;
            localStorage.setItem('authToken', res.data.createUser.authToken);
            localStorage.setItem('refreshToken', res.data.createUser.refreshToken);
            setUser(jwtDecode(res.data.createUser.authToken));
        } catch(err) {
            throw err;
        }
    };

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
                            authToken
                            refreshToken
                        }
                    }
                `
                })
            });
            res = await res.json();
            if (res.errors) throw res.errors[0].message;
            localStorage.setItem('authToken', res.data.login.authToken);
            localStorage.setItem('refreshToken', res.data.login.refreshToken);
            setUser(jwtDecode(res.data.login.authToken));
        } catch(err) {
            throw err;
        }
    };

    const logout = async() => {
        try {
            let res = await fetch(`${process.env.REACT_APP_LINK}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify({
                    query: `
                    query {
                        logout
                    }
                `
                })
            });
            res = await res.json();
            if (res.errors) throw res.errors[0].message;
            if (res.data.logout === 'Logged out successfully') {
                localStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
                setUser(null);
                setForm(false);
            };
        } catch(err) {
            throw err;
        }
    };

    const token = async() => {
        try {
            if (!localStorage.getItem('refreshToken')) return;
            let res = await fetch(`${process.env.REACT_APP_LINK}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                    query {
                        token(refreshToken: "${localStorage.getItem('refreshToken')}") {
                            authToken
                            refreshToken
                        }
                    }
                `
                })
            });
            res = await res.json();
            console.log(res);
            if (res.errors) throw res.errors[0].message;
            localStorage.setItem('authToken', res.data.token.authToken);
            localStorage.setItem('refreshToken', res.data.token.refreshToken);
            setUser(jwtDecode(res.data.token.refreshToken));
        } catch (err) {
            throw err;
        }
    };
    
    return (
        <MainContext.Provider value={{ darkMode, offline, form, user, setForm, signup, login, logout, token, toggleDarkMode }}>
            { children }
        </MainContext.Provider>
    );
}
 
export default MainContextProvider;