import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { MainContext } from '../contexts/MainContext';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

const StyledNav = styled.nav`
    padding: 1rem;
    background: ${props => props.mode ? '#444444' : '#94E1F2'};
    display: grid;
    grid-template-columns: 2fr auto;
    align-items: center;

    h2 {
        font-size: 20px;
        font-weight: 550;
        justify-self: flex-start
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(2, 1fr) .5fr;
        align-items: center;
        justify-items: flex-end;
        column-gap: .7rem;
        
        li {
            cursor: pointer;
            font-weight: 300;
            text-transform: capitalize;
        }
    }
`;

const Nav = () => {
    const { darkMode, toggleDarkMode } = useContext(MainContext);
    const { user, logout } = useContext(AuthContext);
    const [form, setForm] = useState(false);

    const history = useHistory();

    return (
        <>
            <StyledNav mode={darkMode ? 1 : 0}>
                <h2>React CRUD App</h2>
                <ul>
                    {
                        user ? (
                            <>
                                <li>
                                    {user.username}
                                </li>
                                <li onClick={async () => { await logout(); history.push('/'); }}>
                                    Logout
                                </li>
                            </>
                        ) : (
                            <>
                                <li onClick={() => setForm('login')}>
                                    Login
                                </li>
                                <li onClick={() => setForm('signup')}>
                                    Signup
                                </li>
                            </>
                        )
                    }
                    <li onClick={() => toggleDarkMode()}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </li>
                </ul>
            </StyledNav>
            { form === 'signup' && <SignupForm form={form} cancel={() => setForm(false)} /> }
            { form === 'login' && <LoginForm form={form} cancel={() => setForm(false)} /> }
        </>
    );
}

export default Nav;