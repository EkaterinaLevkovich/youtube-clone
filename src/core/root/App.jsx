/* eslint-disable arrow-body-style */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home';
import { Login } from '../../pages/login';
import { NoMatch } from '../../pages/no-match';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
