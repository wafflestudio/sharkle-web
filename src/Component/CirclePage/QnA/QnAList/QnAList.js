import styles from './QnAList.module.scss';

const QnAList = ({ item }) => {
  return (
    <div className={styles.list_wrapper}>
      <div className={styles.list_id}>{item.id}</div>
      <div className={styles.list_title_wrap}>
        <div className={styles.list_title}>{item.title}</div>
        <div className={styles.list_comment}>답변 {item.comment}</div>
      </div>
      <div className={styles.list_click}>{item.click}</div>
      <div className={styles.list_writer}>{item.writer}</div>
      <div className={styles.list_date}>{item.date}</div>
    </div>
  );
};

export default QnAList;
