import Modal from 'react-modal';
import styles from './QnAWrite.module.scss';

import './QnAWrite.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSessionContext } from '../../../../Context/SessionContext';
import TextLimit from '../../../TextLimit/TextLimit';

const QnAWrite = (props) => {
  const { isOpen, setIsOpen, circleId, curBoardId } = props;
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const { accessToken, refreshToken } = useSessionContext();

  const handlePostQnA = () => {
    console.log(title);
    console.log(contents);
    axios
      .post(
        `api/v1/circle/${circleId}/board/${curBoardId}/article/`,
        {
          title: title,
          content: contents,
          is_private: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        toast.success('질문을 등록하였습니다.');
        setTitle('');
        setContents('');
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal className={styles.qna_modal} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className={styles.title}>
        <input
          placeholder="제목을 입력하세요"
          className={styles.text}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={styles.title_limit}>
          <TextLimit cnt={title.length} limit={20} />
        </div>
      </div>
      <div className={styles.content_wrap}>
        <textarea
          className={styles.content}
          placeholder="내용을 입력해 주세요"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <div className={styles.util}>
        <div className={styles.content_limit}>
          <TextLimit cnt={contents.length} limit={1000} />
        </div>
        <div className={styles.write_wrap}>
          <button className={styles.write} onClick={handlePostQnA}>
            작성하기
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default QnAWrite;
