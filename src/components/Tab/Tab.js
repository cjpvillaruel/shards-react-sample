import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Tab.scss';

const INITIAL_STATE = {
  activeTab: null
};

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleClick = e => {
    const {
      target: { value }
    } = e;
    console.log(value);
    this.setState({ activeTab: value });
  };
  render() {
    const { className } = this.props;
    const containerClassNames = classNames('tab-container', className);

    return (
      <div className={containerClassNames}>
        <div className="tab-menu-container">
          <button
            className="tab active"
            onClick={this.handleClick}
            value="Tab 1"
          >
            Tab 1
          </button>
          <button className="tab" onClick={this.handleClick} value="Tab 2">
            Tab 2
          </button>
          <button className="tab" onClick={this.handleClick} value="Tab 3">
            Tab 3
          </button>
        </div>
        <div className="tab-content-container">
          <div className="tab-content active">Tab 1 content</div>
          <div className="tab-content">Tab 2 content</div>
          <div className="tab-content">Tab 3 content</div>
        </div>
      </div>
    );
  }
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string
};

Tab.defaultProps = {
  tabs: null,
  className: null
};

export default Tab;
