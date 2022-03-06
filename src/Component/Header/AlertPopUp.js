import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './Header.module.scss';

const AlertBox = ({ alert }) => {
  return (
    <div className={styles['alert-box']}>
      {alert.isNew ? <div className={styles.new} /> : <div className={styles.old} />}
      <div className={styles['alert-title']}>{alert.title}</div>
      <div className={styles.when}>3시간전</div>
    </div>
  );
};
const AlertPopUp = ({ alerts, isAlertClicked, setIsAlertClicked }) => {
  const close = () => {
    setIsAlertClicked(!isAlertClicked);
  };

  return (
    <div className={styles['pop-up']}>
      <div className={styles['pop-up-header']}>
        <div className={styles['close-button']} onClick={close}>
          <AiOutlineCloseCircle className={styles.icon} onClick={close} />
        </div>
      </div>
      <div className={styles['alert-list']}>
        {alerts.map((alert, idx) => (
          <AlertBox alert={alert} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AlertPopUp;
