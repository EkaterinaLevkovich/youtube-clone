/* eslint-disable arrow-body-style */
import { HeaderLogin } from '../components/HeaderLogin/HeaderLogin';
import { SideBarMenu } from '../components/SideBarMenu/SideBarMenu';
import { Video } from '../components/Video/Video';

export const Home = () => {
  return (
    <div>
      <HeaderLogin />
      <main className="main">
        <SideBarMenu />
        <Video />
      </main>
    </div>
  );
};
