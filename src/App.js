import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import NavBar from './components/NavBar';

import * as ROUTES from './constants/routes';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUp';
import { withAuthentication } from './components/Session';
import PasswordForgetPage from './components/PasswordForget';
import AccountSettingsPage from './components/AccountSettings';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path={ROUTES.SIGN_IN} component={LoginPage} />
        <Route path={ROUTES.LOGIN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ACCOUNT_SETTINGS} component={AccountSettingsPage} />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
