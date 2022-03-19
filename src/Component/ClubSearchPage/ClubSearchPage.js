import styles from './ClubSearchPage.module.scss';
import Header from '../Header/Header';
import { MdOutlineSportsBaseball } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import ClubInfo from './ClubInfo';
const ClubSearchPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.header}>헤더</div>
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
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
          <ClubInfo />
        </div>
      </div>
    </div>
  );
};

export default ClubSearchPage;
