import './QnAItem.scss';

const dummyItem = {
  id: 0,
  title: '타대생도 가입 가능한가요?',
  date: '2022.03.01',
  comment: 1,
  contents: '질문글 내용',
  reply: { user: '답글1', comment: '댓글댓글' },
};

const QnAItem = (props) => {
  const { setContentType } = props;

  return (
    <div className="qna-item">
      <div className="qna-item-id">{dummyItem.id}.</div>
      <div className="qna-item-title">{dummyItem.title}</div>
      <div className="qna-item-content">{dummyItem.contents}</div>
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
