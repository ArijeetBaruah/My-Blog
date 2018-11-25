import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../component/NavBar';
import AuthAction from '../action/auth';

class NavBarContainer extends Component{
  constructor(props) {
    super(props);
    this.handleOnClickLogin = this.handleOnClickLogin.bind(this);
    if (props.auth) {
      props.onAuthStateChanged();
    }
  }

  handleOnClickLogin(url){
    const { user } = this.props.auth;
    if (user.user) {
      this.props.Logout();
      return;
    }
    window.location.hash = url;
  }

  render() {
    const { user } = this.props.auth;
    return (
      <NavBar
        Login={this.handleOnClickLogin}
        isLoading={user.isLoading}
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
  LoginAsAnonymous: () => dispatch(AuthAction.LoginAsAnonymous(dispatch)),
});

export default connect(stateToProps, dispatchToProps)(NavBarContainer);
