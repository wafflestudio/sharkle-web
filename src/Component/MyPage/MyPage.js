import './MyPage.scss';
import { useRef, useState } from 'react';
import ClubButton from './ClubButton';
import MyClub from './MyClub';
import myClub from './MyClub';
import AlarmSetButton from './AlarmSetButton';
import ClubsList from './ClubsList';

const InfoForm = ({ title, info, useAlarm = true }) => {
  const [clicked, setClicked] = useState(true);
  const onClick = () => {
    console.log('clicked');
    setClicked(!clicked);
  };
  return (
    <div className="info-content-profile-form-wrapper">
      <div className="info-content-profile-form">
        <div style={{ fontWeight: 'bold', width: '20%', textAlign: 'center' }}>{title}</div>
        <div style={{ width: '80%', textAlign: 'center' }}>{info}</div>
      </div>
      {useAlarm ? <AlarmSetButton clicked={clicked} onClick={onClick} /> : null}
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

  const dummyUserInfo = { nickname: '김와플', email: 'sharkle@wafflestudio.com' };
  const dummyMyPostList = [
    { title: '게시글1', date: '2022-02-21', answerNum: 1 },
    { title: '게시글2', date: '2022-02-21', answerNum: 2 },
    { title: '게시글3', date: '2022-02-21', answerNum: 3 },
    { title: '게시글4', date: '2022-02-21', answerNum: 4 },
  ];

  const dummyClubsList = [
    {
      name: '동아리1',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag22222', 'tag333'],
    },
    {
      name: '동아리2',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag222', 'tag3'],
    },
    {
      name: '동아리3',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag11111', 'tag222222', 'tag33333'],
    },
    {
      name: '동아리4',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1111111111111', 'tag222', 'tag333'],
    },
    {
      name: '동아리5',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리6',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리7',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리8',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리9',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리10',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리11',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      name: '동아리12',
      img: 'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128',
      tags: ['tag1', 'tag2', 'tag3'],
    },
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
              <div className="clubs-content-add-inner">
                <ClubButton img={'https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=128'} />
              </div>
            </div>
            <ClubsList clubsList={dummyClubsList} />
          </div>
        </div>
        <div className="info">
          <div className="info-title">
            <div className="info-title-inner">내 정보</div>
          </div>
          <div className="info-content">
            <div className="info-content-profile">
              <InfoForm title="닉네임" info={dummyUserInfo.nickname} useAlarm={false}></InfoForm>
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
