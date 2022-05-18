import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { HeaderLogout } from '../components/HeaderLogout/HeaderLogout';
import { SideBarMenu } from '../components/SideBarMenu/SideBarMenu';
import { Video } from '../components/Video/Video';
import { Authorization } from '../api/youtube/authorization';

export const Login = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      return;
    }

    Authorization.getAccessToken(code);
  }, []);
  return (
    <div>
      <HeaderLogout />
      <main className="main">
        <SideBarMenu />
        <Video />
      </main>
    </div>
  );
};
