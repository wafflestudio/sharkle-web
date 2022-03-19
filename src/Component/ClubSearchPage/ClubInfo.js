import styles from './ClubSearchPage.module.scss';

const ClubInfo = () => {
  return (
    <div className={styles.club}>
      <div className={styles['club-icon']}></div>
      <div className={styles['club-name']}>동아리 이름</div>
      <div className={styles.tags}>
        <div className={styles.tag}>#태그</div>
        <div className={styles.tag}>#태그태그</div>
        <div className={styles.tag}>#태그태</div>
        <div className={styles.tag}>#태그</div>
      </div>
    </div>
  );
};

export default ClubInfo;
