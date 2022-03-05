import ClubButton from './ClubButton';
import styles from './ClubsList.module.scss';
const MyClub = ({ club }) => {
  return (
    <div className={styles.club}>
      <ClubButton img={club.img} />
      <div className={styles.name}>{club.name}</div>
      <div className={styles.tags}>
        {club.tags.map((tag, idx) => (
          <div className={styles.tag} key={idx}>
            <span className={styles['tag-text']}>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClub;
