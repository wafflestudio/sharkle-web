import styles from './ClubSearchPage.module.scss';
import Header from '../Header/Header';
import { MdOutlineSportsBaseball } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import ClubInfo from './ClubInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ClubSearchPage = () => {
  const [clubs, setClubs] = useState([]);

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
          <div className={styles.select}>전체</div>
          <div className={styles.select}>연합</div>
          <div className={styles.select}>중앙</div>
          <div className={styles.select}>단과대</div>
          <div className={styles.select}>과</div>
          <div className={styles.select}>기타</div>
          <div className={styles.select}>학술/매체</div>
          <div className={styles.select}>연행/예술</div>
          <div className={styles.select}>취미/교양</div>
          <div className={styles.select}>무예/운동</div>
          <div className={styles.select}>인권/봉사</div>
          <div className={styles.select}>종교</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.categories}>
          <div className={styles.category}>
            <MdOutlineSportsBaseball className={styles.icon} />
            <div>전체</div>
          </div>
          <div className={styles.category}>
            <MdOutlineSportsBaseball className={styles.icon} />
            <div>연합</div>
          </div>
          <div className={styles.category}>
            <MdOutlineSportsBaseball className={styles.icon} />
            <div>중앙</div>
          </div>
          <div className={styles.category}>
            <MdOutlineSportsBaseball className={styles.icon} />
            <div>단과대</div>
          </div>
        </div>
        <div className={styles['searcher-wrapper']}>
          <div className={styles.searcher}>
            <div className={styles.inner}>
              <div className={styles.title}>검색</div>
              <input />
              <AiOutlineSearch className={styles['search-icon']} />
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {clubs.map((club) => (
            <ClubInfo club={club} />
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
