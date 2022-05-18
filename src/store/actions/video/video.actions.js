import { YouTubeService } from '../../../api/youtube';
import { SET_VIDEOS } from './video.actions-types';

export const setVideos = (videos) => ({ type: SET_VIDEOS, payload: videos });

export const search = (searchValue) => async (dispatch) => {
  const result = await YouTubeService.getVideos(searchValue);
  dispatch(setVideos(result));
};

export const initialState = () => async (dispatch) => {
  const result = await YouTubeService.getRecomendedVideos();
  dispatch(setVideos(result));
};
