import { Authorization } from '../../api/youtube/authorization';
import signInIcon from '../../assets/image/SignIn_icon.png';

export const LoginButton = () => {
  const handleClick = () => {
    Authorization.login();
  };

  return (
    <div>
      <button onClick={handleClick} type="button" className="button__login">
        <img src={signInIcon} alt="sign in" />
        <span>SIGN IN</span>
      </button>
    </div>
  );
};
