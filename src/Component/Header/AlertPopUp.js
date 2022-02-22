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
const AlertPopUp = ({ alerts }) => {
  return (
    <div className="pop-up">
      <div className="header">
        <div className="close-button">
          <AiOutlineCloseCircle className="icon" />
        </div>
      </div>
      <div className="alert-list">
        {/*<div className="alert-box">*/}
        {/*  <div className="is-new"></div>*/}
        {/*  <div className="alert-title">[와플 스튜디오123]에 새 공지사항이 올라왔어요!</div>*/}
        {/*  <div className="when">몇시간전</div>*/}
        {/*</div>*/}
        {/*<div className="alert-box">*/}
        {/*  <div className="is-new"></div>*/}
        {/*  <div className="alert-title">[와플 스튜디오123]에 새 공지사항이 올라왔어요!</div>*/}
        {/*  <div className="when">몇시간전</div>*/}
        {/*</div>*/}
        {/*<div className="alert-box">*/}
        {/*  <div className="is-new"></div>*/}
        {/*  <div className="alert-title">[와플 스튜디오123]에 새 공지사항이 올라왔어요!</div>*/}
        {/*  <div className="when">몇시간전</div>*/}
        {/*</div>*/}

        {alerts.map((alert, idx) => (
          <AlertBox alert={alert} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AlertPopUp;
