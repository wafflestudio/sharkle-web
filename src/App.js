import logo from './logo.svg';
import './App.css';
import MyPage from './Component/MyPage/MyPage';
import ClubButton from './Component/MyPage/ClubButton';
import Header from './Component/Header/Header';
import AlertPopUp from './Component/Header/AlertPopUp';

function App() {
  return (
    <>
      <Header />
      <MyPage />
      {/*<AlertPopUp />*/}
    </>
  );
}

export default App;
