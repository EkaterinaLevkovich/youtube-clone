import { Authorization } from '../../api/youtube/authorization';

export const LoginButton = () => {
  const handleClick = () => {
    Authorization.login();
  };

  return (
    <div>
      <button onClick={handleClick} type="button" className="button__login">
        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="sign in" />
        <span>SIGN IN</span>
      </button>
    </div>
  );
};
