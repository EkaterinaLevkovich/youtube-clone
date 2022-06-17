/* eslint-disable arrow-body-style */
import { SideBarMenuRow } from './SideBarMenuRow/SideBarMenuRow';
import homeIcon from '../../assets/image/Home_icon.png';
import exploreIcon from '../../assets/image/Explore_icon.png';
import shortsIcon from '../../assets/image/Shorts_icon.png';
import subscriptionsIcon from '../../assets/image/Subscriptions_icon.png';
import libraryIcon from '../../assets/image/Library_icon.png';
import historyIcon from '../../assets/image/History_icon.png';

export const SideBarMenu = () => {
  return (
    <nav className="sidebar__menu">
      <article>
        <h3 style={{ display: 'none' }}>youtube menu</h3>
        <ul>
          <li>
            <SideBarMenuRow icon={homeIcon} title="Home" />
          </li>
          <li>
            <SideBarMenuRow icon={exploreIcon} title="Explore" />
          </li>
          <li>
            <SideBarMenuRow icon={shortsIcon} title="Shorts" />
          </li>
          <li>
            <SideBarMenuRow icon={subscriptionsIcon} title="Substrictions" />
          </li>
          <li>
            <SideBarMenuRow icon={libraryIcon} title="Library" />
          </li>
          <li>
            <SideBarMenuRow icon={historyIcon} title="History" />
          </li>
        </ul>
      </article>
    </nav>
  );
};
