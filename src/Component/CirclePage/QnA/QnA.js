import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './QnA.module.scss';
import QnAList from './QnAList/QnAList';
import { useEffect, useState } from 'react';
import { useSessionContext } from '../../../Context/SessionContext';
import LoginModal from '../../LoginModal/LoginModal';
import Recruiting from '../Recruiting/Recruiting';
import QnAWrite from './QnAWrite/QnAWrite';
import QnAItem from './QnAItem/QnAItem';
import { useFunctionContext } from '../../../Functions/Functions';
import { useParams } from 'react-router';
import ClubInfo from '../../ClubSearchPage/ClubInfo';
import { Route } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';

const QnA = (props) => {
  const { circleId, curBoardId, isLoad, resource } = props;
  const qnaList = circleId !== null && curBoardId !== null ? resource.read().articles : [];
  const params = useParams();

  const { isLogin, handleLogout } = useSessionContext();
  const { DummyQnA, PageNum } = useFunctionContext();

  const [search, setSearch] = useState('');

  //const [qnaList, setQnAList] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWrite, setIsWrite] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleWriteQnA = () => {
    if (isLogin) {
      setIsWrite(true);
    } else {
      setIsLoginOpen(true);
    }
  };

  const test = circleId !== null && curBoardId !== null ? console.log('sucess') : console.log('null case');
  //const qnaList = circleId !== null && curBoardId !== null ? resource.qnaList.read().articles : [];

  /*useEffect(() => {
    if (isLoad) {
      axios
        .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/`)
        .then((response) => {
          console.log(response.data);
          setQnAList(response.data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoad, isWrite]);*/

  return (
    <div className={styles.board_skel}>
      <div className={styles.board_title_wrapper}>
        <div className={styles.board_title}>
          <BsPinAngle className={styles.pin} />
          <div className={styles.title}>{params.boardName}</div>
        </div>
        <div className={styles.board_sort}>
          <div className={styles.board_sort_list}>최신순</div>│<div className={styles.board_sort_list}>과거순</div>│
          <div className={styles.board_sort_list}>조회순</div>│<div className={styles.board_sort_list}>답변순</div>
        </div>
        <div className={styles.board_subtitle}>
          <div className={styles.board_sub_title}>제목</div>
          <div className={styles.board_sub_click}>조회수</div>
          <div className={styles.board_sub_write}>작성자</div>
          <div className={styles.board_sub_date}>작성일</div>
        </div>
      </div>
      <div className={styles.board_contents}>
        {qnaList.map((item) => (
          <QnAList item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.board_util}>
        <div className={styles.board_page}>
          {PageNum.map((item) => (
            <div key={item.id} className={styles.board_page_num}>
              {item.id}
            </div>
          ))}
        </div>
        <div className={styles.board_write} onClick={handleWriteQnA}>
          <button className={styles.board_write_btn}>글쓰기</button>
        </div>
        <div className={styles['searcher-wrapper']}>
          <div className={styles.searcher}>
            <div className={styles.inner}>
              <div className={styles.title}>검색</div>
              <input />
              <AiOutlineSearch className={styles['search-icon']} />
            </div>
          </div>
        </div>
      </div>
      <QnAWrite isOpen={isWrite} setIsOpen={setIsWrite} circleId={circleId} curBoardId={curBoardId} />
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </div>
  );
};

export default QnA;
