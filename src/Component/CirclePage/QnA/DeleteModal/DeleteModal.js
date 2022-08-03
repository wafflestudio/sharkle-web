import Modal from 'react-modal';
import styles from './DeleteModal.module.scss';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteModal = (props) => {
  const { isOpen, setIsOpen, circleId, curBoardId } = props;
  const params = useParams();
  const navigate = useNavigate();

  const handleCancle = () => {
    setIsOpen(false);
  };
  const handleDelete = () => {
    axios
      .delete(`api/v1/circle/${circleId}/board/${curBoardId}/article/${params.id}`)
      .then((response) => {
        toast.success('삭제했습니다.');
        navigate(`/circle/${params.circleName}/QnA/`);
      })
      .catch((error) => {
        toast.error('실패했습니다.');
      });
  };
  return (
    <Modal className={styles.delete_modal} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className={styles.title}>질문 글 삭제</div>
      <div className={styles.message}>정말로 삭제하시겠습니까?</div>
      <div className={styles.btn}>
        <button className={styles.cancle} onClick={handleCancle}>
          취소
        </button>
        <button className={styles.confirm} onClick={handleDelete}>
          확인
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
