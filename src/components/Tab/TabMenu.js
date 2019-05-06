import React from 'react';
import classNames from 'classnames';
import PropType from 'prop-types';

const TabMenu = props => {
  const { children, label, isActive } = props;
  const menuClassNames = classNames('tab-menu', { active: isActive });
  return (
    <button type="button" className={menuClassNames}>
      {children}
    </button>
  );
};

TabMenu.propTypes = {
  label: PropType.string,
  children: PropType.node,
  isActive: PropType.bool
};

TabMenu.defaultProps = {
  label: null,
  children: null,
  isActive: false
};

export default TabMenu;
