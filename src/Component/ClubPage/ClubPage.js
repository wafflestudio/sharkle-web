import styles from './ClubPage.module.scss';
import { BiCalendar, BiSearchAlt2 } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import QnAList from './QnA/QnAList/QnAList';
import Header from '../Header/Header';
import QnA from './QnA/QnA';
import Recruiting from './Recruiting/Recruiting';
import axios from 'axios';
import { useParams } from 'react-router';

const ClubPage = () => {
  const [menutype, setMenutype] = useState('recruiting');

  const handleRecruiting = () => {
    setMenutype('recruiting');
  };
  const handleQnA = () => {
    setMenutype('qna');
  };

  const params = useParams();

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
            <div className={styles.menu_list}>메뉴 1</div>
            <div className={styles.menu_list}>메뉴 2</div>
            <div className={styles.menu_list}>메뉴 3</div>
            <div className={styles.menu_list}>메뉴 4</div>
            <div className={styles.menu_list}>메뉴 5</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.name_wrapper}>이름 자리</div>
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
            <div className={styles.board}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubPage;
