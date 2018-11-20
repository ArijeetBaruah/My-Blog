import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../style/login.sass';
import appContaints from '../util/appContaints';

const { DEADLINK } = appContaints;

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit() {
    const email = document.getElementById('email').innerHTML;
    const pass = document.getElementById('password').innerHTML;
    this.props.handleFormLogin(email, pass);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3 loginForm">
            <h1>Login</h1>
            <div className="input-field">
              <input
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
                />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                placeholder="password"
                id="password"
                type="password"
                className="validate"
                />
              <label htmlFor="password">password</label>
            </div>
            <div className="btnWrapper">
              <a
                href={DEADLINK}
                className="waves-effect waves-light btn"
                onClick={this.handleLoginSubmit}
                >
                Login
              </a>
            </div>
            <div className="btnWrapper">
              <a
                href={DEADLINK}
                className="waves-effect waves-light btn"
                onClick={this.props.handleGoogleLogin}
                >
                <i className="fab fa-google"></i> Login with Google
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
