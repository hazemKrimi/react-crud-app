import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { MainContext } from '../contexts/MainContext';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Baloo Paaji 2';
    font-size: 17px;
    user-select: none;
    outline: none;
  }

  body {
    background: ${props => props.mode ? '#373737' : '#F2F2F2'};
    color: ${props => props.mode ? 'white' : 'black'};
  }

  body::-webkit-scrollbar {
    width: .5rem;
  }

  body::-webkit-scrollbar-thumb {
    background: ${props => props.mode ? '#444444' : '#94E1F2'};
  }
`;

const GlobalStyles = () => {
  const { darkMode } = useContext(MainContext);
  
  return (
    <Global mode={darkMode ? 1 : 0} />
  );
}

export default GlobalStyles;