import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { initialState, search } from '../../store/actions/video/video.actions';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import { Settings } from '../Settings/Settings';
import { SideBar } from '../SideBar/SideBar';
import { YouTubeApps } from '../YouTubeApps/YouTubeApps';

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
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="burger-menu" />
          </button>
          <Link to="/login">
            <button type="button" onClick={handleRecomended} className="logo-button">
              <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="youtube logo" />
            </button>
          </Link>
        </div>
        <form className="header__center">
          <input type="text" ref={inputRef} placeholder="Search" />
          <Link to="/login">
            <button onClick={handleSearch} type="button" className="header__searchbutton">
              <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="search" />
            </button>
          </Link>
          <button type="button" className="header__microphone">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25682.png" alt="microphone" />
          </button>
        </form>
        <div className="header__right">
          <button type="button" className="menu-button" onClick={() => visibilityYouTubeApps()}>
            <img src="https://cdn-icons-png.flaticon.com/512/17/17704.png" alt="" />
          </button>
          <button type="button" className="menu-button" onClick={() => visibilitySettingsApps()}>
            <img src="https://cdn-icons-png.flaticon.com/512/61/61140.png" alt="" />
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
