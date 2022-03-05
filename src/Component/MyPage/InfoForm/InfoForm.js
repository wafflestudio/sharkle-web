import { useState } from 'react';
import { BiEdit, BiSave } from 'react-icons/bi';
import AlarmSetButton from '../Buttons/AlarmSetButton';
import styles from './InfoForm.module.scss';

const InfoForm = ({ userInfo, setUserInfo, infoType, useAlarm = true }) => {
  const [buttonClicked, setButtonClicked] = useState(true);
  const onButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };
  const [editClicked, setEditClicked] = useState(false);

  const [editInput, setEditInput] = useState(userInfo);

  const onEditClick = () => {
    if (editClicked) {
      setUserInfo(editInput);
    }
    setEditClicked(!editClicked);
  };
  const onEditInputChange = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <div className={styles['form-wrapper']}>
      <div className={styles.form}>
        <div className={styles.key}>{infoType}</div>
        <div className={styles.wrapper}>
          {editClicked ? (
            <input className={styles} value={editInput} onChange={onEditInputChange} />
          ) : (
            <div className={styles.value}>{userInfo}</div>
          )}
        </div>

        <div className={styles['button-wrapper']} onClick={onEditClick}>
          <div className={styles.button}>
            {editClicked ? <BiSave className={styles['edit-icon']} /> : <BiEdit className={styles['edit-icon']} />}
          </div>
        </div>
      </div>
      {useAlarm ? <AlarmSetButton clicked={buttonClicked} onClick={onButtonClick} /> : null}
    </div>
  );
};

export default InfoForm;
