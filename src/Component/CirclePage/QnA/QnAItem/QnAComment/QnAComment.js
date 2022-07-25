import styles from './QnAComment.module.scss';
import { useFunctionContext } from '../../../../../Functions/Functions';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSessionContext } from '../../../../../Context/SessionContext';
import { useParams } from 'react-router';
import Reply from './Reply/Reply';
import LoginModal from '../../../../LoginModal/LoginModal';

const QnAComment = (props) => {
  const { DummyComment } = useFunctionContext();
  const { accessToken, refreshToken, isLogin } = useSessionContext();
  const params = useParams();
  const { counts } = props;

  const [contents, setContents] = useState();
  const [reply, setReply] = useState([]);
  const [update, setUpdate] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleComment = () => {
    if (isLogin) {
      axios
        .post(
          `api/v1/article/${params.id}/comment/`,
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

  //login 아니어도 나중에 볼 수 있게 수정//
  useEffect(() => {
    axios
      .get(`api/v1/article/${params.id}/comment/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setReply(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  return (
    <div className={styles.comment_wrapper}>
      <div className={styles.comment_util}>
        <div className={styles.replynum}>답변 {counts}</div>
        <div className={styles.recent}>최신순</div>
        <div className={styles.upload}>등록순</div>
      </div>
      <div className={styles.content}>
        {reply.map((item) => (
          <Reply item={item} key={item.id} update={update} setUpdate={setUpdate} />
        ))}
      </div>
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
      </div>
      <LoginModal isOpen={openLogin} setIsOpen={setOpenLogin} />
    </div>
  );
};

export default QnAComment;
