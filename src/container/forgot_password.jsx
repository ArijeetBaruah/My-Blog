import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthAction from '../action/auth';
import ForgotPasswordComponent from '../component/forgotpassword';

class ForgotPasswordContainer extends Component {
  render() {
    return (
      <ForgotPasswordComponent
        forgotPasswordData={this.props.auth.forgotPassword}
        ForgotPassword={this.props.ForgotPassword}
        goBack={this.props.goBack}
        />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
  ForgotPassword: (email) => AuthAction.ForgotPassword(dispatch, email),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
