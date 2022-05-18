/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { SideBarRow } from './SideBarRow/SideBarRow';

export const SideBar = ({ visibility }) => {
  return (
    <nav className="sidebar" style={{ display: visibility ? 'inline' : 'none' }}>
      <article>
        <h3 style={{ display: 'none' }}>youtube menu</h3>
        <ul>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" title="Home" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/77/77521.png" title="Explore" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/2991/2991195.png" title="Shorts" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons.flaticon.com/png/512/2989/premium/2989849.png?token=exp=1649259061~hmac=0b5a23a111b05459c6e3fe3eaaa5456c" title="Substrictions" />
          </li>
        </ul>
      </article>
      <hr />
      <article>
        <h3 style={{ display: 'none' }}>youtube menu</h3>
        <ul>
          <li>
            <SideBarRow icon="https://cdn-icons.flaticon.com/png/512/2989/premium/2989835.png?token=exp=1649259161~hmac=4c3689e33d0abc2a731c271b9ea87cfe" title="Library" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons.flaticon.com/png/512/2961/premium/2961948.png?token=exp=1649259232~hmac=31291fbeb693f8d2f5b557107d74cc0f" title="History" />
          </li>
        </ul>
      </article>
      <hr />
      <div className="login">
        <p>Sign in to like videos, comment, and subscribe.</p>
        <button type="button" className="button__login">
          <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="sign in" />
          <span>SIGN IN</span>
        </button>
      </div>
      <hr />
      <article>
        <h3>BEST OF YOUTUBE</h3>
        <ul>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/2404/2404562.png" title="Music" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/2639/2639922.png" title="Sports" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/13/13973.png" title="Gaming" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/2878/2878787.png" title="News" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons.flaticon.com/png/512/2330/premium/2330100.png?token=exp=1649260426~hmac=08b371f7e14176024e4594c3b429bb76" title="Live" />
          </li>
          <li>
            <SideBarRow icon="https://cdn-icons-png.flaticon.com/512/1687/1687626.png" title="360° Video" />
          </li>
        </ul>
      </article>
    </nav>
  );
};

SideBar.propTypes = {
  visibility: PropTypes.bool.isRequired,
};
