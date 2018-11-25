import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import appContaints from '../util/appContaints';

const { DEADLINK } = appContaints;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.Login = this.Login.bind(this);
    this.getLinks = this.getLinks.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOnClick(url) {
    window.location.hash = url;
  }

  Login(url) {
    this.props.Login(url);
  }

  getLinks() {
    const { user, isLoading } = this.props;
    if (isLoading) {
      return (
        <Fragment />
      );
    }
    return (
      <Fragment>
        <NavItem>
          <NavLink
            href={DEADLINK}
            onClick={() => this.handleOnClick('/')}
            >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href={DEADLINK}
            onClick={() => this.Login('/login')}
            >
            {!user? 'Login' : 'Logout'}
          </NavLink>
        </NavItem>
      </Fragment>  
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand
          href={DEADLINK}
          onClick={()=>{
            window.location.hash="/";
          }}
          >
          Home
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.getLinks()}
          </Nav>
        </Collapse>
      </Navbar>
      );
  }
}
export default NavBar;
