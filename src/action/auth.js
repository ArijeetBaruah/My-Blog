import _ from 'lodash';
import Firebase from '../util/firebase';

export default class AuthAction{
  static LoginViaGoogle(dispatch) {
    Firebase.LoginViaGoogle()
      .then(user => (
        dispatch(AuthAction.SetUser({ isLoading: false, data: user }))
      ))
      .catch(error => (
        dispatch(AuthAction.SetUser({ isLoading: false, error }))
      ));
    return {
      type: 'AUTH_GOOGLE_LOGIN',
    }
  }

  static LoginAsAnonymous(dispatch) {
    Firebase.LoginAsAnonymous()
      .then((user) => {
        dispatch(AuthAction.SetUser({ isLoading: false, data: user }));
      })
      .catch((error) => {
        dispatch(AuthAction.SetUser({ isLoading: false, error }))
      });
    return {
      type: 'AUTH_LOGIN_ANONYMOUS',
    }
  }

  static LoginViaForm(dispatch, user, pass) {
    Firebase.LoginViaForm(user, pass)
      .then(user => {
        dispatch(AuthAction.SetUser({ isLoading: false, data: user }));
        dispatch(AuthAction.GetUserDetail(dispatch, user.user.Q.uid));
      })
      .catch(error => (
        dispatch(AuthAction.SetUser({ isLoading: false, error }))
      ));
    return {
      type: 'AUTH_FORM_LOGIN',
    }
  }

  static onAuthStateChanged(dispatch) {
    Firebase.onAuthStateChanged((user) => {
      if (_.isEmpty(user)) {
        dispatch(AuthAction.LoginAsAnonymous(dispatch));
        return;
      }
      dispatch(AuthAction.SetUser({isLoading: false, data: user}));
      dispatch(AuthAction.GetUserDetail(dispatch, user.uid));
    });
    return {
      type: 'AUTH_STATE_CHANGE',
    };
  }

  static ForgotPassword(dispatch, email) {
    Firebase.UserPasswordReset(email)
      .then(() => {
        dispatch(AuthAction.ForgotPasswordSuccess())
      })
      .catch(error => {
        dispatch(AuthAction.ForgotPasswordFailed(error))
      });
    
    return {
      type: 'FORGOT_PASSWORD',
    };
  }

  static ForgotPasswordSuccess() {
    return {
      type: 'FORGOT_PASSWORD_SUCCESS',
    };
  }

  static ForgotPasswordFailed(error) {
    return {
      type: 'FORGOT_PASSWORD_FAILED',
      payload: {
        error
      },
    };
  }

  static RegisterUser(dispatch, email, pass, firstname, lastname) {
    Firebase.RegisterUser(email, pass, firstname, lastname)
      .then((user) => {
        window.location.hash = "/";
        dispatch(AuthAction.SetRegisterUser({ isLoading: false, error: undefined }));
      }).catch((error) => {
        console.error(error);
        dispatch(AuthAction.SetRegisterUser({ isLoading: false, error }));
      });
      return {
        type: 'REGISTER_USER',
        payload: {
          isLoading: true,
          error: undefined,
        }
      };
  }

  static SetRegisterUser({ isLoading, error }) {
    return {
      type: 'REGISTER_USER',
      payload: {
        isLoading,
        error,
      },
    };
  }

  static Logout(dispatch) {
    Firebase.Logout()
      .then(user => (
        dispatch(AuthAction.SetUser({ isLoading: false, data: user }))
      ))
      .catch(error => (
        dispatch(AuthAction.SetUser({ isLoading: false, error }))
      ));
      return {
        type: 'AUTH_LOGOUT',
      };
  }

  static SetUser({ isLoading, data, error }){
    return {
      type: 'SET_AUTH_USER',
      payload: {
        isLoading,
        user: data,
        error,
      },
    }
  }

  static SetUserFailed({ isLoading, error }){
    return {
      type: 'SET_AUTH_USER_FAILED',
      payload: {
        isLoading,
        error,
      },
    }
  }

  static GetUserDetail(dispatch, userID) {
    Firebase.getUserDetail(userID)
      .then(user => dispatch(AuthAction.SetUserDetail({isLoading: false, data: user.val()})))
      .catch(error => dispatch(AuthAction.SetUserDetailFailed({isLoading: false, error})));
    return{
      type: 'FETCH_USER_DETAILS',
    }
   }

  static SetUserDetail({ isLoading, data, error }) {
    return {
      type: 'SET_USER_DETAILS',
      payload: {
        isLoading,
        data,
        error
      },
    };
  }

  static SetUserDetailFailed({ isLoading, error }) {
    return {
      type: 'SET_USER_DETAILS_FAILED',
      payload: {
        isLoading,
        error
      },
    };
  }
}
