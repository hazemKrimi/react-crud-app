import React from 'react';
import styled from 'styled-components';

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
`;

const LandingPage = () => (
  <StyledDiv>
    <h2>The page you are looking for is not found</h2>
  </StyledDiv>
);

export default LandingPage;