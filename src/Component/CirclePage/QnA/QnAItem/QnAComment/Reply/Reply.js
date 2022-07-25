import styles from './Reply.module.scss';
import dayjs from 'dayjs';
import { useState } from 'react';
import CommentWrite from '../CommentWrite/CommentWrite';

const Reply = (props) => {
  const { item, update, setUpdate } = props;
  const [rereply, setRereply] = useState(false);

  const handleRereply = () => {
    setRereply(!rereply);
  };

  //item.depth따라서 스타일 달라질 예정
  return (
    <div className={styles.reply_wrap}>
      {/* 아래 div가 depth따라서 조건부로 바뀜(padding)*/}
      <div
        className={
          item.depth === 0 ? styles.reply_depth0 : item.depth === 1 ? styles.reply_depth1 : styles.reply_depth2
        }
      >
        <div className={styles.author}>{item.author}</div>
        <div className={styles.reply}>
          <pre className={styles.content}>{item.content}</pre>
        </div>
        <div className={styles.info}>
          <div>{dayjs(item.created_at).format('YYYY.MM.DD. HH:MM')}</div>
          <div className={styles.rereply} onClick={handleRereply}>
            답글 달기
          </div>
        </div>
        {rereply ? <CommentWrite id={item.id} update={update} setUpdate={setUpdate} setRereply={setRereply} /> : null}
      </div>
    </div>
  );
};

export default Reply;
