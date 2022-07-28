import styles from './CommentWrite.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';
import { useSessionContext } from '../../../../../../Context/SessionContext';
import LoginModal from '../../../../../LoginModal/LoginModal';

const CommentWrite = (props) => {
  const params = useParams();
  const { accessToken, isLogin } = useSessionContext();
  const { id, update, setUpdate, setRereply } = props;

  const [contents, setContents] = useState();
  const [openLogin, setOpenLogin] = useState(false);

  const handleComment = () => {
    if (isLogin) {
      axios
        .post(
          `api/v1/article/${params.id}/comment/?reply_to=${id}/`,
          {
            content: contents,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          toast.success('댓글을 등록하였습니다.');
          setContents('');
          setRereply(false);
          setUpdate(!update);
        })
        .catch((error) => {
          toast.error('등록을 실패하였습니다.');
          console.log(error);
        });
    } else {
      setOpenLogin(true);
    }
  };

  return (
    <div className={styles.box_wrap}>
      <div className={styles.box}>
        <textarea
          className={styles.comments}
          placeholder="내용을 입력해 주세요"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <div className={styles.btn_wrap}>
          <button className={styles.btn} onClick={handleComment}>
            등록
          </button>
        </div>
      </div>
      <LoginModal isOpen={openLogin} setIsOpen={setOpenLogin} />
    </div>
  );
};

export default CommentWrite;
