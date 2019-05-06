import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  activeTab: null
};

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  render() {
    const { className } = this.props;
    const containerClassNames = classNames('tab-container', className);

    return (
      <div className={containerClassNames}>
        <div>
          <button className="tab active" value="Tab 1">
            Tab 1
          </button>
          <button className="tab" value="Tab 2">
            Tab 2
          </button>
          <button className="tab" value="Tab 3">
            Tab 3
          </button>
        </div>
        <div>
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
