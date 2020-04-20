import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { MainContext } from '../contexts/MainContext';


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
  const { form, setForm, darkMode } = useContext(MainContext);

  return (
    <StyledDiv>
      <h2>This is a Simple CRUD app that consumes a GraphQL api of posts and users</h2>
      <div>
        <Button mode={darkMode ? 1 : 0} onClick={() => setForm('signup')}>Signup</Button>
        <span onClick={() => setForm('login')}>Login</span>
      </div>
      { form === 'signup' && <SignupForm cancel={() => setForm(false)} /> }
      { form === 'login' && <LoginForm cancel={() => setForm(false)} /> }
    </StyledDiv>
  );
}

export default LandingPage;