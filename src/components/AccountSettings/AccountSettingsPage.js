import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withAuthorization } from '../Session';
import PasswordChange from '../PasswordChange';

class AccountSettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'General'
    };
  }

  render() {
    const { currentTab } = this.state;
    return (
      <div className="account-settings-container">
        <PasswordChange />
      </div>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountSettingsPage);
