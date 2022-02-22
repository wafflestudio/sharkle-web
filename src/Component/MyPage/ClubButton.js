import './MyPage.scss';
const ClubButton = ({ img }) => {
  return (
    <button className="club-button">
      <div className="club-button-container">
        <img className="club-button-container-img" src={img}></img>
      </div>
    </button>
  );
};

export default ClubButton;
