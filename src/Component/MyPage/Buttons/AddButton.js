import styles from './Buttons.module.scss';
import { HiPlus } from 'react-icons/hi';
const AddButton = () => {
  return (
    <>
      <button className={styles['add-button']}>
        <div className={styles.container}>
          <HiPlus className={styles.plus} />
        </div>
      </button>
    </>
  );
};

export default AddButton;
