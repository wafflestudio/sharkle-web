import './App.css';
import { BrowserRouter, Redirect, Route, Routes, Switch } from 'react-router-dom';
import LoginPage from './Component/LoginPage/LoginPage';
import RegisterPage from './Component/RegisterPage/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
