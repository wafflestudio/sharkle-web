import { useRef, useState } from 'react';
import styles from './ClubSearchPage.module.scss';

const SearchPageHeader = ({ typePicked, setTypePicked, types, setTypes, onClubSearch }) => {
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 5;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const onTypeClick = (id) => {
    //if (typePicked == id) {
    //  setTypePicked('');
    setTypePicked(id);
    setTypes(types.map((type) => (type.id === id ? { ...type, picked: true } : { ...type, picked: false })));
  };

  return (
    <div
      className={styles['header-wrapper']}
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      <div className={styles.header}>
        {/*<div*/}
        {/*  className={styles.select}*/}
        {/*  style={{ color: '#000000' }}*/}
        {/*  onClick={() => {*/}
        {/*    onTypeClick(typePicked);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  전체*/}
        {/*</div>*/}
        {types.map((type) => (
          <div
            className={styles.select}
            style={{ color: type.picked ? '#FFFFFF' : null, backgroundColor: type.picked ? '#538DFF' : '#FFFFFF' }}
            onClick={() => {
              onTypeClick(type.id);
              onClubSearch(type.id);
            }}
          >
            {type.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPageHeader;
