import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../contexts/MainContext';

const StyledButton = styled.button`
    cursor: pointer;    
    padding: 8px 16px;
    border: none;
    color: black;
    background: ${props => props.mode ? '#94E1F2' : '#94E1F2'};
`;

const Button = ({ text, handler }) => {
    const { darkMode } = useContext(MainContext);

    return (
        <StyledButton mode={darkMode ? 1 : 0} type='submit' onClick={handler}>
            { text }
        </StyledButton>
    );
}

export default Button;