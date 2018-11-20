import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../component/NavBar';
import AuthAction from '../action/auth';

class NavBarContainer extends Component{
  constructor(props) {
    super(props);
    this.handleOnClickLogin = this.handleOnClickLogin.bind(this);

    props.onAuthStateChanged();
  }

  handleOnClickLogin(){
    const { user } = this.props.auth;
    if (user.user) {
      this.props.Logout();
      return;
    }
    this.props.LoginViaGoogle();
  }

  render() {
    const { user } = this.props.auth;
    if (!user) {
      return (
        <div>Loading...</div>
      );
    }
    if (user.isLoading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <NavBar
        Login={this.handleOnClickLogin}
        user={user.user}
        />
    );
  }
}

const stateToProps = state => ({
  auth: state.authReducer,
});

const dispatchToProps = dispatch => ({
  LoginViaGoogle: () => dispatch(AuthAction.LoginViaGoogle(dispatch)),
  Logout: () => dispatch(AuthAction.Logout(dispatch)),
  onAuthStateChanged: () => dispatch(AuthAction.onAuthStateChanged(dispatch)),
});

export default connect(stateToProps, dispatchToProps)(NavBarContainer);
