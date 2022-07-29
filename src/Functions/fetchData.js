import axios from 'axios';

function fetchQnAList(circleId, curBoardId) {
  let list = null;
  /*const suspender = fetch(`http://sharkle-server.kro.kr/api/v1/circle/${circleId}/board/${curBoardId}/article/`)
    .then((response) => response.json())
    .then((data) => {
      list = data;
    });*/

  const suspender = axios
    .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/`)
    .then((response) => {
      list = response.data;
    })
    .catch((error) => {});
  return {
    read() {
      if (list === null || circleId === null || curBoardId === null) {
        throw suspender;
      } else {
        return list;
      }
    },
  };
}

function fetchCircleInfo(userId) {
  console.log('s넌 왜 실행대누');
  let posts = null;
  const suspender = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        posts = data;
      }, 3000);
    });
  return {
    read() {
      if (posts === null) {
        throw suspender;
      } else {
        return posts;
      }
    },
  };
}

function fetchData(circleId, curBoardId) {
  return {
    qnaList: fetchQnAList(circleId, curBoardId),
  };
}

export default fetchData;
