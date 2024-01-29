
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Login2 from "./Pages/Login2";
import SignUp from "./Pages/SignUp";
import Category from "./Pages/Category";
import RegistraionOption from "./Pages/RegistraionOption";
import SignUp2 from "./Pages/SignUp2";
import SearchResulte from "./Pages/TalentPages/SearchResulte";
import Favourite from "./Pages/TalentPages/Favourite";
import UserSetting from "./Pages/UserSetting";
import CreativeProView from "./Pages/CreativeProView";
import UserChat from "./Pages/TalentPages/UserChat";
import ConfirmPage from "./Pages/ConfirmPage";
import PrivateRoute from "./Pages/TalentPages/Utils/Utils";
import UserDashboard from "./Pages/TalentPages/UserDashboard";
import CreativeWelcom from "./Pages/CreativeProfileCreate/CreativeWelcom";
import UserDasboardMain from "./Pages/TalentPages/UserDasboardMain";
import CreativeOnboardCategory from "./Pages/CreativeProfileCreate/CreativeOnboardCategory";
import CreativeOnboardProfile from "./Pages/CreativeProfileCreate/CreativeOnboardProfile";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/loginCreative" element={<Login2 />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/confirm" element={<ConfirmPage />}></Route>
          <Route path="/signupCreative" element={<SignUp2 />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/registerOption" element={<RegistraionOption />}></Route>

          
          <Route element={<PrivateRoute />}>
            <Route path="/dashboardMain" element={<UserDasboardMain />}></Route>
            <Route path="/dashboard" element={<UserDashboard />}></Route>
            <Route path="/talentsProfiles" element={<CreativeProView />}></Route>
            <Route path="/favourites" element={<Favourite />}></Route>
            <Route path="/searchedResult" element={<SearchResulte />}></Route>
            <Route path="/user-settings" element={<UserSetting />}></Route>
            <Route path="/chats" element={<UserChat />}></Route>
            <Route path="/welcomeCreative" element={<CreativeWelcom />}></Route>
            <Route path="/creativeProfileCategory" element={<CreativeOnboardCategory />}></Route>
            <Route path="/creativeOnboardProfile" element={<CreativeOnboardProfile />}></Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
