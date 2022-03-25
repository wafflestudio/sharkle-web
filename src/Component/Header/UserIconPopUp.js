import { useSessionContext } from '../../Context/SessionContext';
import styles from './Header.module.scss';

const UserIconPopUp = ({ handleMyPage, handleClubPage }) => {
  const { handleLogout } = useSessionContext();

  return (
    <div className={styles.user}>
      <div className={styles.wrapper} onClick={handleMyPage}>
        내 동아리 관리
      </div>
      {/*<div className={styles.wrapper} onClick={handleClubPage}>*/}
      {/*  동아리 검색하기*/}
      {/*</div>*/}
      <div className={styles.wrapper} onClick={handleLogout}>
        로그아웃
      </div>
    </div>
  );
};

export default UserIconPopUp;
