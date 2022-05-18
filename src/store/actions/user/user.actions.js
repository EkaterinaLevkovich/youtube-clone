import {
  LOGIN, LOGOUT,
} from './user.actions-types';

export const login = (userInfo) => ({ type: LOGIN, payload: userInfo });
export const logout = () => ({ type: LOGOUT });
export const loginAsync = (userInfo) => (dispatch) => {
  Promise.resolve(userInfo).then((data) => dispatch(login(data)));
};
