import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CirclePage from './Component/CirclePage/CirclePage';
import MyPage from './Component/MyPage/MyPage';
import LoginPage from './Component/LoginPage/LoginPage';
import RegisterPage from './Component/RegisterPage/RegisterPage';
import ClubSearchPage from './Component/ClubSearchPage/ClubSearchPage';
//npm install -save react-scripts

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ClubSearchPage />} />
        <Route exact path="/circle/:circle_name/*" element={<CirclePage />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/main" element={<ClubSearchPage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
