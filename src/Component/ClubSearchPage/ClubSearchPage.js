import styles from './ClubSearchPage.module.scss';
import Header from '../Header/Header';
import { MdOutlineSportsBaseball } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import ClubInfo from './ClubInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchPageHeader from './SearchPageHeader';
import CircleCreateForm from './CircleCreateForm';

const ClubSearchPage = () => {
  const [clubs, setClubs] = useState([]);
  const [searcher, setSearcher] = useState('');

  /* 정렬 방식 설정
   sortType의 값
   0 : 이름순
   1 : 모짐임박순
   2 : 추가 정렬기준 생길때마다 추가

   정렬 기준을 클릭하면 sortType 값이 toggle되어 정렬 기준과 UI가 바뀜
   */
  const [sortType, setSortType] = useState('0');
  const onSortClick = (type) => {
    setSortType(type);
  };
  const sortFunction = (club_a, club_b) => {
    // 이름순 정렬
    if (sortType == '0') {
      return club_a.name.toLowerCase() < club_b.name.toLowerCase() ? -1 : 1;
    }
    // 모집임박순 정렬
    // D Day가 지난 동아리는 후순위로
    else if (sortType == '1') {
      let date = new Date();
      let year = date.getFullYear();
      let month = ('0' + (1 + date.getMonth())).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);
      const today = year + '-' + month + '-' + day;

      let retval;
      if (club_a.due < today) retval = 1;
      else if (club_b.due < today) retval = -1;
      else if (club_a.due < club_b.due) retval = -1;
      else retval = 1;

      return retval;
    } else return;
  };

  /* 정렬 End
  
   */

  /* Type : 동아리 유형 (ex. 단과대, 과, ...)
     Backend에서는 실제 규모 별 분류인 type0과 분야 별 분류인 type1 두 가지 분류를 채택하고 있기 때문에, 추후 front에서 수정이 필요함
     현재는 하나의 type 유형으로 관리한 후, 임의로 type0, type1을 계산하여 query param으로 보냄.

     TypePicked : 상단바에서 현재 선택된 Type ( default는 전체 )

     Type, TypePicked의 set은 SearchPageHeader 컴포넌트에서 처리함.

     onClubSearch : 1) 헤더를 새로 클릭했을 때, (추후) 2) 검색창을 활용해 검색했을 때 param을 보내서 다시 circle을 받아옴

   */

  const [typePicked, setTypePicked] = useState(0);
  const [types, setTypes] = useState([
    { id: 0, picked: true, title: '전체' },
    { id: 1, picked: false, title: '기타' },
    { id: 2, picked: false, title: '연합' },
    { id: 3, picked: false, title: '중앙' },
    { id: 4, picked: false, title: '단과대' },
    { id: 5, picked: false, title: '과' },
    { id: 6, picked: false, title: '학술/매체' },
    { id: 7, picked: false, title: '연행/예술' },
    { id: 8, picked: false, title: '취미/교양' },
    { id: 9, picked: false, title: '무예/운동' },
    { id: 10, picked: false, title: '인권/봉사' },
    { id: 11, picked: false, title: '종교' },
  ]);

  /* Type End
   */

  const onClubSearch = (typePicked) => {
    console.log('getting Clubs');

    let params = {};
    if (typePicked == 0) params = {};
    else if (typePicked <= 5) {
      params = { type0: typePicked - 1 };
    } else if (typePicked > 5) {
      params = { type1: typePicked - 5 };
    }

    console.log(params);

    axios
      .get(`api/v1/circle`, {
        params: params,
      })
      .then((response) => {
        console.log(response.data.results);
        setClubs(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dummyClubs = [
    {
      type0: 1,
      type1: 2,
      name: 'd',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-01',
    },
    {
      type0: 1,
      type1: 2,
      name: 'c',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-06-30',
    },
    {
      type0: 1,
      type1: 1,
      name: 'aaa',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-05',
    },
    {
      type0: 1,
      type1: 2,
      name: '가',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-06',
    },
    {
      type0: 1,
      type1: 1,
      name: '나',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-07',
    },
    {
      type0: 1,
      type1: 1,
      name: 'bb',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-08',
    },
    {
      type0: 1,
      type1: 1,
      name: 'cdasc',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-09',
    },
    {
      type0: 1,
      type1: 1,
      name: 'dfeaf',
      bio: 'asdf',
      introduction: 'asdf',
      tag: 'asdf',
      homepage: 'asdf',
      facebook: 'asdf',
      instagram: 'asdf',
      twitter: 'asdf',
      youtube: 'asdf',
      tiktok: 'asdf',
      band: 'asdf',
      due: '2022-07-10',
    },
  ];

  const onInputChange = (e) => {
    setSearcher(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`api/v1/circle/`)
      .then((response) => {
        console.log(response.data.results);
        setClubs(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   setClubs(dummyClubs);
  // }, []); //if server off

  return (
    <div>
      <Header />
      <SearchPageHeader
        types={types}
        setTypes={setTypes}
        typePicked={typePicked}
        setTypePicked={setTypePicked}
        onClubSearch={onClubSearch}
      />
      <div className={styles.main}>
        <div className={styles.categories}>
          <div className={styles.category}>
            <MdOutlineSportsBaseball className={styles.icon} />
            <div>전체</div>
          </div>
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

        <div className={styles.sort}>
          <div className={styles.box}>
            <div onClick={() => onSortClick('0')} style={{ color: sortType == '0' ? 'rgb(83, 141, 255)' : 'black' }}>
              이름순
            </div>
            <div>|</div>
            <div onClick={() => onSortClick('1')} style={{ color: sortType == '1' ? 'rgb(83, 141, 255)' : 'black' }}>
              모집임박순
            </div>
          </div>
        </div>

        <div className={styles.list}>
          {clubs
            .sort(sortFunction)
            // .filter((club) => {
            //   if (typePicked == '0') return club;
            //   else if (club.type1 === typePicked) return club; // params로 받아오면 자체로 거를 필요 없음.
            // })
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
        </div>
      </div>

      <CircleCreateForm />
    </div>
  );
};

export default ClubSearchPage;
