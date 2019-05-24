import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tab from '../Tab';
import TabMenu from '../Tab/TabMenu';
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

export default withRouter(AccountSettingsPage);
