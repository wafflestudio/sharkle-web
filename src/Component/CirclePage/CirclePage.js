import styles from './CirclePage.module.scss';
import { BiCalendar, BiSearchAlt2 } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import QnAList from './QnA/QnAList/QnAList';
import Header from '../Header/Header';
import QnA from './QnA/QnA';
import Recruiting from './Recruiting/Recruiting';
import axios from 'axios';
import { useLocation, useMatch, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { BrowserRouter, Link, Navigate, Route, Routes, useRouteMatch } from 'react-router-dom';
import { useSessionContext } from '../../Context/SessionContext';
import ClubSearchPage from '../ClubSearchPage/ClubSearchPage';
import MyPage from '../MyPage/MyPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import classNames from 'classnames';
import QnAItem from './QnA/QnAItem/QnAItem';

const DummyMenuList = [{ name: '소개' }, { name: 'QnA' }, { name: '지원' }, { name: '커뮤니티' }];

const CirclePage = () => {
  const { accessToken } = useSessionContext();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [circleId, setCircleId] = useState(0);
  const [menuList, setMenuList] = useState([]);
  const [menutype, setMenutype] = useState('recruiting');

  const handleMenu = (item) => {
    navigate(`/circle/${params.circleName}/${item.name}`);
  };
  const handleRecruiting = () => {
    setMenutype('recruiting');
  };
  const handleQnA = () => {
    setMenutype('qna');
  };

  useEffect(() => {
    axios
      .get(`api/v1/circle/${params.circleName}/board/`)
      .then((response) => {
        setMenuList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const tempFunction = () => {
    axios
      .get(`api/v1/circle/${params.circleName}/board/`)
      .then((response) => {
        setMenuList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container_wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.image_wrapper}>
            <img
              className={styles.image}
              src="https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=256"
              alt="temp"
            />
          </div>
          <div className={styles.menu_wrapper}>
            <div className={styles.menu_title}>게시판 목록</div>
            {DummyMenuList.map((item) => (
              <div className={styles.menu_list} key={item.name} onClick={() => handleMenu(item)}>
                <BsPinAngle className={params.boardName === item.name ? styles.on : styles.pin} />
                <div className={params.boardName === item.name ? styles.menu_name_on : styles.menu_name}>
                  {item.name}
                </div>
              </div>
            ))}
            <button onClick={tempFunction}>임시 기능 테스트용</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.name_wrapper}>{params.circleName}</div>
            <div className={styles.due_wrapper}>
              <div className={styles.due}>지원기간 박스 자리</div>
            </div>
            <div className={styles.extra_wrapper}>
              <div className={styles.tag}>태그 자리</div>
              <button className={styles.join}>가입신청 자리</button>
              <button className={styles.notice}>알림설정 자리</button>
            </div>
          </div>
          <div className={styles.board_wrapper}>
            {params.boardName === 'QnA' ? (
              <div className={styles.board_qna}>
                <Routes>
                  <Route exact path="/:id" element={<QnAItem />} />
                  <Route exact path="/" element={<QnA />} />
                </Routes>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CirclePage;
