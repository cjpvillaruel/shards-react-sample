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

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  success: false,
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE, success: true });
      })
      .catch(error => {
        this.setState({ error, success: false });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { error, success } = this.state;
    // TODO: add validation
    // const isInvalid = email === '';

    return (
      <Card style={{ maxWidth: '400px', margin: '100px auto' }}>
        <CardHeader>
          <h3>Forgot Password</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            {error && (
              <p style={{ color: '#8e1717' }}>{error && error.message}</p>
            )}
            {success && (
              <p style={{ color: 'green' }}>
                Successfully sent the password reset link! Please check your
                email.
              </p>
            )}
            <FormGroup>
              <FormInput
                id="email"
                name="email"
                placeholder="name@sample.com"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <Button pill type="submit">
              {' '}
              Reset my Password{' '}
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
