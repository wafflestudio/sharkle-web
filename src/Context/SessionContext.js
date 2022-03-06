import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialState = {};

const SessionContext = createContext(initialState);

export const SessionProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token') !== null);
  //const [isLogin, setIsLogin] = useState(true);

  const [token, setToken] = useState(localStorage.getItem('token') === null ? null : localStorage.getItem('token'));
  //const [token, setToken] = useState("Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDMzMTU5NjIsImlhdCI6MTY0MzI3OTk2MiwiZW1haWwiOiJoYW5keTkxMkBuYXZlci5jb20ifQ.ykwk6BbtvQ_svhVhUWU54QXSlqUXXtTuXefprvqc4JI");

  const [id, setId] = useState(localStorage.getItem('id') === null ? '' : localStorage.getItem('id'));
  //const [id, setId] = useState("20");

  const [userId, setUserId] = useState(localStorage.getItem('userId') === null ? '' : localStorage.getItem('userId'));
  //const [userId, setUserId] = useState("idplace");

  const [userImg, setUserImg] = useState(
    localStorage.getItem('userImg') === null ? '' : localStorage.getItem('userImg')
  );
  //const [userImg, setUserImg] = useState("https://wafflestudio.com/_next/image?url=%2Fimages%2Ficon_intro.svg&w=640&q=75");

  const handleLogin = (id, userid, img, token) => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <SessionContext.Provider value={{ isLogin, token, id, userId, userImg, handleLogin, handleLogout, setUserImg }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
