import styles from './ClubSearchPage.module.scss';
import { useEffect } from 'react';

const ClubInfo = ({ club }) => {
  return (
    <div className={styles.club}>
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

export default ClubInfo;
