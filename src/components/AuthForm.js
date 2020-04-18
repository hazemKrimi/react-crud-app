import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { MainContext } from '../contexts/MainContext';

// TODO add transitions with react-spring or framer-motion and add validation login with formik and yup

const StyledForm = styled.form`
    background: ${props => props.mode ? '#373737' : '#F2F2F2'};
    color: ${props => props.mode ? 'white' : 'black'};
    display: grid;
    grid-template-columns: auto;
    row-gap: 2rem;
    width: 50%;
    padding: 2rem;
    text-align: center;

    input {
        background: ${props => props.mode ? '#444444' : '#94E1F2'};
        color: ${props => props.mode ? 'white' : 'black'};
        border: none;
        box-sizing: border-box;
        padding: .5rem;
    }
`;

const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    display: grid;
    justify-items: center;
    align-items: center;
`;

const Overlay = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    );
}

const AuthForm = ({ type, cancel }) => {
    const { darkMode } = useContext(MainContext);

    const submitHandler = event => {
        event.preventDefault();
        console.log('submit');
    };

    const loginHandler = event => {
        event.preventDefault();
        console.log('submit');
    };

    const cancelHandler = () => {
        cancel();
    };

    if (type === 'signup') return (
        <Overlay>
            <StyledForm mode={darkMode ? 1 : 0}>
                <h2>Signup</h2>
                <input type='text' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <div>
                    <Button text='Signup' handler={() => submitHandler()} />
                    <span onClick={() => cancelHandler()}>Cancel</span>
                </div>
            </StyledForm>
        </Overlay>
    );

    if (type === 'login') return (
        <Overlay>
            <StyledForm mode={darkMode ? 1 : 0}>
                <h2>Login</h2>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <div>
                    <Button text='Signup' handler={() => loginHandler()} />
                    <span onClick={() => cancelHandler()}>Cancel</span>
                </div>
            </StyledForm>
        </Overlay>
    );
}
 
export default AuthForm;