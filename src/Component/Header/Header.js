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
import UserIconPopUp from './UserIconPopUp';

const Header = () => {
  // TODO
  // Connect header buttons with Link
  // 아이콘 수정 필요

  const navigate = useNavigate();

  const { isLogin, handleLogout, email, username } = useSessionContext();

  const [isAlertClicked, setIsAlertClicked] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserIconClicked, setIsUserIconClicked] = useState(false);
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
  const handleMainPage = () => {
    console.log('clicked');
    navigate('/');
  };
  const handleClub = () => {
    console.log('clicked');
    navigate('/Club');
  };
  const handleMyPage = () => {
    navigate('/mypage');
  };
  const onUserIconClick = () => {
    console.log('clicked');
    setIsUserIconClicked(!isUserIconClicked);
  };

  return (
    <ResponsiveHeader>
      <div className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <button className={styles['icon-container']} onClick={handleMainPage}>
              <GiSharkFin className={styles.icon} />
            </button>
            <div className={styles.title} onClick={handleMainPage}>
              SHARKLE
            </div>
          </div>

          <div className={styles.right}>
            {!isLogin ? (
              <button className={styles['login-button']} onClick={handleLogin}>
                로그인
              </button>
            ) : (
              <>
                <div className={styles.name}>{username}</div>
                <button className={styles.button} onClick={onUserIconClick}>
                  <AiOutlineUser className={styles.icon} />
                  {isUserIconClicked ? <UserIconPopUp handleMyPage={handleMyPage} handleClub={handleClub} /> : null}
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
              </>
            )}
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </ResponsiveHeader>
  );
};

export default Header;
