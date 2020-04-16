import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContextProvider from './contexts/MainContext';
import GlobalStyle from './components/GlobalStyle';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';

const App = () => (
  <MainContextProvider>
    <GlobalStyle />
    <Nav />
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Route path='*' exact>
        <NotFound />
      </Route>
    </Switch>
  </MainContextProvider>
);

export default App;
