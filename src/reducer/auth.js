import _ from 'lodash';

const initState = {
  user: {
    isLoading: true,
    user: undefined,
    error: undefined,
    details: {
      isLoading: false,
      sended: false,
      error: null,
    },
  },
  registerUser: {
    isLoading: true,
    error: undefined,
  },
  forgotPassword: {
    isLoading: false,
    sended: false,
    error: null,
  },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER': {
      const tmpState = _.assign({}, state);
      const { payload } = action;
      tmpState.user.isLoading = payload.isLoading;
      tmpState.user.user = payload.user;
      tmpState.user.error = payload.error;
      return tmpState;
    }
    case 'SET_AUTH_USER_FAILED': {
      const tmpState = _.assign({}, state);
      const { payload } = action;
      tmpState.user.isLoading = payload.isLoading;
      tmpState.user.error = payload.error;
      return tmpState;
    }
    case 'AUTH_GOOGLE_LOGIN': {
      const tmpState = _.assign({}, state);
      tmpState.user.isLoading = true;
      return tmpState;
    }
    case 'REGISTER_USER': {
      const tmpState = _.assign({}, state);
      tmpState.registerUser = action.payload;
      return tmpState;
    }
    case 'FORGOT_PASSWORD': {
      const tmpState = _.assign({}, state);
      tmpState.forgotPassword = _.assign({}, tmpState.forgotPassword);
      tmpState.forgotPassword.isLoading = true;
      tmpState.forgotPassword.sended = false;
      return tmpState;
    }
    case 'FORGOT_PASSWORD_SUCCESS': {
      const tmpState = _.assign({}, state);
      tmpState.forgotPassword = _.assign({}, tmpState.forgotPassword);
      tmpState.forgotPassword.isLoading = false;
      tmpState.forgotPassword.sended = true;
      tmpState.forgotPassword.error = null;
      return tmpState;
    }
    case 'FORGOT_PASSWORD_FAILED': {
      const tmpState = _.assign({}, state);
      const { payload } = action;
      tmpState.forgotPassword = _.assign({}, tmpState.forgotPassword);
      tmpState.forgotPassword.isLoading = false;
      tmpState.forgotPassword.sended = false;
      tmpState.forgotPassword.error = payload.error;
      return tmpState;
    }
    case 'SET_USER_DETAILS': {
      const tmpState = _.assign({}, state);
      const { payload } = action;
      tmpState.user.details = _.assign({}, payload);
      return tmpState;
    }
    case 'SET_USER_DETAILS_FAILED': {
      const tmpState = _.assign({}, state);
      const { payload } = action;
      tmpState.user.details.isLoading = payload.isLoading;
      tmpState.user.details.error = payload.error;
      return tmpState;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
