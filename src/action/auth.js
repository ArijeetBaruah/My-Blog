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

  static LoginViaForm(dispatch, user, pass) {
    Firebase.LoginViaForm(user, pass)
      .then(user => (
        dispatch(AuthAction.SetUser({ isLoading: false, data: user }))
      ))
      .catch(error => (
        dispatch(AuthAction.SetUser({ isLoading: false, error }))
      ));
    return {
      type: 'AUTH_FORM_LOGIN',
    }
  }

  static onAuthStateChanged(dispatch) {
    Firebase.onAuthStateChanged((user) => {
      dispatch(AuthAction.SetUser({data: user}));
    });
    return {
      type: 'AUTH_STATE_CHANGE',
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
}
