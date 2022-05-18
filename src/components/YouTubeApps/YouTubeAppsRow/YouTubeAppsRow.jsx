/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';

export const YouTubeAppsRow = ({ icon, title }) => {
  return (
    <a href={`${title}`} className="youtubeappsrow">
      <img src={icon} alt="" className="youtubeappsrow__icon" />
      <span className="youtubeappsrow__title">{title}</span>
    </a>
  );
};

YouTubeAppsRow.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
