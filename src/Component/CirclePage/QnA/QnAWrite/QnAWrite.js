import Modal from 'react-modal';
import styles from './QnAWrite.module.scss';

import './QnAWrite.module.scss';

const QnAWrite = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Modal className={styles.qna_modal} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className={styles.title}>
        <input placeholder="제목을 입력하세요" className={styles.text}></input>
      </div>
      <div className={styles.content_wrap}>
        <textarea className={styles.content} placeholder="내용을 입력해 주세요"></textarea>
      </div>
      <div className={styles.util}>
        <div className={styles.write_wrap}>
          <button className={styles.write}>작성하기</button>
        </div>
      </div>
    </Modal>
  );
};

export default QnAWrite;
