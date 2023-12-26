
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Category from "./Pages/Category";
import Talents from "./Pages/TalentPages/Talents";
import RegistraionOption from "./Pages/RegistraionOption";
import SignUp2 from "./Pages/SignUp2";
import SearchResulte from "./Pages/TalentPages/SearchResulte";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signupCreative" element={<SignUp2 />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/registerOption" element={<RegistraionOption />}></Route>
          <Route path="/talents" element={<Talents />}></Route>
          <Route path="/searchedResult" element={<SearchResulte />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
