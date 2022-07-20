import './QnAItem.scss';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createRenderer } from 'react-dom/test-utils';

const dummyItem = {
  id: 0,
  title: '타대생도 가입 가능한가요?',
  date: '2022.03.01',
  comment: 1,
  contents: '질문글 내용',
  reply: { user: '답글1', comment: '댓글댓글' },
};

const QnAItem = (props) => {
  const { circleId, curBoardId } = props;
  const params = useParams();

  const [qnaItem, setQnAItem] = useState({});

  useEffect(() => {
    axios
      .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setQnAItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="qna-item">
      <div className="qna-item-id">{qnaItem.id}.</div>
      <div className="qna-item-title">{qnaItem.title}</div>
      <pre className="qna-item-content">{qnaItem.content}</pre>
      <div className="qna-item-reply">
        <div>{dummyItem.reply.user}</div>
        <div>{dummyItem.reply.comment}</div>
      </div>
      <div className="qna-item-write">
        <div>ㅁㄴㅇㄹ</div>
        <div>답변을 남겨보세요</div>
      </div>
    </div>
  );
};

export default QnAItem;
