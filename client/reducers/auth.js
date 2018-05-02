import axios from 'axios';
import * as types from '../actions/actionTypes';

const AUTHENTICATED = 'AUTHENTICATED';

export const authenticated = (user) => ({
  type: AUTHENTICATED, user,
});

export const login = (email, password) =>
  (dispatch) =>
    axios.post(
      '/api/auth/login',
      { email, password },
    )
      .then((res) => dispatch(authenticated(res.data)))
      .catch(() => dispatch(authenticated(null)));

const authReducer = (state = null, action) => {
  let newState;
  switch (action.type) {
    case types.AUTHENTICATED:
      newState = action.user;
      break;
    default:
      return state;
  }
  return newState;
};

export default authReducer;
