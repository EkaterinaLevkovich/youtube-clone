/* eslint-disable default-param-last */
import { SET_VIDEOS } from '../actions/video/video.actions-types';

const initialState = {
  videos: [],
  nextPageId: '',
};

export const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_VIDEOS: return { ...state, videos: [...payload] };

    default: return state;
  }
};
