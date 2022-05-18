import { Authorization } from '../../api/youtube/authorization';

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
        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="sign in" />
        <span>LOGOUT</span>
      </button>
    </>
  );
};
