import React from 'react';
import {
  Form,
  FormInput,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  Button
} from 'shards-react';
import { SignUpLink } from '../SignUp';

const LoginForm = () => (
  <Card style={{ maxWidth: '400px', margin: '100px auto' }}>
    <CardHeader>
      <h3>Login</h3>
    </CardHeader>
    <CardBody>
      <Form>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <FormInput id="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <FormInput type="password" id="password" placeholder="Password" />
        </FormGroup>
        <SignUpLink />
        <Button pill> Login </Button>
      </Form>
    </CardBody>
  </Card>
);

export default LoginForm;
