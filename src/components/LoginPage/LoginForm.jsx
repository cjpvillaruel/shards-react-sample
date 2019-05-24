import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
import { withFirebase } from '../Firebase';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email);

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render = () => {
    const { error } = this.state;
    return (
      <Card style={{ maxWidth: '400px', margin: '100px auto' }}>
        <CardHeader>
          <h3>Login</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            {error && (
              <p style={{ color: '#8e1717' }}>{error && error.message}</p>
            )}
            <FormGroup>
              <label htmlFor="email">Email</label>
              <FormInput
                id="email"
                name="email"
                placeholder="jim@sample.com"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password</label>
              <FormInput
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <SignUpLink />
            <PasswordForgetLink />
            <Button pill> Login </Button>
          </Form>
        </CardBody>
      </Card>
    );
  };
}

export default withRouter(withFirebase(LoginForm));
