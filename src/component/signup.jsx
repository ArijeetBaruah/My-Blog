import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import '../style/login.sass';
import appContaints from '../util/appContaints';
import Alert from './alert';

const { DEADLINK } = appContaints;

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      cpassword: '',
      firstname: '',
      lastname: '',
      error: [],
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    let formIsValid = true;
    const error = [];
    const email = this.state.email;
    const pass = this.state.password;
    const cpass = this.state.cpassword;
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;

    if (pass !== cpass) {
      error['password'] = 'password didn\'t match';
      formIsValid = false;
    }

    if (formIsValid) {
      this.props.handleLoginSubmit(email, pass, firstname, lastname);
      return;
    }
    this.setState({
      error,
    });
  }

  renderError() {
    return _.map(this.state.error, (error) => (
      <Alert
          type={Alert.Danger}
          msg={error}
          />
    ));
  }

  render() {
    return (
      <div className="loginFormPage">
        <div className="container">
          {this.renderError()}
          {
            this.props.registerUser.error &&
            <Alert
              type={Alert.Danger}
              msg={this.props.registerUser.error.message}
              />
          }
          <div className="row">
            <Form onSubmit={this.handleLoginSubmit} className="col s6 offset-s3 loginForm">
              <h1>Register</h1>
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
                <Label htmlFor="password">Password</Label>
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
              <FormGroup>
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  placeholder="confirm password"
                  id="cpassword"
                  type="password"
                  className="validate"
                  onChange={(e) => this.setState({
                    cpassword: e.currentTarget.value,
                  })}
                  />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  placeholder="firstName"
                  id="firstName"
                  type="text"
                  className="validate"
                  onChange={(e) => this.setState({
                    firstname: e.currentTarget.value,
                  })}
                  />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  placeholder="lastName"
                  id="lastName"
                  type="text"
                  className="validate"
                  onChange={(e) => this.setState({
                    lastname: e.currentTarget.value,
                  })}
                  />
              </FormGroup>
              <div className="btnWrapper">
                <button
                  href={DEADLINK}
                  className="btn btn-secondary"
                  >
                  Register
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpComponent;
