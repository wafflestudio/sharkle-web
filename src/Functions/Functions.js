import { createContext, useContext, useEffect, useState, useRef } from 'react';

const initialState = {};

const FunctionContext = createContext(initialState);

export const FunctionProvider = ({ children }) => {
  const DummyQnA = [
    { id: 0, title: '타대생도 가입 가능한가요?', date: '2022.03.01', comment: 1 },
    { id: 1, title: '고학번도 가입 가능한가요?', date: '2022.03.01', comment: 1 },
    { id: 2, title: '학기중에 많이 힘든가요?', date: '2022.03.01', comment: 3 },
    { id: 3, title: '성비가 어떻게되나요?', date: '2022.03.01', comment: 5 },
    { id: 4, title: '많이 힘든가요?', date: '2022.03.01', comment: 0 },
    { id: 5, title: '처음하는사람도 괜찮나요?', date: '2022.03.01', comment: 2 },
    { id: 6, title: '활동비가 있나요?', date: '2022.03.01', comment: 1 },
    { id: 7, title: '질문질문', date: '2022.03.01', comment: 8 },
    { id: 8, title: '이것저것 상세한 질문글', date: '2022.03.01', comment: 10 },
    { id: 9, title: '이것저것 상세한 질문글', date: '2022.03.01', comment: 10 },
  ];

  return <FunctionContext.Provider value={{ DummyQnA }}>{children}</FunctionContext.Provider>;
};

export const useFunctionContext = () => useContext(FunctionContext);
