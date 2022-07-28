function fetchQnAList(circleId, curBoardId) {
  let list = null;
  const suspender = fetch(`http://sharkle-server.kro.kr/api/v1/circle/${circleId}/board/${curBoardId}/article/`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        list = data;
      }, 3000);
    });
  return {
    read() {
      if (list === null) {
        throw suspender;
      } else {
        return list;
      }
    },
  };
}

function fetchPosts(userId) {
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
