import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { videoReducer } from './video.reducer';

export const reducers = combineReducers({
  user: userReducer,
  videos: videoReducer,
});
