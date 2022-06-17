/* eslint-disable arrow-body-style */
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home';
import { Login } from '../../pages/login';
import { NoMatch } from '../../pages/no-match';

const App = () => {
  return (
    <Routes>
      <Route path="/youtube-clone/" element={<Home />} />
      <Route path="/youtube-clone/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
