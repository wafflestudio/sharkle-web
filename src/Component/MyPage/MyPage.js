import './MyPage.scss';
import { useState } from 'react';
import ClubButton from './ClubButton';

const InfoForm = ({ title, info }) => {
  return (
    <div className="info-form">
      <div style={{ fontWeight: 'bold', width: '20%', textAlign: 'center' }}>{title}</div>
      <div style={{ width: '80%', textAlign: 'center' }}>{info}</div>
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
const MyPage = () => {
  //dummy data
  const dummyClubsList = [
    '동아리1',
    '동아리2',
    '동아리3',
    '동아리4',
    '동아리5',
    '동아리6',
    '동아리7',
    '동아리8',
    '동아리9',
  ];
  const dummyUserInfo = { nickname: '김와플', email: 'sharkle@wafflestudio.com' };
  const dummyMyPostList = [
    { title: '게시글1', date: '2022-02-21', answerNum: 1 },
    { title: '게시글2', date: '2022-02-21', answerNum: 2 },
    { title: '게시글3', date: '2022-02-21', answerNum: 3 },
    { title: '게시글4', date: '2022-02-21', answerNum: 4 },
  ];

  // states

  const [clubsList, setClubsList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [myPostList, setMyPostList] = useState([]);

  return (
    <div
      style={{
        backgroundColor: '#F7F7F7',
        width: '100wh',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'scroll',
      }}
    >
      <div className="container">
        <div className="clubs">
          <div className="clubs-title">
            <div className="clubs-title-inner">알림설정한 동아리 목록</div>
          </div>
          <div className="clubs-content">
            <div className="clubs-content-add">
              <ClubButton />
            </div>
            <div className="clubs-content-lists">
              <ClubButton />
              <ClubButton />
              <ClubButton />
              <ClubButton />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info-title">
            <div className="info-title-inner">내 정보</div>
          </div>
          <div className="info-content">
            <div className="info-content-profile">
              <InfoForm title="닉네임" info={dummyUserInfo.nickname}></InfoForm>
              <InfoForm title="이메일" info={dummyUserInfo.email}></InfoForm>
            </div>
            <div className="info-content-vline"></div>

            <div className="info-content-posts">
              <div className="info-content-posts-title">내 게시글</div>
              <div className="info-content-posts-list">
                <PostPreviewForm post={dummyMyPostList[0]} idx={1} />
                <PostPreviewForm post={dummyMyPostList[1]} idx={2} />
                <PostPreviewForm post={dummyMyPostList[2]} idx={3} />
                <PostPreviewForm post={dummyMyPostList[3]} idx={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
