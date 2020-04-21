import React, { useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../contexts/MainContext';
import { Redirect } from 'react-router-dom';

const StyledDiv = styled.div`
  margin: 5rem 2rem;
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;
  text-align: center;

  h2 {
    font-size: 35px;
    text-transform: capitalize;
  }
`;

const HomePage = () => {
    const { user } = useContext(MainContext);

    return user ? ( 
        <StyledDiv>
            <h2>Welcome { user && user.username }</h2>
        </StyledDiv>
    ) : (
        <Redirect to='/' />
    );
}
 
export default HomePage;