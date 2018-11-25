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
import PropTypes from 'prop-types';
import appContaints from '../util/appContaints';
import '../style/creative.scss';

const { DEADLINK } = appContaints;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.Login = this.Login.bind(this);
    this.getLinks = this.getLinks.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      offsetY: window.pageYOffset,
    };
  }

  handleOnClick(url) {
    window.location.hash = url;
  }

  Login(url) {
    this.props.Login(url);
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        offsetY: window.pageYOffset,
      });
    };
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
    const navClass = (this.state.offsetY !== 0 && this.props.home) ? 'navbar-shrink' : (
      this.props.home ? '' : 'navbar-shrink'
    );
    return (
      <Navbar
        className={navClass}
        light
        id="mainNav"
        fixed={this.props.home ? 'top' : ''}
        expand="md"
        >
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

NavBar.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default NavBar;
