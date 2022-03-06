import styles from './ClubsList.module.scss';
const ClubButton = ({ img }) => {
  return (
    <button className={styles.button}>
      <div className={styles.container}>
        <img className={styles.img} src={img}></img>
      </div>
    </button>
  );
};

export default ClubButton;
