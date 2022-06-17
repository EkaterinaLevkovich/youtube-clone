/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { SideBarRow } from './SideBarRow/SideBarRow';
import { LoginButton } from '../LoginButton/LoginButton';
import homeIcon from '../../assets/image/Home_icon.png';
import exploreIcon from '../../assets/image/Explore_icon.png';
import shortsIcon from '../../assets/image/Shorts_icon.png';
import subscriptionsIcon from '../../assets/image/Subscriptions_icon.png';
import libraryIcon from '../../assets/image/Library_icon.png';
import historyIcon from '../../assets/image/History_icon.png';
import musicIcon from '../../assets/image/Music_icon.png';
import sportsIcon from '../../assets/image/Sports_icon.png';
import gamingIcon from '../../assets/image/Gaming_icon.png';
import newsIcon from '../../assets/image/News_icon.png';
import liveIcon from '../../assets/image/Live_icon.png';
import video360Icon from '../../assets/image/360Video_icon.png';

export const SideBar = ({ visibility }) => {
  return (
    <nav className="sidebar" style={{ display: visibility ? 'inline' : 'none' }}>
      <article>
        <h3 style={{ display: 'none' }}>youtube menu</h3>
        <ul>
          <li>
            <SideBarRow icon={homeIcon} title="Home" />
          </li>
          <li>
            <SideBarRow icon={exploreIcon} title="Explore" />
          </li>
          <li>
            <SideBarRow icon={shortsIcon} title="Shorts" />
          </li>
          <li>
            <SideBarRow icon={subscriptionsIcon} title="Subscriptions" />
          </li>
        </ul>
      </article>
      <hr />
      <article>
        <h3 style={{ display: 'none' }}>youtube menu</h3>
        <ul>
          <li>
            <SideBarRow icon={libraryIcon} title="Library" />
          </li>
          <li>
            <SideBarRow icon={historyIcon} title="History" />
          </li>
        </ul>
      </article>
      <hr />
      <div className="login">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <LoginButton />
      </div>
      <hr />
      <article>
        <h3>BEST OF YOUTUBE</h3>
        <ul>
          <li>
            <SideBarRow icon={musicIcon} title="Music" />
          </li>
          <li>
            <SideBarRow icon={sportsIcon} title="Sports" />
          </li>
          <li>
            <SideBarRow icon={gamingIcon} title="Gaming" />
          </li>
          <li>
            <SideBarRow icon={newsIcon} title="News" />
          </li>
          <li>
            <SideBarRow icon={liveIcon} title="Live" />
          </li>
          <li>
            <SideBarRow icon={video360Icon} title="360° Video" />
          </li>
        </ul>
      </article>
    </nav>
  );
};

SideBar.propTypes = {
  visibility: PropTypes.bool.isRequired,
};
