import './QnAItem.scss';

const QnAItem = ( {item} ) => {


    return (
        <div className="qna">
            <div className="qna-id">
                {item.id}.
            </div>
            <div className="qna-title">
                {item.title}
            </div>
            <div className="qna-wrap">
                <div className="qna-wrap-date">
                    {item.date}
                </div>
                <div className="qna-wrap-comment">
                    답변 {item.comment}
                </div>
            </div>
        </div>
    );
}

export default QnAItem;