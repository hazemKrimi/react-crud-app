import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../contexts/MainContext';

const StyledAlert = styled.div`
    width: 100%;
    height: 30px;
    background: red;
    color: white;
    text-align: center;

    @media(max-width: 768px) {
        height: 60px;
    }
`;

const Alert = () => {
    const { offline } = useContext(MainContext);

    const error = offline && 'You are currently offline! Some features won\'t work properly';

    return error && ( 
        <StyledAlert>
            { error }
        </StyledAlert>
    );
}
 
export default Alert;