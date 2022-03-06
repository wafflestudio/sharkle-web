import './LoginPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GiSharkFin } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';
import axios from 'axios';
import { useSessionContext } from '../../Context/SessionContext';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { handleLogin, handleLogout } = useSessionContext();

  const handleLogins = () => {
    axios
      .post(`http://sharkle-server.kro.kr/api/v1/auth/login`, {
        email: loginId,
        password: loginPassword,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        toast.error('로그인 에러!');
      });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="login-title">
        <GiSharkFin className="login-title-icon" />
        <div className="login-title-text">SHARKLE</div>
      </div>
      <div className="login-container">
        <div className="login-id">
          <BsFillPersonFill className="login-id-icon" />
          <input className="login-id-input" placeholder="ID" />
        </div>

        <div className="login-password">
          <BiLockAlt className="login-password-icon" />
          <input className="login-password-input" type="password" placeholder="PW" />
        </div>

        <div className="login-button-container">
          <button className="login-button-login" onClick={handleLogins}>
            {' '}
            로그인
          </button>
          <button className="login-button-register" onClick={handleRegister}>
            {' '}
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
