import { useState } from 'react';
import { BiEdit, BiSave } from 'react-icons/bi';
import AlarmSetButton from './AlarmSetButton';
import './InfoForm.scss';

const InfoForm = ({ userInfo, setUserInfo, infoType, useAlarm = true }) => {
  const [buttonClicked, setButtonClicked] = useState(true);
  const onButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };
  const [editClicked, setEditClicked] = useState(false);

  const [editInput, setEditInput] = useState(userInfo);

  const onEditClick = () => {
    if (editClicked) {
      setUserInfo(editInput);
    }
    setEditClicked(!editClicked);
  };
  const onEditInputChange = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <div className="info-content-profile-form-wrapper">
      <div className="info-content-profile-form">
        <div className="info-content-profile-key">{infoType}</div>
        <div className="info-content-profile-wrapper">
          {editClicked ? (
            <input className="info-content-profile-edit" value={editInput} onChange={onEditInputChange} />
          ) : (
            <div className="info-content-profile-value">{userInfo}</div>
          )}
        </div>

        <div className="edit-button-wrapper" onClick={onEditClick}>
          <div className="edit-button">
            {editClicked ? <BiSave className="edit-icon" /> : <BiEdit className="edit-icon" />}
          </div>
        </div>
      </div>
      {useAlarm ? <AlarmSetButton clicked={buttonClicked} onClick={onButtonClick} /> : null}
    </div>
  );
};

export default InfoForm;
