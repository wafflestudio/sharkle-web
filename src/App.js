import './App.css';
import {BrowserRouter, Redirect, Route, Routes, Switch} from "react-router-dom";
import ClubPage from "./Component/ClubPage/ClubPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/club" element={<ClubPage />}/>
              <Route path="/*" element={<ClubPage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
