import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid lightblue;
  border-radius: 5px;
`;

const LandingPage = () => (
  <StyledDiv key={_id}>
      <h2>{title}</h2>
      <p>{author}</p>
  </StyledDiv>
);

export default LandingPage;