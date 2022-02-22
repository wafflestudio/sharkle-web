const AlarmSetButton = ({ clicked, onClick }) => {
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
