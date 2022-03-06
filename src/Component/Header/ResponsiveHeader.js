import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const ResponsiveHeader = ({ children, setIsAlertClicked }) => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 30);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  return (
    <header className={styles.area}>
      <div className={`${styles.wrap} ${hide ? styles.hide : null}`}>{children}</div>
    </header>
    // <header className={styles.area}>
    //   <children className={`${styles.wrap} ${hide ? styles.hide : null}`}></children>
    // </header>
  );
};

export default ResponsiveHeader;
