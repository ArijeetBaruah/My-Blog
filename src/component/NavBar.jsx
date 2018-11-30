import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
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
    this.props.history(url);
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

  getUserInicials() {
    let userDetail = null;
    if (this.props.user.details.data) {
      _.each(this.props.user.details.data, (user) => {
        userDetail = user;
      });
      return `${_.first(userDetail.firstname)}${_.first(userDetail.lastname)}`;
    }
    return '';
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
          {
            !user.user ?
            <NavLink
              href={DEADLINK}
              onClick={() => this.Login('/login')}
              >
              Login
            </NavLink>
            :
            <NavLink
              href={DEADLINK}
              onClick={() => this.Login('/login')}
              >
              Logout
            </NavLink>
          }
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
  history: PropTypes.shape({}).isRequired,
};

export default NavBar;
