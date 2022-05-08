import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Info.scss';
import { useState } from 'react';

const Info = () => {
  //useEffect로 소개글 있으면 받아오기

  const [loginId, setLoginId] = useState();
  const [insert, setInsert] = useState(false);
  const [shorts, setShorts] = useState('작성된 소개가 없습니다.');
  const [editShorts, setEditShorts] = useState(shorts);

  const insertMode = () => {
    setInsert(true);
  };
  const saveMode = () => {
    //보낸다음에 res로 다시 받아서 보여주기
    setShorts(editShorts);
    setInsert(false);
  };
  const cancleMode = () => {
    setEditShorts(shorts);
    setInsert(false);
  };

  return (
    <div className="content-container">
      <div className="content-container-bar">
        <div className="content-container-bar-title">
          <div className="content-container-bar-title-title">소개</div>
        </div>
      </div>
      <div className="content-container-qna">
        {insert ? (
          <div>
            <input value={editShorts} onChange={(e) => setEditShorts(e.target.value)} />
            <button onClick={saveMode}>보내기</button>
            <button onClick={cancleMode}>취소하기</button>
          </div>
        ) : (
          <div>
            <div>{shorts}</div>
            <button onClick={insertMode}>수정하기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
