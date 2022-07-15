import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './QnA.module.scss';
import QnAList from './QnAList/QnAList';
import { useState } from 'react';
import { useSessionContext } from '../../../Context/SessionContext';
import LoginModal from '../../LoginModal/LoginModal';
import Recruiting from '../Recruiting/Recruiting';
import QnAWrite from './QnAWrite/QnAWrite';
import QnAItem from './QnAItem/QnAItem';
import { useFunctionContext } from '../../../Functions/Functions';
import { useParams } from 'react-router';
import ClubInfo from '../../ClubSearchPage/ClubInfo';
import { Route } from 'react-router-dom';

const QnA = ({ match }) => {
  const params = useParams();

  const { isLogin, handleLogout } = useSessionContext();
  const { DummyQnA } = useFunctionContext();

  const [search, setSearch] = useState('');
  const [contentType, setContentType] = useState('list');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleWrite = () => {
    if (isLogin) {
      setContentType('write');
    } else {
      setIsLoginOpen(true);
    }
  };
  const handleBack = () => {
    setContentType('list');
  };

  return (
    <div>
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
        {DummyQnA.map((item) => (
          <QnAList item={item} key={item.id} />
        ))}
      </div>
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </div>
  );
};

export default QnA;
