/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';

export const SideBarMenuRow = ({ icon, title }) => {
  return (
    <a href={`${title}`} className="sidebarrow__menu">
      <img src={icon} alt={title} className="sidebarrow__menu__icon" />
      <span className="sidebarrow__menu__title">{title}</span>
    </a>
  );
};

SideBarMenuRow.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
