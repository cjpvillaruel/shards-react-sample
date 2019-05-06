import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tab from '../Tab';
import TabMenu from '../Tab/TabMenu';

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
        <Tab>
          <TabMenu />
          <TabMenu />
          <TabMenu />
        </Tab>
      </div>
    );
  }
}

export default withRouter(AccountSettingsPage);
