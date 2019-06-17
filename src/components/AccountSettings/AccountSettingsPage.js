import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PasswordChange from '../PasswordChange';

/**
 * To add Tab component soon
 * import Tab from '../Tab';
 * import TabMenu from '../Tab/TabMenu';
 */

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
        {currentTab}
        <PasswordChange />
      </div>
    );
  }
}

export default withRouter(AccountSettingsPage);
