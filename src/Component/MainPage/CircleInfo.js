import styles from './MainPage.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const CircleInfo = ({ club, key }) => {
  const navigate = useNavigate();

  const moveToCirclePage = () => {
    navigate('/circle/' + club.id);
  };

  return (
    <div className={styles.club} onClick={moveToCirclePage}>
      <div className={styles['club-icon']}>
        <div className={styles['d-day']}>D-16</div>
      </div>
      <div className={styles['club-name']}>{club.name}</div>
      <div className={styles.tags}>
        {club.tag.split(' ').map((tag) => (
          <div className={styles.tag}>{tag}</div>
        ))}
        {/*<div className={styles.tag}>#{club.tag}</div>*/}
        {/*<div className={styles.tag}>#태그태그</div>*/}
        {/*<div className={styles.tag}>#태그태</div>*/}
        {/*<div className={styles.tag}>#태그</div>*/}
      </div>
    </div>
  );
};

export default CircleInfo;
