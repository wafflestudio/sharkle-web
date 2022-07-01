import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Recruiting.scss';
import { useState } from 'react';

const Recruiting = () => {
  return (
    <div className="content-container">
      <div className="content-container-bar">
        <div className="content-container-bar-title">
          <div className="content-container-bar-title-title">Recruiting</div>
        </div>
        <div className="content-container-bar-sort"></div>
      </div>
      <div className="content-container-qna"></div>
    </div>
  );
};

export default Recruiting;
