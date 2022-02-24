import './Buttons.scss';
const AlarmSetButton = ({ clicked, onClick }) => {
  //clicked 에는 알림을 구독중인지에 대한 state가 들어가야 함.
  return !clicked ? (
    <div className="alarm" onClick={onClick}>
      <button className="alarm-button">
        <div className="alarm-button-circle"></div>
      </button>
    </div>
  ) : (
    <div className="clicked-alarm" onClick={onClick}>
      <button className="clicked-alarm-button">
        <div className="clicked-alarm-button-circle"></div>
      </button>
    </div>
  );
};

export default AlarmSetButton;
