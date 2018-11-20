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

  static onAuthStateChanged(dispatch) {
    Firebase.onAuthStateChanged((user) => {
      dispatch(AuthAction.SetUser({data: user}));
    });
    return {
      type: 'AUTH_STATE_CHANGE',
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
