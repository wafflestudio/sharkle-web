import styles from './Reply.module.scss';
import dayjs from 'dayjs';

const Reply = (props) => {
  const { item } = props;

  //item.depth따라서 스타일 달라질 예정
  return (
    <div className={styles.reply_wrap}>
      {/* 아래 div가 depth따라서 조건부로 바뀜(padding)*/}
      <div className={item.id < 6 ? styles.reply_box1 : styles.reply_box2}>
        <div className={styles.author}>{item.author}</div>
        <div className={styles.reply}>
          <pre className={styles.content}>{item.content}</pre>
        </div>
        <div className={styles.info}>{dayjs(item.created_at).format('YYYY.MM.DD. HH:MM')}</div>
      </div>
    </div>
  );
};

export default Reply;
