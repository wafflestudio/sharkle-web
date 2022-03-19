import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './LoginModal.module.scss';
import { toast } from 'react-toastify';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';
import { useSessionContext } from '../../Context/SessionContext';
import { GiSharkFin } from 'react-icons/gi';

const LoginModal = (props) => {
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = props;

  const { handleLogin, handleLogout } = useSessionContext();

  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  Modal.setAppElement('#root');

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
          setIsOpen(false);
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
    <Modal className={styles['login-modal']} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className={styles.title}>
        <GiSharkFin className={styles.icon} />
        로그인
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
    </Modal>
  );
};

export default LoginModal;
