import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import '../style/login.sass';
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import appContaints from '../util/appContaints';
import Alert from './alert';

const { DEADLINK } = appContaints;

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.user.error) {
      const { errors } = this.state;
      errors.push({
        type: Alert.Danger,
        msg: this.props.user.error.message,
      });

      this.setState({
        errors
      });
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const pass = this.state.password;
    this.props.handleFormLogin(email, pass);
  }

  render() {
    return (
      <div className="container">
        {
          _.map(this.state.errors, (error) => (<Alert
            type={error.type}
            msg={error.msg}
            onDestoryCallBack={() => {
              const { errors } = this.state;
              errors.pop();
              this.setState({
                errors
              });
            }}
            />))
        }
        <div className="row">
          <Form onSubmit={this.handleLoginSubmit} className="col s6 offset-s3 loginForm">
            <h1>Login</h1>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
                onChange={(e) => this.setState({
                  email: e.currentTarget.value,
                })}
                />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">password</Label>
              <Input
                placeholder="password"
                id="password"
                type="password"
                className="validate"
                onChange={(e) => this.setState({
                  password: e.currentTarget.value,
                })}
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
                onClick={() => {
                  window.location.hash = "/forgotPassword";
                }}
                >
                Forgot Password
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
            or
            <div className="btnWrapper">
              <a
                href={DEADLINK}
                className="btn btn-secondary"
                onClick={() => {window.location.hash='/register';}}
                >
                Register
              </a>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
