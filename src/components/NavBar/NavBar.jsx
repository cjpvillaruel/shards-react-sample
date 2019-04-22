import React from 'react';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from 'shards-react';

import * as ROUTES from '../../constants/routes';
import SignoutButton from '../SignoutButton';

export default class NavExample extends React.Component {
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
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="#">Shards React</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to={ROUTES.SIGN_IN}>
                <NavLink active> Sign in </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Disabled
              </NavLink>
            </NavItem>
            <Dropdown open={dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
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
  }
}
