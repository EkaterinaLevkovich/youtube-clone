/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';

export const SideBarRow = ({ icon, title }) => {
  return (
    <a href={`${title}`} className="sidebarrow">
      <img src={icon} alt="" className="sidebarrow__icon" />
      <span className="sidebarrow__title">{title}</span>
    </a>
  );
};

SideBarRow.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
