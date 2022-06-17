/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { SettingsRow } from './SettingsRow/SettingsRow';
import appearanceIcon from '../../assets/image/Appearance_icon.png';
import languageIcon from '../../assets/image/Language_icon.png';
import locationIcon from '../../assets/image/Location_icon.png';
import settingsIcon from '../../assets/image/Settings_icon.png';
import userDataIcon from '../../assets/image/UserData_icon.png';
import helpIcon from '../../assets/image/Help_icon.png';
import feedbackIcon from '../../assets/image/Feedback_icon.png';
import keyboardIcon from '../../assets/image/Keyboard_icon.png';

export const Settings = ({ visibility }) => {
  return (
    <div className="settings" style={{ display: visibility ? 'inline' : 'none' }}>
      <div>
        <ul>
          <li>
            <SettingsRow icon={appearanceIcon} title="Appearance: Device theme" />
          </li>
          <li>
            <SettingsRow icon={languageIcon} title="Language: English" />
          </li>
          <li>
            <SettingsRow icon={locationIcon} title="Location: USA" />
          </li>
          <li>
            <SettingsRow icon={settingsIcon} title="Settings" />
          </li>
          <li>
            <SettingsRow icon={userDataIcon} title="Your data in YouTube" />
          </li>
          <li>
            <SettingsRow icon={helpIcon} title="Help" />
          </li>
          <li>
            <SettingsRow icon={feedbackIcon} title="Send feedback" />
          </li>
          <li>
            <SettingsRow icon={keyboardIcon} title="Keyboard shortcuts" />
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
