import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CirclePage from './Component/CirclePage/CirclePage';
import MyPage from './Component/MyPage/MyPage';
import LoginPage from './Component/LoginPage/LoginPage';
import RegisterPage from './Component/RegisterPage/RegisterPage';
import MainPage from './Component/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/circle/:circleId" element={<CirclePage />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/main" element={<MainPage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
