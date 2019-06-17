import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
    this.googleButton = React.createRef();
  }

  componentDidMount() {
    window.onload = () => {
      window.gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.

        this.auth2 = window.gapi.auth2.getAuthInstance();
        console.log(this.auth2);

        this.auth2.attachClickHandler(
          this.googleButton.current,
          {},
          this.onSuccessGoogleLogin,
          error => {}
        );
      });
    };
  }

  onSuccessGoogleLogin = googleUser => {
    const { firebase } = this.props;
    firebase.doSignInWithGoogle(googleUser, this.onFirebaseLogin);
  };

  // TODO: find other elegant solution for this
  onFirebaseLogin = () => {
    this.props.history.push('/home');
  };

  render() {
    // render error messages
    // const { error } = this.state;
    return (
      <div
        className="g-signin2"
        data-longtitle="true"
        ref={this.googleButton}
      />
    );
  }
}

export default withRouter(withFirebase(SignInGoogleBase));
