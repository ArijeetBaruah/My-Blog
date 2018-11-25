import React, { Component } from 'react';
import { connect } from 'react-redux';
import  AuthAction from '../action/auth';
import LoginComponent from '../component/login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleFormLogin = this.handleFormLogin.bind(this);
  }
  
  handleGoogleLogin() {
    this.props.LoginViaGoogle();
  }

  handleFormLogin(email, pass) {
    this.props.LoginViaForm(email, pass);
  }

  render() {
    return (
      <LoginComponent
        handleGoogleLogin={this.handleGoogleLogin}
        handleFormLogin={this.handleFormLogin}
        user={this.props.auth.user}
        />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  LoginViaGoogle: () => dispatch(AuthAction.LoginViaGoogle(dispatch)),
  LoginViaForm: (user, password) => dispatch(AuthAction.LoginViaForm(dispatch, user, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
