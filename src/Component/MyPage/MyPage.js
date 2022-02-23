import './MyPage.scss';
import { useRef, useState } from 'react';
import ClubButton from './ClubButton';
import AlarmSetButton from './AlarmSetButton';
import ClubsList from './ClubsList';
import MyPostsList from './MyPostsList';
import { AiOutlinePlus } from 'react-icons/ai';
import AddButton from './AddButton';

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

const MyPage = () => {
  //dummy data

  const dummyUserInfo = { nickname: '김와플', email: 'sharkle@wafflestudio.com' };
  const dummyMyPostList = [
    { title: '게시글1', date: '2022-02-21', answerNum: 1 },
    { title: '게시글2', date: '2022-02-21', answerNum: 2 },
    { title: '게시글3', date: '2022-02-21', answerNum: 3 },
    { title: '게시글4', date: '2022-02-21', answerNum: 4 },
    { title: '게시글5', date: '2022-02-21', answerNum: 5 },
    { title: '게시글6', date: '2022-02-21', answerNum: 6 },
    { title: '게시글7', date: '2022-02-21', answerNum: 7 },
    { title: '게시글8', date: '2022-02-21', answerNum: 8 },
    { title: '게시글9', date: '2022-02-21', answerNum: 9 },
    { title: '게시글10', date: '2022-02-21', answerNum: 10 },
    { title: '게시글11', date: '2022-02-21', answerNum: 11 },
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
    <div className="my-page">
      <div className="container">
        <div className="clubs">
          <div className="clubs-title">
            <div className="clubs-title-inner">알림설정한 동아리 목록</div>
          </div>
          <div className="clubs-content">
            <div className="clubs-content-add">
              <div className="clubs-content-add-inner">
                <AddButton />
              </div>
              <div className="clubs-content-add-description">동아리 추가하기</div>
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
              <MyPostsList postList={dummyMyPostList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
