import styles from './QnAList.module.scss';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router';

const QnAList = ({ item }) => {
  const navigate = useNavigate();
  const params = useParams();
  const handleQnAItem = () => {
    navigate(`/circle/${params.circleName}/QnA/${item.id}`);
  };
  return (
    <div className={styles.list_wrapper} onClick={handleQnAItem}>
      <div className={styles.list_id}>{item.id}</div>
      <div className={styles.list_title_wrap}>
        <div className={styles.list_title}>{item.title}</div>
        <div className={styles.list_comment}>답변 {item.comment}</div>
      </div>
      <div className={styles.list_click}>{item.click}</div>
      <div className={styles.list_writer}>{item.author}</div>
      <div className={styles.list_date}>{dayjs(item.created_at).format('YY. MM. DD')}</div>
    </div>
  );
};

export default QnAList;
