/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { SettingsRow } from './SettingsRow/SettingsRow';

export const Settings = ({ visibility }) => {
  return (
    <div className="settings" style={{ display: visibility ? 'inline' : 'none' }}>
      <div>
        <ul>
          <li>
            <SettingsRow icon="https://cdn-icons-png.flaticon.com/512/899/899555.png" title="Appearance: Device theme" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons.flaticon.com/png/512/3269/premium/3269817.png?token=exp=1651749245~hmac=ab80f51f9d4b9cb9e17105473f50eced" title="Language: English" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons-png.flaticon.com/512/1246/1246334.png" title="Location: USA" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons-png.flaticon.com/512/503/503822.png" title="Settings" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons-png.flaticon.com/512/1159/1159740.png" title="Your data in YouTube" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons.flaticon.com/png/512/2859/premium/2859733.png?token=exp=1651749533~hmac=e0597f85923ddbafbd60f571d92b72e2" title="Help" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons-png.flaticon.com/512/813/813418.png" title="Send feedback" />
          </li>
          <li>
            <SettingsRow icon="https://cdn-icons-png.flaticon.com/512/159/159231.png" title="Keyboard shortcuts" />
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <a href="mode" className="settingsrow">
          <span className="settingsrow__title">Restricted Mode: Off</span>
        </a>
      </div>
    </div>
  );
};

Settings.propTypes = {
  visibility: PropTypes.bool.isRequired,
};
