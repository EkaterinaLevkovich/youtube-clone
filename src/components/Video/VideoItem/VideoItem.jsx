/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';

export const VideoItem = ({ video }) => {
  return (
    <div className="videocard">
      <img className="videocard__image" src={video.imageUrl} alt="preview" />
      <div className="videocard__info">
        <img className="videocard__avatar" src={video.channel.channelImage} alt={video.channel.title} />
        <div className="videocard__text">
          <h4>{video.title}</h4>
          <p>{video.channel.title}</p>
          <p>{video.views} views</p>
          <p>{video.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

VideoItem.defaultProps = {
  video: {},
};

VideoItem.propTypes = {
  video: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    channel: PropTypes.shape({
      title: PropTypes.string.isRequired,
      channelImage: PropTypes.string.isRequired,
    }),
  }),
};
