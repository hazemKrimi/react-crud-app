import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => (
  <>
    <Nav />
    <Switch>
      <Route path='/' exact>
        Landing Page
      </Route>
      <Route path='/about' exact>
        About page
      </Route>
      <Route path='*' exact>
        404 Not Found
      </Route>
    </Switch>
  </>
);

export default App;
