import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';
import { reducer, SIGN_UP, LOG_IN, LOG_OUT } from './reducers/authReducer';
import { useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [{ user }, dispatch] = useReducer(reducer, { 
        user: null
    });

    useEffect(() => {
        if (localStorage.getItem('authToken') && localStorage.getItem('refreshToken')) {
            dispatch({ type: LOG_IN, payload: jwtDecode(localStorage.getItem('refreshToken')) });
        }
    }, []);

    const signup = async(username, email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });
            if (res.status !== 200) throw res;
            res = await res.json();
            localStorage.setItem('authToken', res.authToken);
            localStorage.setItem('refreshToken', res.refreshToken);
            dispatch({ type: SIGN_UP, payload: jwtDecode(res.authToken) });
        } catch (err) {
            throw err;
        }
    };

    const login = async(email, password) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (res.status !== 200) throw new Error(res.message);
            res = await res.json();
            localStorage.setItem('authToken', res.authToken);
            localStorage.setItem('refreshToken', res.refreshToken);
            dispatch({ type: LOG_IN, payload: jwtDecode(res.authToken) });
        } catch (err) {
            throw err;
        }
    };

    const logout = async() => {
        try {
            let res = await fetch(`${process.env.REACT_APP_SERVER}/users/logout`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            if (res.status !== 200) throw res;
            res = await res.text();
            if (res === 'Logged out successfully') {
                localStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
                dispatch({ type: LOG_OUT });
            };
        } catch (err) {
            throw err;
        }
    };

    const token = async() => {
        try {
            if (!localStorage.getItem('refreshToken')) return;
            let res = await fetch(`${process.env.REACT_APP_SERVER}/token?refreshToken=${localStorage.getItem('refreshToken')}`);
            res = await res.json();
            console.log(res);
            if (res.status !== 200) throw res;
            localStorage.setItem('authToken', res.authToken);
            localStorage.setItem('refreshToken', res.refreshToken);
            console.log(jwtDecode(res.refreshToken));
        } catch (err) {
            throw err;
        }
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, logout, token }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;