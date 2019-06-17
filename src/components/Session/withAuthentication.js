import React from 'react';
import PropTypes from 'prop-types';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      const { firebase } = this.props;
      if (firebase !== null) {
        this.listener = firebase.auth.onAuthStateChanged(authUser => {
          if (authUser) this.setState({ authUser });
          else this.setState({ authUser: null });
        });
      }
    }

    componentWillUnmount() {
      const { firebase } = this.props;
      if (firebase !== null) this.listener();
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.propTypes = {
    firebase: PropTypes.shape({})
  };

  WithAuthentication.defaultProps = {
    firebase: null
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
