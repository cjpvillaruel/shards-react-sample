import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormInput,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'shards-react';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, password, confirmPassword, error } = this.state;
    return (
      <Card style={{ maxWidth: '400px', margin: '100px auto' }}>
        <CardHeader>
          <h3>Sign Up</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <label htmlFor="first-name">First Name</label>
              <FormInput
                id="first-name"
                placeholder="John"
                name="firstName"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="last-name">Last Name</label>
              <FormInput
                id="last-name"
                placeholder="Meyer"
                name="lastName"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email</label>
              <FormInput
                value={email}
                id="email"
                type="email"
                name="email"
                placeholder="jmayer@sample.com"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="username">Username</label>
              <FormInput
                value={username}
                id="username"
                name="username"
                placeholder="jmayer"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <FormInput
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="confirm-password">Confirm Password</label>
              <FormInput
                value={confirmPassword}
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="Password"
                onChange={this.onChange}
              />
            </FormGroup>

            <Button type="submit" pill style={{ marginTop: 20 }}>
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export { SignUpForm, SignUpLink };
export default SignUpPage;
