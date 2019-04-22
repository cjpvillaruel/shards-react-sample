import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'shards-react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <NavLink onClick={firebase.doSignOut}>Sign Out</NavLink>
);

export default withFirebase(SignOutButton);

SignOutButton.propTypes = {
  firebase: PropTypes.shape({}).isRequired
};
