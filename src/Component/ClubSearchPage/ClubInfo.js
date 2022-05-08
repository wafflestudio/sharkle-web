import styles from './ClubSearchPage.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ClubInfo = ({ club }) => {
  const navigate = useNavigate();

  const handleClub = () => {
    console.log(club);
    navigate(`/circle/${club.name}/소개`);
  };

  return (
    <div className={styles.club}>
      <div className={styles['club-icon']} onClick={handleClub}></div>
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
