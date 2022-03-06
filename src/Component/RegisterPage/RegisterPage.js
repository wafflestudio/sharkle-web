import './RegisterPage.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerId, setRegisterId] = useState('');
  const [registerPW, setRegisterPW] = useState('');
  const [registerPW2, setRegisterPW2] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleCancel = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    if (registerName === '') {
      setRegisterError('이름을 입력해주세요.');
    } else if (registerEmail.slice(-10, registerEmail.length) !== '@snu.ac.kr') {
      setRegisterError('서울대학교 이메일이 아닙니다.');
    } else if (registerId === '') {
      setRegisterError('아이디를 입력해주세요.');
    } else if (registerPW === '') {
      setRegisterError('비밀번호를 입력해주세요.');
    } else if (registerPW !== registerPW2) {
      setRegisterError('확인 비밀번호가 일치하지 않습니다.');
    } else {
      setRegisterError('');
      axios
        .post(`/api/v1/auth/signup`, {
          email: registerEmail,
          user_id: registerId,
          password: registerPW,
          username: registerName,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="registerpage">
      <div className="register-section">
        <h1 className="register-welcome">환영합니다!</h1>
        <div className="register-description">기본 회원 정보를 등록해주세요.</div>

        <div className="register-detail-section">
          <div className="register-detail-block">
            <label className="register-detail-text">이름</label>
            <div className="register-detail-input">
              <div className="register-detail-input-wrapper">
                <input
                  className="register-detail-input-inputbox"
                  placeholder="이름을 입력하세요"
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register-detail-block">
            <label className="register-detail-text">이메일</label>
            <div className="register-detail-input">
              <div className="register-detail-input-wrapper">
                <input
                  className="register-detail-input-inputbox"
                  placeholder="이메일을 입력하세요"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register-detail-block">
            <label className="register-detail-text">아이디</label>
            <div className="register-detail-input">
              <div className="register-detail-input-wrapper">
                <input
                  className="register-detail-input-inputbox"
                  placeholder="아이디를 입력하세요"
                  onChange={(e) => setRegisterId(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register-detail-block">
            <label className="register-detail-text">비밀번호</label>
            <div className="register-detail-input">
              <div className="register-detail-input-wrapper">
                <input
                  className="register-detail-input-inputbox"
                  type={'password'}
                  placeholder="비밀번호를 입력하세요"
                  onChange={(e) => setRegisterPW(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="register-detail-block">
            <label className="register-detail-text">비밀번호 확인</label>
            <div className="register-detail-input">
              <div className="register-detail-input-wrapper">
                <input
                  className="register-detail-input-inputbox"
                  type={'password'}
                  placeholder="비밀번호를 다시 한번 입력하세요"
                  onChange={(e) => setRegisterPW2(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="register-error-section">
          {registerError}
          {/*{registerError === 0*/}
          {/*  ? ''*/}
          {/*  : registerError === 1*/}
          {/*  ? '이름을 입력해주세요.'*/}
          {/*  : registerError === 2*/}
          {/*  ? '아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.'*/}
          {/*  : registerError === 3*/}
          {/*  ? '이미 존재하는 아이디입니다.'*/}
          {/*  : '에러 발생!'}*/}
        </div>

        <div className="register-button-section">
          <button className="register-btn-cancel" onClick={handleCancel}>
            취소
          </button>
          <button className="register-btn-complete" onClick={handleRegister}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
