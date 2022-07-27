import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './IntroWrite.module.scss';
import { useEffect, useState } from 'react';
import { useSessionContext } from '../../../../Context/SessionContext';
import LoginModal from '../../../LoginModal/LoginModal';
import { useFunctionContext } from '../../../../Functions/Functions';
import { useParams } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Parser from 'html-react-parser';

const IntroWrite = (props) => {
  const { circleId, curBoardId, isLoad } = props;
  const params = useParams();

  const { isLogin, handleLogout } = useSessionContext();
  const { DummyQnA, PageNum } = useFunctionContext();

  const [article, setArticle] = useState('');

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWrite, setIsWrite] = useState(false);

  const handleWriteQnA = () => {
    if (isLogin) {
      setIsWrite(true);
    } else {
      setIsLoginOpen(true);
    }
  };

  // useEffect(() => {
  //   if (isLoad) {
  //     axios
  //       .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/`)
  //       .then((response) => {
  //         setQnAList(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [isLoad, isWrite]);

  return (
    <div>
      <div className={styles.board_title_wrapper}>
        <div className={styles.board_title}>
          <BsPinAngle className={styles.pin} />
          <div className={styles.title}>{params.boardName}</div>
        </div>
        {/*<div className={styles.board_sort}>*/}
        {/*  <div className={styles.board_sort_list}>최신순</div>│<div className={styles.board_sort_list}>과거순</div>│*/}
        {/*  <div className={styles.board_sort_list}>조회순</div>│<div className={styles.board_sort_list}>답변순</div>*/}
        {/*</div>*/}
        {/*<div className={styles.board_subtitle}>*/}
        {/*  <div className={styles.board_sub_title}>제목</div>*/}
        {/*  <div className={styles.board_sub_click}>조회수</div>*/}
        {/*  <div className={styles.board_sub_write}>작성자</div>*/}
        {/*  <div className={styles.board_sub_date}>작성일</div>*/}
        {/*</div>*/}
      </div>
      <div className={styles.board_contents}>
        <div className={styles.board_club_image_wrapper}>
          <img
            className={styles.board_club_image}
            src="https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=256"
            alt="temp"
          />
        </div>

        <div className={styles.board_article}>{Parser(article)}</div>
      </div>
      <div className={styles.board_util}>
        {/*<div className={styles.board_page}>*/}
        {/*  {PageNum.map((item) => (*/}
        {/*    <div key={item.id} className={styles.board_page_num}>*/}
        {/*      {item.id}*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}
        <div className={styles.board_write} onClick={handleWriteQnA}>
          <button className={styles.board_write_btn}>글쓰기</button>
        </div>
        {/*<div className={styles['searcher-wrapper']}>*/}
        {/*  <div className={styles.searcher}>*/}
        {/*    <div className={styles.inner}>*/}
        {/*      <div className={styles.title}>검색</div>*/}
        {/*      <input />*/}
        {/*      <AiOutlineSearch className={styles['search-icon']} />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      {/*<IntroWrite isOpen={isWrite} setIsOpen={setIsWrite} circleId={circleId} curBoardId={curBoardId} />*/}
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </div>
  );
};

export default IntroWrite;
