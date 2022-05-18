import { User } from '../../entities/user';
import {
  LOGIN, LOGOUT,
} from '../actions/user/user.actions-types';

// const initialState = {
//   name: '',
//   lastName: '',
//   phone: null,
//   email: '',
// };
const initialState = new User({});

// eslint-disable-next-line default-param-last
export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: return new User(payload);
    case LOGOUT: return initialState;

    default: return state;
  }
};
