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
        <Route path="/circle/:circleName/:boardName/*" element={<CirclePage />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
