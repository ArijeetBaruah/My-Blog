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
    console.log("fdsfds");
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

    const emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    const emailTest = new RegExp(emailFormat);
    if (!emailTest.test(email)) {
      error['email'] = 'incorrect email format';
      formIsValid = false;
    }

    if (formIsValid) {
      this.props.handleLoginSubmit(email, pass, firstname, lastname);
      return;
    }
    console.log(error);
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.error.length !== 0) {
      console.log(this.state.error);
    }
    return (
      <div className="container">
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
    );
  }
}

export default SignUpComponent;
