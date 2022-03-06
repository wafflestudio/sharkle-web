import './Header.scss';
import { AiOutlineHome, AiOutlineUser, AiFillBell } from 'react-icons/ai';
import { GiSharkFin } from 'react-icons/gi';
import { useContext, useState } from 'react';
import AlertPopUp from './AlertPopUp';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSessionContext } from '../../Context/SessionContext';

const Header = () => {
  // TODO
  // Connect header buttons with Link
  // 아이콘 수정 필요

  const navigate = useNavigate();

  const { isLogin, handleLogout } = useSessionContext();

  const [isAlertClicked, setIsAlertClicked] = useState(false);

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
    navigate('/login');
  };
  const handleClub = () => {
    navigate('/club');
  };

  return (
    <div className="header">
      <div className="inner">
        {isLogin ? 'OOOOOOOOO' : 'XXXXXXXX'}
        <button onClick={handleLogin}>로그인 페이지로</button>
        <button onClick={handleLogout}>로그아웃</button>
        <button onClick={handleClub}>club</button>
        <div className="left">
          <button className="icon-container">
            <GiSharkFin className="icon" />
          </button>
          <div className="title">SHARKLE</div>
        </div>

        <div className="right">
          <button className="button grey">
            <AiOutlineHome className="icon" />
          </button>
          <button className="button grey" onClick={handleLogin}>
            <AiOutlineUser className="icon" />
          </button>
          <button className="button grey" onClick={onAlertClick}>
            <AiFillBell className="icon" />
            {isAlertClicked ? (
              <AlertPopUp alerts={dummyAlerts} isAlertClicked={isAlertClicked} setIsAlertClicked={setIsAlertClicked} />
            ) : null}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
