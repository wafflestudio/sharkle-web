import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SessionProvider } from './Context/SessionContext';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FunctionProvider } from './Functions/Functions';
import ScrollTop from './Context/ScrollTop';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './index.css';

axios.defaults.baseURL = 'http://sharkle-server.kro.kr/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SessionProvider>
    <FunctionProvider>
      <BrowserRouter>
        <ToastContainer autoClose={2700} />
        <ScrollTop />
        <App />
      </BrowserRouter>
    </FunctionProvider>
  </SessionProvider>
);
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
