import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';
import axios from 'axios';
import styles from './EditModal.module.scss';
import { toast } from 'react-toastify';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLockAlt } from 'react-icons/bi';
import { useSessionContext } from '../../Context/SessionContext';
import { GiSharkFin } from 'react-icons/gi';

const EditModal = (props) => {
  const navigate = useNavigate();

  const { _key, value, editValue, isOpen, setIsOpen } = props;

  const { handleLogin, handleLogout, accessToken } = useSessionContext();

  const [input, setInput] = useState(value);
  useEffect(() => {
    setInput(value);
  }, [isOpen]);

  Modal.setAppElement('#root');

  const onCloseModal = () => {
    setInput('');
    setIsOpen(false);
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
    }
  };

  return (
    <Modal className={styles['login-modal']} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className={styles.title}>
        <GiSharkFin className={styles.icon} />
        {_key} 수정
      </div>
      <div className={styles.container}>
        <div className={styles.id}>
          <BsFillPersonFill className={styles.icon} />
          <input
            className={styles.input}
            placeholder="아이디"
            onKeyPress={onKeyPress}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>

        <div className={styles.button}>
          <button className={styles.login} onClick={() => {}}>
            {' '}
            수정
          </button>
          <button className={styles.register} onClick={onCloseModal}>
            {' '}
            취소
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
