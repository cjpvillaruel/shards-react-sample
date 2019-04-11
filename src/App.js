import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import NavBar from './components/NavBar';

import * as ROUTES from './constants/routes';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path={ROUTES.SIGN_IN} component={LoginPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </div>
    </Router>
  );
};

export default App;
