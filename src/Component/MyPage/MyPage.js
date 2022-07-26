import styles from './MyPage.module.scss';
import { useEffect, useState } from 'react';
import ClubsList from './ClubsList/ClubsList';
import MyPostsList from './MyPostList/MyPostsList';
import AddButton from './Buttons/AddButton';
import InfoForm from './InfoForm/InfoForm';
import axios from 'axios';
import Header from '../Header/Header';
import { useNavigate } from 'react-router';
import { AiOutlinePushpin } from 'react-icons/ai';
import { useSessionContext } from '../../Context/SessionContext';
import { toast } from 'react-toastify';
import { BiEdit, BiSave } from 'react-icons/bi';
import EditModal from './EditModal';

const MyPage = () => {
  //dummy data

  const { id, email, setId, accessToken } = useSessionContext();
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

  /* TODO : 1. user_id 및 username 받아와서
     TODO : 2. 내 동아리 목록 불러와서 보여주기
     TODO : 3. 모달 띄워서 처리?
  */

  const [clubsList, setClubsList] = useState(dummyClubsList);
  const [userNickname, setUserNickname] = useState(dummyUserNickname);
  const [userEmail, setUserEmail] = useState(email);
  const [myPostList, setMyPostList] = useState(dummyMyPostList);

  const editEmail = () => {
    setUserEmail(userEmail);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editParam, setEditParam] = useState(); // 수정하려는 값 ( 닉네임 or 이메일 )

  const onEditClick = (key) => {
    setEditParam(key);
    setIsModalOpen(true);
  };

  // 알림설정중, 가입중, 관리중 탭 클릭 여부 (0, 1, 2)
  const [clicked, setClicked] = useState(0);
  const navigate = useNavigate();
  const onAddButtonClick = () => {
    navigate('/search');
    console.log('clicked');
  };

  return (
    <>
      <Header />
      <div
        onClick={() => {
          axios
            .get(`api/v1/account/my/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((response) => {
              localStorage.setItem('id', response.data.id);
              setId(response.data.id);
            })
            .catch((error) => {
              console.log(error);
            });
          console.log(id);
        }}
      >
        테스트 버튼
      </div>
      <div className={styles['my-page']}>
        <div className={styles.title}>마이페이지</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles['user-setting']}>
            <div className={styles.list}>
              <AiOutlinePushpin className={styles.pin} />
              <div className={styles.list}>프로필 설정</div>
            </div>
            <div className={styles.list}>
              <AiOutlinePushpin className={styles.pin} />
              <div className={styles.list}>알림 설정</div>
            </div>
            <div className={styles.list}>
              <AiOutlinePushpin className={styles.pin} />
              <div className={styles.list}>회원탈퇴</div>
            </div>
            <div className={styles.list}>
              <AiOutlinePushpin className={styles.pin} />
              <div className={styles.list}>커뮤니티</div>
            </div>
          </div>

          <div className={styles.clubs}>
            <div className={styles.modes}>
              <div className={clicked == 0 ? styles.clickmode : styles.mode} onClick={() => setClicked(0)}>
                알림 설정 중
              </div>
              <div className={clicked == 1 ? styles.clickmode : styles.mode} onClick={() => setClicked(1)}>
                가입 중
              </div>
              <div className={clicked == 2 ? styles.clickmode : styles.mode} onClick={() => setClicked(2)}>
                관리 중
              </div>
            </div>
            <div className={styles['content-upper']}>
              <ClubsList clubsList={clubsList} />
            </div>

            <div className={styles['content-under']}>
              <div className={styles.title}>내 정보</div>

              <div className={styles.alarm}>
                <div className={styles.key}>닉네임</div>
                <div className={styles.value}>{id} : user_id로 바꿔야 함</div>
                <div className={styles['button-wrapper']} onClick={() => onEditClick('user_id')}>
                  <div className={styles.button}>
                    {true ? <BiSave className={styles['edit-icon']} /> : <BiEdit className={styles['edit-icon']} />}
                  </div>
                </div>
              </div>

              <div className={styles.alarm}>
                <div className={styles.key}>이메일</div>
                <div className={styles.value}>{email}</div>
                <div className={styles['button-wrapper']} onClick={() => onEditClick('email')}>
                  <div className={styles.button}>
                    {true ? <BiSave className={styles['edit-icon']} /> : <BiEdit className={styles['edit-icon']} />}
                  </div>
                </div>
              </div>

              <div className={styles.alarm}>
                <div className={styles.key}>이메일로 알림 받기</div>
                <div className={styles.toggle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditModal
        _key={editParam}
        value={editParam == 'user_id' ? id : email}
        editValue={'수정할 함수'}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
};

export default MyPage;
