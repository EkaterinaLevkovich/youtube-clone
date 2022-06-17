/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { YouTubeAppsRow } from './YouTubeAppsRow/YouTubeAppsRow';
import youTubeTVIcon from '../../assets/image/YouTubeTV_icon.png';
import youTubeMusicIcon from '../../assets/image/YouTubeMusic_icon.png';
import youTubeKidsIcon from '../../assets/image/YouTubeKids_icon.png';
import youTubeArtistsIcon from '../../assets/image/YouTubeArtists_icon.png';

export const YouTubeApps = ({ visibility }) => {
  return (
    <div className="youtubeapps" style={{ display: visibility ? 'inline' : 'none' }}>
      <div>
        <YouTubeAppsRow icon={youTubeTVIcon} title="YouTube TV" />
      </div>
      <hr />
      <div>
        <ul>
          <li>
            <YouTubeAppsRow icon={youTubeMusicIcon} title="YouTube Music" />
          </li>
          <li>
            <YouTubeAppsRow icon={youTubeKidsIcon} title="YouTube Kids" />
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <YouTubeAppsRow icon={youTubeArtistsIcon} title="YouTube for Artists" />
      </div>
    </div>
  );
};

YouTubeApps.propTypes = {
  visibility: PropTypes.bool.isRequired,
};
