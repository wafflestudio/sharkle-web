import Modal from 'react-modal';
import styles from './DeleteModal.module.scss';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSessionContext } from '../../../../Context/SessionContext';

const DeleteModal = (props) => {
  const { isOpen, setIsOpen, circleId, curBoardId, commentId, type, update, setUpdate } = props;
  const { accessToken } = useSessionContext();
  const params = useParams();
  const navigate = useNavigate();

  const handleCancle = () => {
    setIsOpen(false);
  };
  const handleDelete = () => {
    if (type === 'post') {
      axios
        .delete(`api/v1/circle/${circleId}/board/${curBoardId}/article/${params.id}`)
        .then((response) => {
          toast.success('삭제했습니다.');
          navigate(`/circle/${params.circleName}/QnA/`);
        })
        .catch((error) => {
          toast.error('실패했습니다.');
          setIsOpen(false);
        });
    }
    if (type === 'reply') {
      axios
        .delete(`api/v1/article/${params.id}/comment/${commentId}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          toast.success('삭제했습니다.');
          navigate(`/circle/${params.circleName}/QnA/${params.id}`);
          setUpdate(!update);
          setIsOpen(false);
        })
        .catch((error) => {
          toast.error('실패했습니다.');
          setIsOpen(false);
        });
    }
  };
  return (
    <Modal className={styles.delete_modal} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <div className={styles.title}>{type === 'post' ? '질문' : type == 'reply' ? '댓글' : ''} 삭제</div>
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
