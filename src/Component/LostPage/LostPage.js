import styles from './LostPage.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const LostPage = () => {
  const navigate = useNavigate();

  const [checkEmail, setCheckEmail] = useState('');
  const [isPWcheck, setIsPWcheck] = useState(false);

  const handleCancel = () => {
    navigate('/');
  };

  const handleCheck = () => {};

  const handleBack = () => {
    navigate(-1);
  };

  const handleIDcheck = () => {
    setIsPWcheck(false);
  };

  const handlePWcheck = () => {
    setIsPWcheck(true);
  };

  return (
    <div className={styles.lostpage}>
      <div className={styles.backsection}>
        <button className={styles.backbutton} onClick={handleBack}>
          ← 돌아가기
        </button>
      </div>

      <div className={styles.mainsection}>
        <h1 className={styles.welcome}>계정 / 비밀번호 찾기 </h1>
        <div className={styles.description}>가입 이메일을 입력해주세요.</div>

        <div className={styles.membersection}>
          {isPWcheck === false ? (
            <>
              <button className={styles.memberbutton} onClick={handleIDcheck}>
                계정 확인
              </button>
              <button className={styles.memberbuttongray} onClick={handlePWcheck}>
                비밀번호 찾기
              </button>
            </>
          ) : (
            <>
              <button className={styles.memberbuttongray} onClick={handleIDcheck}>
                계정 확인
              </button>
              <button className={styles.memberbutton} onClick={handlePWcheck}>
                비밀번호 찾기
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
                  onChange={(e) => setCheckEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.buttonsection}>
          <button className={styles.completebutton} onClick={handleCheck}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default LostPage;
