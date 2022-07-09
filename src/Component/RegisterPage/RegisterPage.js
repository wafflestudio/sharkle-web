import styles from './RegisterPage.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerId, setRegisterId] = useState('temp');
  const [registerPassword, setRegisterPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [isMember, setIsMember] = useState(true);

  const handleSnu = () => {
    setIsMember(true);
  };

  const handleNonSnu = () => {
    setIsMember(false);
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleRegister = () => {
    if (registerEmail === '') {
      setRegisterError('이메일을 입력해주세요.');
    } else if (isMember && registerEmail.slice(-10, registerEmail.length) !== '@snu.ac.kr') {
      setRegisterError('서울대학교 이메일이 아닙니다.');
    } else if (registerName === '') {
      setRegisterError('닉네임을 입력해주세요.');
    }
    // else if (registerId === '') {
    //   setRegisterError('아이디를 입력해주세요.');
    // }
    else if (registerPassword === '') {
      setRegisterError('비밀번호를 입력해주세요.');
    } else if (registerPassword !== checkPassword) {
      setRegisterError('확인 비밀번호가 일치하지 않습니다.');
    } else {
      setRegisterError('');
      axios
        .post(`api/v1/auth/signup/`, {
          email: registerEmail,
          user_id: registerId,
          password: registerPassword,
          username: registerName,
        })
        .then((response) => {
          console.log(response);
          toast.success('회원가입 되었습니다.');
          navigate('/');
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response.data.email !== undefined) {
            setRegisterError(error.response.data.email);
          } else if (error.response.data.user_id !== undefined) {
            setRegisterError(error.response.data.user_id);
          }
        });
    }
  };

  return (
    <div className={styles.registerpage}>
      <div className={styles.mainsection}>
        <h1 className={styles.welcome}>환영합니다!</h1>
        <div className={styles.description}>기본 회원 정보를 등록해주세요.</div>

        <div className={styles.membersection}>
          {isMember === true ? (
            <>
              <button className={styles.memberbutton} onClick={handleSnu}>
                서울대 구성원
              </button>
              <button className={styles.memberbuttongray} onClick={handleNonSnu}>
                비구성원
              </button>
            </>
          ) : (
            <>
              <button className={styles.memberbuttongray} onClick={handleSnu}>
                서울대 구성원
              </button>
              <button className={styles.memberbutton} onClick={handleNonSnu}>
                비구성원
              </button>
            </>
          )}
        </div>

        <div className={styles.detailsection}>
          <div className={styles.block}>
            <label className={styles.text}>이메일</label>
            <div className={styles.input}>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.inputbox}
                  placeholder="이메일을 입력하세요"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <label className={styles.text}>닉네임</label>
            <div className={styles.input}>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.inputbox}
                  placeholder="닉네임을 입력하세요"
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/*<div className="register-detail-block">*/}
          {/*  <label className="register-detail-text">아이디</label>*/}
          {/*  <div className="register-detail-input">*/}
          {/*    <div className="register-detail-input-wrapper">*/}
          {/*      <input*/}
          {/*        className="register-detail-input-inputbox"*/}
          {/*        placeholder="아이디를 입력하세요"*/}
          {/*        onChange={(e) => setRegisterId(e.target.value)}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div className={styles.block}>
            <label className={styles.text}>비밀번호</label>
            <div className={styles.input}>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.inputbox}
                  type={'password'}
                  placeholder="비밀번호를 입력하세요"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <label className={styles.text}>비밀번호 확인</label>
            <div className={styles.input}>
              <div className={styles.inputwrapper}>
                <input
                  className={styles.inputbox}
                  type={'password'}
                  placeholder="비밀번호를 다시 한번 입력하세요"
                  onChange={(e) => setCheckPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.errorsection}>
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

        <div className={styles.buttonsection}>
          <button className={styles.cancelbutton} onClick={handleCancel}>
            취소
          </button>
          <button className={styles.completebutton} onClick={handleRegister}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
