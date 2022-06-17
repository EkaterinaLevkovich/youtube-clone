import { Authorization } from '../../api/youtube/authorization';
import signInIcon from '../../assets/image/SignIn_icon.png';

export const LogoutButton = () => {
  const handleClick = () => {
    Authorization.logout();
  };

  return (
    <>
      <div className="logout__info">
        <p>Ekaterina</p>
      </div>
      <button onClick={handleClick} type="button" className="button__logout">
        <img src={signInIcon} alt="sign in" />
        <span>LOGOUT</span>
      </button>
    </>
  );
};
