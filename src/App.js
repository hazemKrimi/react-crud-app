import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';

const client = new ApolloClient({
  uri: process.env.REACT_APP_LINK
});

const App = () => (
  <ApolloProvider client={client}>
    <Nav />
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
      <Route path='/about' exact>
        About page
      </Route>
      <Route path='*' exact>
        404 Not Found
      </Route>
    </Switch>
  </ApolloProvider>
);

export default App;
