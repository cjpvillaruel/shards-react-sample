import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  password: '',
  confirmPassword: '',
  error: null,
  success: false
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(prosps);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { confirmPassword } = this.state;
    const { firebase } = this.props;

    firebase
      .doPasswordUpdate(passwordOne)
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
    const { password, confirmPassword } = this.state;

    const isInvalid = password !== confirmPassword || password === '';

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
              <FormInput
                id="password"
                name="password"
                onChange={this.onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                id="confirmPassword"
                name="confirmPassword"
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
