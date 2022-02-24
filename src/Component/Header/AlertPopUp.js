import { AiOutlineCloseCircle } from 'react-icons/ai';

const AlertBox = ({ alert }) => {
  return (
    <div className="alert-box">
      {alert.isNew ? <div className="new" /> : <div className="old" />}
      <div className="alert-title">{alert.title}</div>
      <div className="when">3시간전</div>
    </div>
  );
};
const AlertPopUp = ({ alerts, isAlertClicked, setIsAlertClicked }) => {
  const close = () => {
    setIsAlertClicked(!isAlertClicked);
  };

  return (
    <div className="pop-up">
      <div className="header">
        <div className="close-button" onClick={close}>
          <AiOutlineCloseCircle className="icon" onClick={close} />
        </div>
      </div>
      <div className="alert-list">
        {alerts.map((alert, idx) => (
          <AlertBox alert={alert} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AlertPopUp;
