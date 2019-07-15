import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from 'shards-react';
import { withAuthentication, AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import SignoutButton from '../SignoutButton';

// for importing icons
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  }

  toggleNavbar() {
    const { collapseOpen } = this.state;
    this.setState({ collapseOpen: !collapseOpen });
  }

  render() {
    const { collapseOpen, dropdownOpen } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => {
          if (authUser) {
            return (
              <NavigationAuth
                toggleNavbar={this.toggleNavbar}
                toggleDropdown={this.toggleDropdown}
                collapseOpen={collapseOpen}
                dropdownOpen={dropdownOpen}
              />
            );
          }
          return (
            <NavigationNonAuth
              collapseOpen={collapseOpen}
              toggleNavbar={this.toggleNavbar}
            />
          );
        }}
      </AuthUserContext.Consumer>
    );
  }
}

const NavigationNonAuth = ({ collapseOpen, toggleNavbar }) => (
  <Navbar type="dark" theme="primary" expand="md">
    <NavbarBrand href="#">Shards React</NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} />

    <Collapse open={collapseOpen} navbar>
      <Nav navbar>
        <NavItem>
          <Link to={ROUTES.SIGN_IN}> Sign in </Link>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

const NavigationAuth = ({
  toggleNavbar,
  collapseOpen,
  toggleDropdown,
  dropdownOpen
}) => (
  <Navbar type="dark" theme="primary" expand="md">
    <NavbarBrand href="#">Shards React</NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} />

    <Collapse open={collapseOpen} navbar>
      <Nav navbar>
        <NavItem>
          <Link to={ROUTES.HOME}>Home</Link>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Disabled
          </NavLink>
        </NavItem>
        <Dropdown open={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle nav caret>
            Account
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to={ROUTES.ACCOUNT_SETTINGS}> Account Settings</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to={ROUTES.IMAGE_CROPPER}> Crop Picture</Link>
            </DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>

      <Nav navbar className="ml-auto">
        <NavItem>
          <SignoutButton />
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

Navigation.propTypes = {
  authUser: PropTypes.shape({})
};

Navigation.defaultProps = {
  authUser: null
};

NavigationAuth.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
  collapseOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired
};

NavigationNonAuth.propTypes = {
  collapseOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired
};

export default withAuthentication(Navigation);
