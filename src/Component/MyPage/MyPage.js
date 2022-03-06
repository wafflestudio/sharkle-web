import styles from './MyPage.module.scss';
import { useEffect, useState } from 'react';
import ClubsList from './ClubsList/ClubsList';
import MyPostsList from './MyPostList/MyPostsList';
import AddButton from './Buttons/AddButton';
import InfoForm from './InfoForm/InfoForm';
import axios from 'axios';

const MyPage = () => {
  //dummy data

  const dummyUserNickname = '김와플';
  const dummyUserEmail = 'sharkle@ws.com';
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

  const [clubsList, setClubsList] = useState(dummyClubsList);
  const [userNickname, setUserNickname] = useState(dummyUserNickname);
  const [userEmail, setUserEmail] = useState(dummyUserEmail);
  const [myPostList, setMyPostList] = useState(dummyMyPostList);

  return (
    <div className={styles['my-page']}>
      <div className={styles.container}>
        <div className={styles.clubs}>
          <div className={styles.title}>
            <div className={styles.inner}>알림설정한 동아리 목록</div>
          </div>
          <div className={styles.content}>
            <div className={styles.add}>
              <div className={styles.inner}>
                <AddButton />
              </div>
              <div className={styles.description}>동아리 추가하기</div>
            </div>
            <ClubsList clubsList={clubsList} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <div className={styles.inner}>내 정보</div>
          </div>
          <div className={styles.content}>
            <div className={styles.profile}>
              <InfoForm
                userInfo={userNickname}
                setUserInfo={setUserNickname}
                infoType={'닉네임'}
                useAlarm={false}
              ></InfoForm>
              <InfoForm userInfo={userEmail} setUserInfo={setUserEmail} infoType={'이메일'} useAlarm={true}></InfoForm>
            </div>
            <div className={styles.vline}></div>

            <div className={styles.posts}>
              <div className={styles.title}>내 게시글</div>
              <MyPostsList postList={myPostList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
