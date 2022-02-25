import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ClubPage from "./Component/ClubPage/ClubPage";
import MyPage from "./Component/MyPage/MyPage";
import Header from "./Component/Header/Header";

function App() {
  return (
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/*" element={<ClubPage />}/>
                  <Route path="/club" element={<ClubPage />}/>
                  <Route path="/mypage" element={<MyPage/>}/>
              </Routes>
          </BrowserRouter>

  );
}

export default App;
