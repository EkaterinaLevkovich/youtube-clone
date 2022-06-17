import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { initialState, search } from '../../store/actions/video/video.actions';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import { Settings } from '../Settings/Settings';
import { SideBar } from '../SideBar/SideBar';
import { YouTubeApps } from '../YouTubeApps/YouTubeApps';
import burgerIcon from '../../assets/image/Hamburger_icon.svg';
import youTubeLogo from '../../assets/image/YouTube_Logo.svg';
import searchIcon from '../../assets/image/Search_icon.png';
import microphoneIcon from '../../assets/image/Microphone_icon.png';
import youtubeAppsIcon from '../../assets/image/YouTubeApps_icon.png';
import settingsIcon from '../../assets/image/SettingsApps_icon.png';

export const HeaderLogout = () => {
  const [visibility, setVisibility] = useState(false);
  const [visibilityApps, setVisibilityApps] = useState(false);
  const [visibilitySettings, setVisibilitySettings] = useState(false);

  const visibilitySideBar = () => {
    setVisibility(!visibility);
  };
  const visibilityYouTubeApps = () => {
    setVisibilityApps(!visibilityApps);
  };
  const visibilitySettingsApps = () => {
    setVisibilitySettings(!visibilitySettings);
  };
  const dispatch = useDispatch();
  const inputRef = useRef('');

  const handleSearch = () => {
    const { current: { value: text } } = inputRef;
    dispatch(search(text));
    inputRef.current.value = '';
  };

  const handleRecomended = () => {
    dispatch(initialState());
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <button type="button" className="menu-button" onClick={() => visibilitySideBar()}>
            <img src={burgerIcon} alt="burger-menu" />
          </button>
          <Link to="/youtube-clone/login">
            <button type="button" onClick={handleRecomended} className="logo-button">
              <img className="header__logo" src={youTubeLogo} alt="youtube logo" />
            </button>
          </Link>
        </div>
        <form className="header__center">
          <input type="text" ref={inputRef} placeholder="Search" />
          <Link to="/youtube-clone/login">
            <button onClick={handleSearch} type="button" className="header__searchbutton">
              <img src={searchIcon} alt="search" />
            </button>
          </Link>
          <button type="button" className="header__microphone">
            <img src={microphoneIcon} alt="microphone" />
          </button>
        </form>
        <div className="header__right">
          <button type="button" className="menu-button" onClick={() => visibilityYouTubeApps()}>
            <img src={youtubeAppsIcon} alt="youtubeappsmenu" />
          </button>
          <button type="button" className="menu-button" onClick={() => visibilitySettingsApps()}>
            <img src={settingsIcon} alt="settingsappsmenu" />
          </button>
          <LogoutButton />
        </div>
      </div>
      <SideBar visibility={visibility} />
      <YouTubeApps visibility={visibilityApps} />
      <Settings visibility={visibilitySettings} />
    </>
  );
};
