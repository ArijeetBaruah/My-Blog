import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Firebase from '../util/firebase';

const DEADLINK = "javascript:void(0)";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.Login = this.Login.bind(this);
  }

  handleOnClick(url) {
    window.location.hash = url;
  }

  Login() {
    console.log("jiji");
    Firebase.Login();
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
          <ul id="nav-mobile" className="right hide-on-med-and-down">
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
                onClick={this.Login}
                >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
