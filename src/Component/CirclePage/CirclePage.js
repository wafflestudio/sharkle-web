import './CirclePage.module.scss';
import { BiCalendar, BiSearchAlt2 } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import QnAList from './QnA/QnAList/QnAList';
import axios from 'axios';
import Header from '../Header/Header';
import QnA from './QnA/QnA';
import Recruiting from './Recruiting/Recruiting';
import styles from './CirclePage.module.scss';
import { RiPushpinLine } from 'react-icons/ri';

const CirclePage = () => {
  const params = useParams();

  const [menutype, setMenutype] = useState('recruiting');

  const handleRecruiting = () => {
    setMenutype('recruiting');
  };
  const handleQnA = () => {
    setMenutype('qna');
  };

  useEffect(() => {
    axios
      .get(`api/v1/circle/${params.circleId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className={styles.clubpage}>
      <Header />

      <div className={styles.mainbox}>
        <div className={styles.topinfo}>
          <div className={styles.circleimage} />
          <div className={styles.circleinfo}>
            <div className={styles.circlename}>와플스튜디오</div>

            <div className={styles.circledate}>
              <div className={styles.index}>
                <BiCalendar className={styles.icon} />
                <div className={styles.title}>지원</div>
              </div>
              <div className={styles.detail}>2022년 5월 1일 ~ 2022년 5월 22일</div>
            </div>

            <div className={styles.circletag}>
              <div className={styles.index}>
                <AiFillTags className={styles.icon} />
              </div>
              <div className={styles.detail}># 개발 # 프론트 # 백 # 디자인</div>
            </div>

            {/*<div className={styles.buttonbox}>*/}
            {/*  <button className={styles.applybutton}>가입신청</button>*/}
            {/*  <button className={styles.alertbutton}>알림설정</button>*/}
            {/*</div>*/}
          </div>
        </div>
        {/*<div className={styles.bottomsection}>*/}
        {/*  <div className={styles.leftsection}>*/}
        {/*    <div className={styles.menubox}>*/}
        {/*      <div className={styles.title}>게시판 목록</div>*/}
        {/*      <div className={styles.menu}>*/}
        {/*        <RiPushpinLine flipHorizontal className={styles.icon} />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className={styles.rightsection}>asdfasdf</div>*/}
        {/*</div>*/}
      </div>

      {/*<div className="info">*/}
      {/*  <div className="info-main">*/}
      {/*    <div className="info-main-thumb">*/}
      {/*      <div className="info-main-thumb-container">*/}
      {/*        <img*/}
      {/*          className="info-main-thumb-img"*/}
      {/*          src="https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=256"*/}
      {/*          alt="temp"*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="info-main-name">*/}
      {/*      <div className="info-main-name-style">와플 스튜디오</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="info-sub">*/}
      {/*    <div className="info-sub-recruit">*/}
      {/*      <BiCalendar className="info-sub-recruit-icon" />*/}
      {/*      <div className="info-sub-recruit-date">22/03/01 ~ 22/03/31</div>*/}
      {/*    </div>*/}

      {/*    <div className="info-sub-tags">*/}
      {/*      <AiFillTags className="info-sub-tags-icon" />*/}
      {/*      <div className="info-sub-tags-list">#개발 #코딩 #디자이너</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="info-util">*/}
      {/*    <div className="info-util-alert">*/}
      {/*      <button className="info-util-alert-btn">알림설정</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className={styles.content}>
        <div className={styles.menu}>
          <div className={styles[`recruit${menutype === 'recruiting' ? 'on' : ''}`]} onClick={handleRecruiting}>
            <span>Recruiting</span>
          </div>
          <div className={styles[`qna${menutype === 'qna' ? 'on' : ''}`]} onClick={handleQnA}>
            <span>Q&A</span>
          </div>
        </div>
        {menutype === 'recruiting' && <Recruiting />}
        {menutype === 'qna' && <QnA />}
      </div>
    </div>
  );
};

export default CirclePage;
