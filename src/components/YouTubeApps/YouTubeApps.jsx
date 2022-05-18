/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { YouTubeAppsRow } from './YouTubeAppsRow/YouTubeAppsRow';

export const YouTubeApps = ({ visibility }) => {
  return (
    <div className="youtubeapps" style={{ display: visibility ? 'inline' : 'none' }}>
      <div>
        <YouTubeAppsRow icon="https://cdn-icons-png.flaticon.com/512/814/814156.png" title="YouTube TV" />
      </div>
      <hr />
      <div>
        <ul>
          <li>
            <YouTubeAppsRow icon="https://cdn-icons.flaticon.com/png/512/4494/premium/4494485.png?token=exp=1650992431~hmac=2f113b8e26bd02d2335f9af183641c26" title="YouTube Music" />
          </li>
          <li>
            <YouTubeAppsRow icon="https://cdn-icons-png.flaticon.com/512/1383/1383260.png" title="YouTube Kids" />
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <YouTubeAppsRow icon="https://cdn-icons-png.flaticon.com/512/2111/2111748.png" title="YouTube for Artists" />
      </div>
    </div>
  );
};

YouTubeApps.propTypes = {
  visibility: PropTypes.bool.isRequired,
};
