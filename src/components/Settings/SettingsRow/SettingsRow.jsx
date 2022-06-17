/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';

export const SettingsRow = ({ icon, title }) => {
  return (
    <a href={`${title}`} className="settingsrow">
      <img src={icon} alt={title} className="settingsrow__icon" />
      <span className="settingsrow__title">{title}</span>
    </a>
  );
};

SettingsRow.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
