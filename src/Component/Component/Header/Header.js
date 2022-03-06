import './Header.scss';
import { AiOutlineHome, AiOutlineUser, AiFillBell } from 'react-icons/ai';
import { GiSharkFin } from 'react-icons/gi';
import { useState } from 'react';
import AlertPopUp from './AlertPopUp';
import { Link } from 'react-router-dom';

const Header = () => {
  // TODO
  // Connect header buttons with Link
  // 아이콘 수정 필요

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
  return (
    <div className="header">
      <div className="inner">
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
          <button className="button grey">
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
