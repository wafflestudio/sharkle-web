import styles from './Header.module.scss';
import { AiOutlineHome, AiOutlineUser, AiFillBell } from 'react-icons/ai';
import { GiSharkFin } from 'react-icons/gi';
import { useContext, useState } from 'react';
import AlertPopUp from './AlertPopUp';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSessionContext } from '../../Context/SessionContext';
import ResponsiveHeader from './ResponsiveHeader';
import LoginModal from '../LoginModal/LoginModal';

const Header = () => {
  // TODO
  // Connect header buttons with Link
  // 아이콘 수정 필요

  const navigate = useNavigate();

  const { isLogin, handleLogout } = useSessionContext();

  const [isAlertClicked, setIsAlertClicked] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const dummyAlerts = [
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: true },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: true },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },

    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: true },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: true },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
    { title: '[와플 스튜디오1]에 새 공지사항이 올라왔어요!', isNew: false },
  ];

  const onAlertClick = (e) => {
    console.log('clicked');
    setIsAlertClicked(!isAlertClicked);
  };
  const handleLogin = () => {
    setIsLoginOpen(true);
  };
  const handleClub = () => {
    navigate('/club');
  };

  return (
    <ResponsiveHeader>
      <div className={styles.header}>
        <div className={styles.inner}>
          {isLogin ? 'OOOOOOOOO' : 'XXXXXXXX'}
          <button onClick={handleLogin}>로그인 페이지로</button>
          <button onClick={handleLogout}>로그아웃</button>
          <button onClick={handleClub}>club</button>
          <div className={styles.left}>
            <button className={styles['icon-container']}>
              <GiSharkFin className={styles.icon} />
            </button>
            <div className={styles.title}>SHARKLE</div>
          </div>

          <div className={styles.right}>
            <button className={styles.button}>
              <AiOutlineHome className={styles.icon} />
            </button>
            <button className={styles.button} onClick={handleLogin}>
              <AiOutlineUser className={styles.icon} />
            </button>
            <button className={styles.button} onClick={onAlertClick}>
              <AiFillBell className={styles.icon} />
              {isAlertClicked ? (
                <AlertPopUp
                  alerts={dummyAlerts}
                  isAlertClicked={isAlertClicked}
                  setIsAlertClicked={setIsAlertClicked}
                />
              ) : null}
            </button>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </ResponsiveHeader>
  );
};

export default Header;
