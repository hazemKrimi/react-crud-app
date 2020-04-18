import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import AuthForm from '../components/AuthForm';

// const StyledPost = styled.div`
//   margin: 20px;
//   padding: 20px;
//   border: 1px solid ${props => props.mode ? 'darkblue' : 'lightblue'};
//   border-radius: 5px;
// `;

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
  }
`;

const LandingPage = () => {
  const [form, setForm] = useState(false);

  return (
    <StyledDiv>
      <h2>This is a Simple CRUD app that consumes a GraphQL api of posts and users</h2>
      <div>
        <Button text='Signup' handler={() => setForm('signup')} />
        <span onClick={() => setForm('login')}>Login</span>
      </div>
      { form !== false && <AuthForm type={form} cancel={() => setForm(false)} /> }
    </StyledDiv>
  );
}

export default LandingPage;