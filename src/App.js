import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CirclePage from './Component/CirclePage/CirclePage';
import MyPage from './Component/MyPage/MyPage';
import LoginPage from './Component/LoginPage/LoginPage';
import RegisterPage from './Component/RegisterPage/RegisterPage';
import ClubSearchPage from './Component/ClubSearchPage/ClubSearchPage';
import LostPage from './Component/LostPage/LostPage';
import ScrollSetting from './Context/ScrolSetting';
import React from 'react';
//npm install -save react-scripts

function App() {
  return (
    <BrowserRouter>
      <ScrollSetting />
      <Routes>
        <Route exact path="/" element={<ClubSearchPage />} />
        <Route path="/circle/:circleName/:boardName/*" element={<CirclePage />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/lost" element={<LostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
