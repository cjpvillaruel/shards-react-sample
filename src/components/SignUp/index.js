import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Form,
  FormInput,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'shards-react';

import FormValidator from '../../utils/FormValidator';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
  <div>
    <SignUpForm />}
  </div>
);

const INITIAL_STATE = {};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.validator = new FormValidator([
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required'
      },
      {
        field: 'firstName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Firstname is required'
      },
      {
        field: 'lastName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Lastname is required'
      },
      {
        field: 'username',
        method: 'isEmpty',
        validWhen: false,
        message: 'Username is required'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required'
      },
      {
        field: 'confirmPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password confirmation is required'
      }
    ]);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
      errors: {},
      validation: this.validator.valid(),
      submitted: false
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const validation = this.validator.validate(this.state);
    this.setState({ submitted: true });
    if (validation.isValid) {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          this.setState({ error });
        });
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, password, confirmPassword, error } = this.state;
    let validation = this.state.submitted // if the form has been submitted at least once
      ? this.validator.validate(this.state) // then check validity every time we render
      : this.state.validation; // otherwise just use what's in state

    return (
      <Card style={{ maxWidth: '400px', margin: '100px auto' }}>
        <CardHeader>
          <h3>Sign Up</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            {error && (
              <p style={{ color: '#8e1717' }}>{error && error.message}</p>
            )}
            <FormGroup>
              <label htmlFor="first-name">First Name</label>
              <FormInput
                id="first-name"
                placeholder="John"
                name="firstName"
                onChange={this.onChange}
                onBlur={this.validate}
                invalid={validation.firstName.isInvalid}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="last-name">Last Name</label>
              <FormInput
                id="last-name"
                placeholder="Meyer"
                name="lastName"
                onChange={this.onChange}
                onBlur={this.validate}
                invalid={validation.lastName.isInvalid}
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
                onBlur={this.validate}
                invalid={validation.email.isInvalid}
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
                onBlur={this.validate}
                invalid={validation.username.isInvalid}
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
                invalid={validation.password.isInvalid}
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
                invalid={validation.password.isInvalid}
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
export default SignUpPage;
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export { SignUpForm, SignUpLink };
