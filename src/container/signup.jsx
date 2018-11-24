import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpComponent from '../component/signup'
import AuthAction from '../action/auth';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(email, pass, firstname, lastname) {
    this.props.RegisterUser(email, pass, firstname, lastname);
  }

  render() {
    return (
      <SignUpComponent
        handleLoginSubmit={this.handleLoginSubmit}
      />
    );
  }
}

const mapPropsToState = state => ({
  auth: state.authReducer,
});
const mapPropsToDispatch = dispatch => ({
  RegisterUser: (email, pass, firstname, lastname) => dispatch(AuthAction.RegisterUser(dispatch, email, pass, firstname, lastname)),
});

export default connect(mapPropsToState, mapPropsToDispatch)(SignUpContainer);
