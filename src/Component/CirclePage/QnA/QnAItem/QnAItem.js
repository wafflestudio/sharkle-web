import styles from './QnAItem.module.scss';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createRenderer } from 'react-dom/test-utils';
import { IoIosArrowBack } from 'react-icons/io';
import QnAComment from './QnAComment/QnAComment';
import DeleteModal from '../DeleteModal/DeleteModal';
import { useSessionContext } from '../../../../Context/SessionContext';

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
  const { username } = useSessionContext();
  const params = useParams();
  const navigate = useNavigate();

  const [qnaItem, setQnAItem] = useState({});
  const [open, setOpen] = useState(false);

  const handleQnA = () => {
    navigate(`/circle/${params.circleName}/QnA`);
  };

  const handleDelete = () => {
    setOpen(true);
  };
  const handleEdit = () => {};

  useEffect(() => {
    if (isLoad) {
      axios
        .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/${params.id}`)
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
        <div className={styles.menu_wrapper}>
          <IoIosArrowBack className={styles.arrow} onClick={handleQnA} />
          <div className={styles.menu} onClick={handleQnA}>
            QnA
          </div>
          {qnaItem.author_username === username ? (
            <>
              <div className={styles.edit} onClick={handleEdit}>
                <button className={styles.edit_btn}>수정하기</button>
              </div>
              <div className={styles.delete} onClick={handleDelete}>
                <button className={styles.delete_btn}>삭제하기</button>
              </div>
            </>
          ) : null}
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
      <DeleteModal isOpen={open} setIsOpen={setOpen} circleId={circleId} curBoardId={curBoardId} type={'post'} />
    </div>
  );
};

export default QnAItem;
