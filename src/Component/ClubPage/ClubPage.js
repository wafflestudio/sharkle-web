import './ClubPage.scss';
import { BiCalendar, BiSearchAlt2 } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { useState } from 'react';
import QnAList from './QnA/QnAList/QnAList';
import Header from '../Header/Header';
import QnA from './QnA/QnA';
import Recruiting from './Recruiting/Recruiting';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

const tempMenu = [
  {
    name: '소개',
    id: 0,
  },
  {
    name: '모집',
    id: 1,
  },
  {
    name: 'QnA',
    id: 2,
  },
  {
    name: '커뮤니티',
    id: 3,
  },
];

const ClubPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [menutype, setMenutype] = useState('recruiting');

  const handleMenu = (item) => {
    navigate(`/circle/${params.circleName}/${item.name}`);
  };

  const testParam = () => {
    console.log(params);
  };

  return (
    <div className="container">
      <Header />
      <div className="info">
        <div className="info-main">
          <div className="info-main-thumb">
            <div className="info-main-thumb-container">
              <img
                className="info-main-thumb-img"
                src="https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=256"
                alt="temp"
              />
            </div>
          </div>
          <div className="info-main-name">
            <div className="info-main-name-style" onClick={testParam}>
              {params.circleName}
            </div>
          </div>
        </div>
        <div className="info-sub">
          <div className="info-sub-recruit">
            <BiCalendar className="info-sub-recruit-icon" />
            <div className="info-sub-recruit-date">22/03/01 ~ 22/03/31</div>
          </div>
          <div className="info-sub-tags">
            <AiFillTags className="info-sub-tags-icon" />
            <div className="info-sub-tags-list">#개발 #코딩 #디자이너</div>
          </div>
        </div>
        <div className="info-util">
          <div className="info-util-alert">
            <button className="info-util-alert-btn">알림설정</button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-menu">
          {tempMenu.map((item) => (
            <div
              className={`content-menu-recruit ${params.boardName === item.name ? 'on' : ''}`}
              onClick={() => handleMenu(item)}
              key={item.id}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        {params.boardName === '모집' && <Recruiting />}
        {params.boardName === 'QnA' && <QnA />}
      </div>
    </div>
  );
};

export default ClubPage;
