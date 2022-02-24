import './LoginPage.scss';
import { useNavigate } from "react-router";
import { GiSharkFin } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';

const LoginPage = () => {

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  }

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
          <button className="login-button-login"> 로그인</button>
          <button className="login-button-register" onClick={handleRegister}> 회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
