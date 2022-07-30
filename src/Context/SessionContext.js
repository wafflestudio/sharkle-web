import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {};

const SessionContext = createContext(initialState);

export const SessionProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('accessToken') !== null);
  //const [isLogin, setIsLogin] = useState(true);

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken') === null ? null : localStorage.getItem('accessToken')
  );

  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken') === null ? null : localStorage.getItem('refreshToken')
  );

  const [email, setEmail] = useState(localStorage.getItem('email') === null ? '' : localStorage.getItem('email'));
  //const [id, setId] = useState("20");

  const [id, setId] = useState(localStorage.getItem('id') === null ? '' : localStorage.getItem('id'));
  //const [userId, setUserId] = useState("idplace");

  const [userImg, setUserImg] = useState(
    localStorage.getItem('userImg') === null ? '' : localStorage.getItem('userImg')
  );
  //const [userImg, setUserImg] = useState("https://wafflestudio.com/_next/image?url=%2Fimages%2Ficon_intro.svg&w=640&q=75");

  const [username, setUsername] = useState(
    localStorage.getItem('username') === null ? '' : localStorage.getItem('username')
  );

  //자동 로그아웃 타이머
  const [count, setCount] = useState(0);

  const handleLogin = (email, id, img, username, accessToken, refreshToken) => {
    localStorage.setItem('email', email);
    localStorage.setItem('id', id);
    localStorage.setItem('username', username);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setIsLogin(true);
    setEmail(email);
    setId(id);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLogin(false);
    setEmail('');
    setId('');
    setAccessToken(null);
    setRefreshToken(null);
    toast.success('로그아웃되었습니다.');
  };

  const checkToken = () => {
    axios
      .post(`/api/v1/auth/token/verify/`, {
        token: refreshToken,
      })
      .then((response) => {
        axios
          .post(`/api/v1/auth/token/refresh/`, {
            refresh: refreshToken,
          })
          .then((response) => {
            setAccessToken(response.data.access);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          handleLogout();
        }
      });
  };

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 600000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // 자동 로그아웃 처리
  useEffect(() => {
    if (localStorage.getItem('accessToken') !== null) {
      checkToken();
    }
  }, [count]);

  return (
    <SessionContext.Provider
      value={{
        isLogin,
        accessToken,
        refreshToken,
        email,
        id,
        username,
        setId,
        userImg,
        handleLogin,
        handleLogout,
        setUserImg,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
