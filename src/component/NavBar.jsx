import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Sidenav } from 'materialize-css/dist/js/materialize';
import appContaints from '../util/appContaints';

const { DEADLINK } = appContaints;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.Login = this.Login.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  handleOnClick(url) {
    window.location.hash = url;
  }

  Login(url) {
    this.props.Login(url);
  }

  componentDidMount() {
    const sideNav = document.querySelectorAll('.sidenav');
    Sidenav.init(sideNav, {
      draggable: true,
    });
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
        <li>
          <a
            href={DEADLINK}
            onClick={() => this.handleOnClick('/')}
            >
            Home
          </a>
        </li>
        <li>
          <a
            href={DEADLINK}
            className="sidenav-close"
            onClick={() => this.Login('/login')}
            >
            {!user? 'Login' : 'Logout'}
          </a>
        </li>
      </Fragment>  
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a
            href={DEADLINK}
            onClick={() => this.handleOnClick('/')}
            className="brand-logo"
            >
              Logo
          </a>
          <a href={DEADLINK} data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.getLinks()}
          </ul>
          <ul className="sidenav" id="mobile-demo">
            {this.getLinks()}
          </ul>
          </div>
      </nav>
    );
  }
}
export default NavBar;
