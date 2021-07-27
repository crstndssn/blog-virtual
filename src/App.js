
import './style/main.css';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

// beta
import Home from './views/Home'
import User from './views/Home'
import Navigation from './components/Navigation'
import Login from './components/auth/Login'
import Reset from './components/auth/Reset'
import Signup from './components/auth/Signup'
import PageNotFound from './components/PageNotFound';
import Admin from './views/Admin.js'

import test from './views/test/index.js'
import React, { useEffect, useState } from 'react';
import { store } from './firebase';

const App = () => {

  return (
    <div className="mb-10">

      <Router>
        <Switch>
          <Route exact path="/:id" component={Home} />
          <Route exact path="/:id/admin" component={Admin} />
          <Route path="/:id/login" component={Login} />
          <Route path="/:id/signup" component={Signup} />
          <Route path="/:id/reset" component={Reset} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
