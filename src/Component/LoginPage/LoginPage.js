import styles from './LoginPage.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GiSharkFin } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';
import axios from 'axios';
import { useSessionContext } from '../../Context/SessionContext';
import { toast } from 'react-toastify';
import Header from '../Header/Header';

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const { handleLogin, handleLogout } = useSessionContext();

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      handleLoginButton();
    }
  };

  const handleLoginButton = () => {
    if (loginId === '') {
      toast.error('아이디를 입력해주세요.');
    } else if (loginPassword === '') {
      toast.error('비밀번호를 입력해주세요.');
    } else {
      axios
        .post(`api/v1/auth/login/`, {
          email: loginId,
          password: loginPassword,
        })
        .then((response) => {
          toast.success('로그인 되었습니다.');
          handleLogin(loginId, null, null, response.data.access, response.data.refresh);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            toast.error('로그인 정보가 맞지 않습니다.');
          } else {
            toast.error('로그인 에러!');
          }
        });
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className={styles['login-page']}>
      <Header />
      <div className={styles.title}>
        <GiSharkFin className={styles.icon} />
        <div className={styles.text}>SHARKLE</div>
      </div>
      <div className={styles.container}>
        <div className={styles.id}>
          <BsFillPersonFill className={styles.icon} />
          <input
            className={styles.input}
            placeholder="아이디"
            onKeyPress={onKeyPress}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>

        <div className={styles.password}>
          <BiLockAlt className={styles.icon} />
          <input
            className={styles.input}
            type="password"
            placeholder="비밀번호"
            onKeyPress={onKeyPress}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>

        <div className={styles.button}>
          <button className={styles.login} onClick={handleLoginButton}>
            {' '}
            로그인
          </button>
          <button className={styles.register} onClick={handleRegister}>
            {' '}
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
