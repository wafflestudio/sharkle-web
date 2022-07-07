import { useState } from 'react';
import axios from 'axios';

const CircleCreateForm = () => {
  /* 임시 동아리 생성 UI
      각 input에 알맞은 값을 넣고 동아리 생성 클릭 시 POST Query 보내짐.
  */

  const [clubParams, setClubParams] = useState({ type0: '', type1: '', name: '', tag: '' });

  const createCircle = (e) => {
    e.preventDefault();

    axios
      .post(`api/v1/circle/`, {
        type0: clubParams.type0,
        type1: clubParams.type1,
        name: clubParams.name,
        bio: '개발 동아리 입니다.',
        introduction: '맛있는 서비스를 만드는 곳',
        tag: clubParams.tag,
        homepage: 'https://wafflestudio.com/',
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        tiktok: '',
        band: '',
      })
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    setClubParams({ type0: '', type1: '', name: '', tag: '' });
  };

  const onParamChange = (e) => {
    const { value, name } = e.target;
    setClubParams({
      ...clubParams,
      [name]: value,
    });

    console.log(name);
    console.log(clubParams);
  };

  /* 임시 동아리 생성 UI END
   */

  return (
    <form>
      <input name="name" value={clubParams.name} onChange={onParamChange} placeholder="동아리명" />
      <input name="type0" value={clubParams.type0} onChange={onParamChange} placeholder="type0" />
      <input name="type1" value={clubParams.type1} onChange={onParamChange} placeholder="type1" />
      <input name="tag" value={clubParams.tag} onChange={onParamChange} placeholder="tag" />
      <input type="submit" value="동아리 생성" onClick={createCircle} />
    </form>
  );
};

export default CircleCreateForm;
