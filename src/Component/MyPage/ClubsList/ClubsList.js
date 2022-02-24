import MyClub from './MyClub';
import { useRef, useState } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const ClubsList = ({ clubsList }) => {
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

  const onNextClick = () => {
    const toGo = 785;
    scrollRef.current.scrollLeft += toGo;
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

  return (
    <div
      className="clubs-content-lists"
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {clubsList.map((club, idx) => (
        <MyClub club={club} key={idx} />
      ))}
      <button className="clubs-content-lists-more" onClick={onNextClick}>
        {clubsList.length > 4 ? <AiOutlineDoubleRight className="arrow" /> : null}
      </button>
    </div>
  );
};

export default ClubsList;
