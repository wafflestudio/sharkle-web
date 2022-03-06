import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ClubPage from './Component/ClubPage/ClubPage';
import MyPage from './Component/MyPage/MyPage';
import Header from './Component/Header/Header';
import LoginPage from './Component/LoginPage/LoginPage';
import RegisterPage from './Component/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ClubPage />} />
        <Route exact path="/club" element={<ClubPage />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
