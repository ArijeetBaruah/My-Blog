import _ from 'lodash';

const initState = {
  user: {
    isLoading: true,
    user: undefined,
    error: undefined,
  },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER': {
      const tmpState = _.assign({}, state);
      tmpState.user = action.payload;
      return tmpState;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
