import './Buttons.scss';
import { HiPlus } from 'react-icons/hi';
const AddButton = () => {
  return (
    <>
      <button className="add-button">
        <div className="add-button-container">
          <HiPlus className="add-button-plus" />
        </div>
      </button>
    </>
  );
};

export default AddButton;
