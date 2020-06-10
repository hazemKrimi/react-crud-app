import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContextProvider from './contexts/MainContext';
import AuthContextProvider from './contexts/AuthContext';
import GlobalStyles from './components/GlobalStyles';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Alert from './components/Alert';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

// TODO fix the jwt refresh token logic and authentication on mobile

const App = () => (
  <MainContextProvider>
    <AuthContextProvider>
      <GlobalStyles />
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
    </AuthContextProvider>
  </MainContextProvider>
);

export default App;
