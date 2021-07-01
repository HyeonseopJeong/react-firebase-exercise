import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Auth from './pages/Auth';
import Crud from './pages/Crud';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Link to="/">
          <h1>React Firbase Exercise</h1>
        </Link>

        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/crud" component={Crud} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
