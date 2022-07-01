import { BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
// import './Recruiting.scss';
import { useState } from 'react';
import styles from '../CirclePage.module.scss';

const Recruiting = () => {
  return (
    <div className={styles['content-container']}>
      <div className={styles['content-container-bar']}>
        <div className={styles['content-container-bar-title']}>
          <div className={styles['content-container-bar-title-title']}>Recruiting</div>
        </div>
        <div className={styles['content-container-bar-sort']}></div>
      </div>
      <div className={styles['content-container-qna']}></div>
    </div>
  );
};

export default Recruiting;
