import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialState } from '../../store/actions/video/video.actions';
import { videoSelector } from '../../store/selectors/video.selector';
import { VideoItem } from './VideoItem/VideoItem';

export const Video = () => {
  const videos = useSelector(videoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialState());
  }, []);

  return (
    <div className="videos">
      <ul className="videos__video">
        {
          // eslint-disable-next-line arrow-body-style
          videos.map((video) => {
            return (
              <li key={video.id}>
                <VideoItem video={video} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
