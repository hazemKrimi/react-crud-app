import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
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
  }

  div span {
    cursor: pointer;
    margin-left: 20px;

    @media(max-width: 768px) {
      display: block;
      margin: 0;
      margin-top: 10px;
    }
  }
`;

const LandingPage = () => {
  const { user } = useContext(AuthContext);

  return !user ? (
    <StyledDiv>
      <h2>This is a Simple CRUD app that consumes a GraphQL api of posts and users</h2>
    </StyledDiv>
  ) : (
    <Redirect to='/home' />
  );
}

export default LandingPage;