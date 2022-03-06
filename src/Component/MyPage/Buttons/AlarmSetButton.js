import styles from './Buttons.module.scss';
const AlarmSetButton = ({ clicked, onClick }) => {
  //clicked 에는 알림을 구독중인지에 대한 state가 들어가야 함.
  return !clicked ? (
    <div className={styles.alarm} onClick={onClick}>
      <button className={styles.button}>
        <div className={styles.circle}></div>
      </button>
    </div>
  ) : (
    <div className={styles['clicked-alarm']} onClick={onClick}>
      <button className={styles.button}>
        <div className={styles.circle}></div>
      </button>
    </div>
  );
};

export default AlarmSetButton;
