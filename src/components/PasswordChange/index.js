import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import {
  Form,
  FormInput,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'shards-react';

const INITIAL_STATE = {
  originalPassword: '',
  newPassword: '',
  confirmPassword: '',
  error: null,
  success: false
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  validateForm() {
    const { newPassword, confirmPassword } = this.state;
    let error = null;
    if (newPassword !== confirmPassword) {
      error = {
        message: "Password doesn't match"
      };
      this.setState({ error: error, success: false });
      return false;
    }
    return true;
  }
  onSubmit = event => {
    event.preventDefault();
    const { newPassword } = this.state;
    const { firebase } = this.props;

    if (this.validateForm()) {
      firebase
        .doPasswordUpdate(newPassword)
        .then(() => {
          this.setState({ ...INITIAL_STATE, success: true });
        })
        .catch(error => {
          this.setState({ error, success: false });
        });
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { newPassword, confirmPassword, error, success } = this.state;

    // for validation
    // const isInvalid =
    //   newPassword !== confirmPassword || originalPassword === '';

    return (
      <Card style={{ maxWidth: '400px', margin: '100px auto' }}>
        <CardHeader>
          <h3>Change Password</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            {error && (
              <p style={{ color: '#8e1717' }}>{error && error.message}</p>
            )}
            {success && (
              <p style={{ color: 'green' }}>Successfully changed password!</p>
            )}
            <FormGroup>
              <label htmlFor="newPassword">New Password</label>
              <FormInput
                id="newPassword"
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <FormInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <Button pill type="submit">
              {' '}
              Change password{' '}
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default withFirebase(PasswordChangeForm);
