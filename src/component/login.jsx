import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.sass';
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
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
          <Form className="col s6 offset-s3 loginForm">
            <h1>Login</h1>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
                />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">password</Label>
              <Input
                placeholder="password"
                id="password"
                type="password"
                className="validate"
                />
            </FormGroup>
            <div className="btnWrapper">
              <a
                href={DEADLINK}
                className="btn btn-secondary"
                onClick={this.handleLoginSubmit}
                >
                Login
              </a>
            </div>
            <div className="btnWrapper">
              <a
                href={DEADLINK}
                className="btn btn-secondary"
                onClick={this.props.handleGoogleLogin}
                >
                <i className="fab fa-google"></i> Login with Google
              </a>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
