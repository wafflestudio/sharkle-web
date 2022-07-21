import { createContext, useContext, useEffect, useState, useRef } from 'react';

const initialState = {};

const FunctionContext = createContext(initialState);

export const FunctionProvider = ({ children }) => {
  const DummyQnA = [
    { id: 0, title: '타대생도 가입 가능한가요?', comment: 1, click: 10, writer: '관리자자자', date: '2022.03.01' },
    { id: 1, title: '고학번도 가입 가능한가요?', comment: 4, click: 10, writer: '와플', date: '2022.03.01' },
    { id: 2, title: '성비가 어떻게되나요?', comment: 13, click: 10, writer: '스튜디오', date: '2022.03.03' },
    { id: 3, title: '많이 힘든가요?', comment: 121, click: 1110, writer: '관리자아아아아아', date: '2022.03.01' },
    { id: 4, title: '활동비가 있나요?', comment: 15, click: 130, writer: '관리자자자', date: '2022.03.01' },
    { id: 5, title: '타대생도 가입 가능한가요?', comment: 1, click: 10, writer: '관리자자자', date: '2022.03.01' },
    { id: 6, title: '이것저것 상세한 질문글', comment: 1512, click: 10, writer: '관리자자자', date: '2022.03.01' },
  ];

  const PageNum = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return <FunctionContext.Provider value={{ DummyQnA, PageNum }}>{children}</FunctionContext.Provider>;
};

export const useFunctionContext = () => useContext(FunctionContext);
