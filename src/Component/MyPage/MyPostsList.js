import './MyPage.scss';
import { useState } from 'react';

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="info-content-posts-page">
      <nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : null}>
              {i + 1}
            </button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    </div>
  );
};

const PostPreviewForm = ({ post, idx }) => {
  return (
    <div className="post-preview">
      <div className="post-preview-panel">
        <div className="post-preview-num">{idx}.</div>
        <div className="post-preview-title">{post.title}</div>
        <div className="post-preview-answer">답변 {post.answerNum}</div>
        <div className="post-preview-date">{post.date}</div>
      </div>
    </div>
  );
};

const MyPostsList = ({ postList }) => {
  //Pagination
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit; //표시될 첫번째 항목

  return (
    <>
      <div className="info-content-posts-list">
        {postList.slice(offset, offset + limit).map((post, idx) => (
          <PostPreviewForm post={post} key={idx} idx={idx + 1 + offset} />
        ))}
      </div>
      <Pagination total={postList.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
};

export default MyPostsList;
