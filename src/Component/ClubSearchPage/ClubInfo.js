import styles from './ClubSearchPage.module.scss';
import { useEffect } from 'react';

const getDDay = (due) => {
  const dueDate = new Date(due);
  const today = new Date();

  const diff = dueDate - today;

  const dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

  return dayDiff == 0 ? 'D-Day' : dayDiff < 0 ? `D+${-dayDiff}` : `D-${dayDiff}`;
};

const ClubInfo = ({ club }) => {
  return (
    <div className={styles.club}>
      <div className={styles['club-icon']}>
        <div className={styles['d-day']}>{getDDay(club.due)}</div>
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

export default ClubInfo;
