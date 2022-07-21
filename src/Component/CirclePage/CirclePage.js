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
  const { accessToken, isLogin } = useSessionContext();
  const navigate = useNavigate();
  const params = useParams();

  const [circleId, setCircleId] = useState(null);
  const [circleTag, setCircleTag] = useState(null);
  const [circleD_day, setCircleD_day] = useState(null);

  const [curBoardId, setCurBoardId] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  const handleMenu = (item) => {
    setCurBoardId(item.id);
    navigate(`/circle/${params.circleName}/${item.name}`);
  };

  useEffect(() => {
    axios
      .get(`api/v1/circle/${params.circleName}/name/`)
      .then((response) => {
        setCircleId(response.data.id);
        setCircleTag(response.data.tag);
        setCircleD_day(response.data.d_day_detail);
      })
      .catch((error) => {
        console.log(error);
      });

    if (isLogin) {
      axios
        .get(`api/v1/circle/${params.circleName}/board/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setMenuList(response.data);
          setCurBoardId(response.data.find((item) => item.name === params.boardName).id);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`api/v1/circle/${params.circleName}/board/`, {})
        .then((response) => {
          setMenuList(response.data);
          setCurBoardId(response.data.find((item) => item.name === params.boardName).id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (circleId !== null && curBoardId !== null && curBoardId !== undefined) {
      setIsLoad(true);
    }
  }, [circleId, curBoardId]);

  const tempFunction = () => {
    console.log(curBoardId);
    console.log(circleId);
    console.log(isLoad);
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
            {menuList.map((item) => (
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
              <div className={styles.tag}>{circleTag}</div>
              <button className={styles.join}>가입신청 자리</button>
              <button className={styles.notice}>알림설정 자리</button>
            </div>
          </div>
          <div className={styles.board_wrapper}>
            {params.boardName === 'QnA' ? (
              <div className={styles.board_qna}>
                <Routes>
                  <Route
                    exact
                    path="/:id"
                    element={<QnAItem circleId={circleId} curBoardId={curBoardId} isLoad={isLoad} />}
                  />
                  <Route exact path="/" element={<QnA circleId={circleId} curBoardId={curBoardId} isLoad={isLoad} />} />
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
