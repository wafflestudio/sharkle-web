import styles from './ClubSearchPage.module.scss';
import Header from '../Header/Header';
import { MdOutlineSportsBaseball } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import ClubInfo from './ClubInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ClubSearchPage = () => {
  const [clubs, setClubs] = useState([]);
  const [searcher, setSearcher] = useState('');
  const numOfType = 11;
  const [typePicked, setTypePicked] = useState('');
  const [types, setTypes] = useState([
    { id: 0, picked: false, title: '연합' },
    { id: 1, picked: false, title: '중앙' },
    { id: 2, picked: false, title: '단과대' },
    { id: 3, picked: false, title: '과' },
    { id: 4, picked: false, title: '기타' },
    { id: 5, picked: false, title: '학술/매체' },
    { id: 6, picked: false, title: '연행/예술' },
    { id: 7, picked: false, title: '취미/교양' },
    { id: 8, picked: false, title: '무예/운동' },
    { id: 9, picked: false, title: '인권/봉사' },
    { id: 10, picked: false, title: '종교' },
  ]);

  const onTypeClick = (id) => {
    if (typePicked == id) {
      setTypePicked('');
    } else setTypePicked(id);
    setTypes(types.map((type) => (type.id === id ? { ...type, picked: !type.picked } : { ...type, picked: false })));
  };
  const onInputChange = (e) => {
    setSearcher(e.target.value);
  };
  useEffect(() => {
    axios
      .get(`api/v1/circle`)
      .then((response) => {
        console.log(response.data.results);
        setClubs(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className={styles['header-wrapper']}>
        <div className={styles.header}>
          <div className={styles.select} style={{ color: '#000000' }} onClick={() => onTypeClick(typePicked)}>
            전체
          </div>
          {types.map((type) => (
            <div
              className={styles.select}
              style={{ color: type.picked ? '#538DFF' : null }}
              onClick={() => onTypeClick(type.id)}
            >
              {type.title}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.categories}>
          <div className={styles.category}>
            <MdOutlineSportsBaseball className={styles.icon} />
            <div>전체</div>
          </div>
          {/*<div className={styles.category}>*/}
          {/*  <MdOutlineSportsBaseball className={styles.icon} />*/}
          {/*  <div>연합</div>*/}
          {/*</div>*/}
          {/*<div className={styles.category}>*/}
          {/*  <MdOutlineSportsBaseball className={styles.icon} />*/}
          {/*  <div>중앙</div>*/}
          {/*</div>*/}
          {/*<div className={styles.category}>*/}
          {/*  <MdOutlineSportsBaseball className={styles.icon} />*/}
          {/*  <div>단과대</div>*/}
          {/*</div>*/}
        </div>
        <div className={styles['searcher-wrapper']}>
          <div className={styles.searcher}>
            <div className={styles.inner}>
              <div className={styles.title}>검색</div>
              <input value={searcher} onChange={onInputChange} />
              <AiOutlineSearch className={styles['search-icon']} />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {clubs
            .filter((club) => {
              if (typePicked === '') return club;
              else if (club.type1 === typePicked) return club;
            })
            .filter((club) => {
              if (searcher === '') {
                return club;
              } else if (club.name.toLowerCase().includes(searcher.toLowerCase())) {
                return club;
              }
            })
            .map((club) => (
              <ClubInfo club={club} key={club.id} />
            ))}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
          {/*<ClubInfo />*/}
        </div>
      </div>
    </div>
  );
};

export default ClubSearchPage;
