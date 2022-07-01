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
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { Route } from 'react-router-dom';

const DummyMenuList = ['소개', '지원', 'QnA', '커뮤니티'];

const CirclePage = ({ match }) => {
  const [menutype, setMenutype] = useState('recruiting');

  const handleRecruiting = () => {
    setMenutype('recruiting');
  };
  const handleQnA = () => {
    setMenutype('qna');
  };

  const params = useParams();

  const tempCreateCircle = () => {
    axios
      .post(`api/v1/circle/`, {
        type0: 4,
        type1: 1,
        name: '와플 스튜디오',
        bio: '개발 동아리 입니다.',
        introduction: '맛있는 서비스를 만드는 곳',
        tag: '컴퓨터 개발 코딩',
        homepage: 'https://wafflestudio.com/',
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        tiktok: '',
        band: '',
      })
      .then((response) => {
        console.log(response.data);
        toast.success('새로운 동아리가 생성되었습니다.');
      })
      .catch((error) => {
        console.log(error);
        toast.error('생성에 실패하였습니다.');
      });
  };

  /*useEffect(() => {
    axios
      .get(`api/v1/circle/${params.circleId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });*/

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
            {DummyMenuList.map((item) => (
              <div className={styles.menu_list}>{item}</div>
            ))}
            <button onClick={tempCreateCircle}>임시 동아리 추가 버튼</button>
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

export default CirclePage;
