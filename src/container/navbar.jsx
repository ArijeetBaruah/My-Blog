import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    this.props.history.push(url);
  }

  render() {
    const { user } = this.props.auth;
    return (
      <NavBar
        home={this.props.home}
        Login={this.handleOnClickLogin}
        isLoading={user.isLoading}
        user={user}
        history={this.props.history}
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

NavBarContainer.propTypes = {
  home: PropTypes.bool,
  history: PropTypes.shape({}).isRequired,
};

NavBarContainer.defaultProps = {
  home: false,
};

export default connect(stateToProps, dispatchToProps)(NavBarContainer);
