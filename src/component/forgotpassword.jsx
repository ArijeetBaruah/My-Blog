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
import Alert from './alert';

const { DEADLINK } = appContaints;

class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    this.props.ForgotPassword(email);
  }

  render() {
    if (this.props.forgotPasswordData.isLoading) {
      return (
        <div>Sending Link to Reset...</div>
      );
    }

    return (
      <div className="container">
        {
          this.props.forgotPasswordData.error &&
          <Alert
            type={Alert.Danger}
            msg={this.props.forgotPasswordData.error.message}
            />
        }
        {
          this.props.forgotPasswordData.sended &&
          <Alert
            type={Alert.Success}
            msg="A mail is sended"
            />
        }
        <div className="row">
          <Form onSubmit={this.handleLoginSubmit} className="col s6 offset-s3 loginForm">
            <h1>Forgot Password</h1>
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
            <div className="btnWrapper">
              <a
                href={DEADLINK}
                className="btn btn-secondary forgotBtn"
                onClick={this.props.goBack}
                >
                Go Back
              </a>
              <a
                href={DEADLINK}
                className="btn btn-secondary forgotBtn"
                onClick={this.handleLoginSubmit}
                >
                Send Link
              </a>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordComponent;
