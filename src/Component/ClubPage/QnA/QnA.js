import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import './QnA.scss';
import QnAItem from './QnAItem/QnAItem';
import { useState } from 'react';
import { useSessionContext } from '../../../Context/SessionContext';
import LoginModal from '../../LoginModal/LoginModal';
import Recruiting from '../Recruiting/Recruiting';
import QnAWrite from './QnAWrite/QnAWrite';

const QnA = () => {
  const { isLogin, handleLogout } = useSessionContext();

  const [search, setSearch] = useState('');
  const [contentType, setContentType] = useState('list');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const dummyQnA = [
    { id: 0, title: '타대생도 가입 가능한가요?', date: '2022.03.01', comment: 1 },
    { id: 1, title: '고학번도 가입 가능한가요?', date: '2022.03.01', comment: 1 },
    { id: 2, title: '학기중에 많이 힘든가요?', date: '2022.03.01', comment: 3 },
    { id: 3, title: '성비가 어떻게되나요?', date: '2022.03.01', comment: 5 },
    { id: 4, title: '많이 힘든가요?', date: '2022.03.01', comment: 0 },
    { id: 5, title: '처음하는사람도 괜찮나요?', date: '2022.03.01', comment: 2 },
    { id: 6, title: '활동비가 있나요?', date: '2022.03.01', comment: 1 },
    { id: 7, title: '질문질문', date: '2022.03.01', comment: 8 },
    { id: 8, title: '이것저것 상세한 질문글', date: '2022.03.01', comment: 10 },
    { id: 9, title: '이것저것 상세한 질문글', date: '2022.03.01', comment: 10 },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleWrite = () => {
    if (isLogin) {
      window.alert('아무튼 작성페이지');
      setContentType('write');
    } else {
      setIsLoginOpen(true);
    }
  };

  return (
    <div className="content-container">
      <div className="content-container-bar">
        <div className="content-container-bar-title">
          <BsPinAngle className="content-container-bar-title-icon" />
          <div className="content-container-bar-title-title">Q&A</div>
        </div>
        <div className="content-container-bar-sort">
          <div1>최신 순</div1>
          <div2>오래된 순</div2>
          <div3>댓글 수</div3>
          <div4>
            <span>ㄱㄴㄷ 수</span>
          </div4>
        </div>
      </div>
      <div className="content-container-search">
        <div className="content-container-search-title">검색</div>
        <input className="content-container-search-input" value={search} onChange={handleSearch} />
        <BiSearchAlt2 className="content-container-search-icon" />
      </div>
      <div className="content-container-qna">
        {contentType === 'list' && dummyQnA.map((item) => <QnAItem item={item} key={item.id} />)}
        {contentType === 'write' && <QnAWrite />}
      </div>
      <div className="content-container-util">
        <div className="content-container-util-wrap">
          <button className="content-container-util-wrap-write" onClick={handleWrite}>
            작성하기
          </button>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </div>
  );
};

export default QnA;
