
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/createEvent" element={<CreateEvent />}></Route>
          <Route path="/announcement" element={<Announcement />}></Route>
          <Route path="/scheduledEvent" element={<ScheduledEvent />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/services" element={<Services />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
