import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContextProvider from './contexts/MainContext';
import GlobalStyle from './components/GlobalStyle';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Alert from './components/Alert';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

// TODO fix the jwt refresh token logic and authentication on mobile

const App = () => (
  <MainContextProvider>
    <GlobalStyle />
    <Alert />
    <Nav />
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Route path='/home' exact>
        <HomePage />
      </Route>
      <Route path='*' exact>
        <NotFound />
      </Route>
    </Switch>
  </MainContextProvider>
);

export default App;
