import styles from './QnAItem.module.scss';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createRenderer } from 'react-dom/test-utils';
import { IoIosArrowBack } from 'react-icons/io';
import QnAComment from './QnAComment/QnAComment';

const dummyItem = {
  id: 0,
  title: '타대생도 가입 가능한가요?',
  date: '2022.03.01',
  comment: 1,
  contents: '질문글 내용',
  reply: { user: '답글1', comment: '댓글댓글' },
};

const QnAItem = (props) => {
  const { circleId, curBoardId, isLoad } = props;
  const params = useParams();
  const navigate = useNavigate();

  const [qnaItem, setQnAItem] = useState({});

  const handleQnA = () => {
    navigate(`/circle/${params.circleName}/QnA`);
  };

  useEffect(() => {
    if (isLoad) {
      axios
        .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/${params.id}/`)
        .then((response) => {
          console.log(response.data);
          setQnAItem(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoad]);

  return (
    <div className={styles.board_wrapper}>
      <div className={styles.header_wrapper}>
        <div className={styles.menu_wrapper} onClick={handleQnA}>
          <IoIosArrowBack className={styles.arrow} />
          <div className={styles.menu}>QnA</div>
        </div>
        <div className={styles.title_wrapper}>
          <div className={styles.title}>{qnaItem.title}</div>
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.info}>
            <div className={styles.author}>{qnaItem.author_username}</div>
            <div className={styles.line} />
            <div className={styles.date}>{dayjs(qnaItem.created_at).format('YYYY.MM.DD. HH:MM')}</div>
            <div className={styles.line} />
            <div className={styles.click}>조회 {qnaItem.view}</div>
          </div>
        </div>
      </div>
      <div className={styles.content_wrapper}>
        <pre className={styles.content}>{qnaItem.content}</pre>
      </div>
      <div className={styles.comment_wrapper}>
        <QnAComment curBoardId={curBoardId} counts={qnaItem.comments_counts} />
      </div>
    </div>
  );
};

export default QnAItem;
