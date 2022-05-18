/* eslint-disable arrow-body-style */
import { SideBarMenuRow } from './SideBarMenuRow/SideBarMenuRow';

export const SideBarMenu = () => {
  return (
    <nav className="sidebar__menu">
      <article>
        <h3 style={{ display: 'none' }}>youtube menu</h3>
        <ul>
          <li>
            <SideBarMenuRow icon="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" title="Home" />
          </li>
          <li>
            <SideBarMenuRow icon="https://cdn-icons-png.flaticon.com/512/77/77521.png" title="Explore" />
          </li>
          <li>
            <SideBarMenuRow icon="https://cdn-icons-png.flaticon.com/512/2991/2991195.png" title="Shorts" />
          </li>
          <li>
            <SideBarMenuRow icon="https://cdn-icons.flaticon.com/png/512/2989/premium/2989849.png?token=exp=1649259061~hmac=0b5a23a111b05459c6e3fe3eaaa5456c" title="Substrictions" />
          </li>
          <li>
            <SideBarMenuRow icon="https://cdn-icons.flaticon.com/png/512/2989/premium/2989835.png?token=exp=1649259161~hmac=4c3689e33d0abc2a731c271b9ea87cfe" title="Library" />
          </li>
          <li>
            <SideBarMenuRow icon="https://cdn-icons.flaticon.com/png/512/2961/premium/2961948.png?token=exp=1649259232~hmac=31291fbeb693f8d2f5b557107d74cc0f" title="History" />
          </li>
        </ul>
      </article>
    </nav>
  );
};
