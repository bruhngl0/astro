import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video"; // Import your Video component
import "./App.css";
import Info from "./components/Info";
import UserDetail from "./components/UserDetail";
import Thankyou from "./components/Thankyou";
import Pilates from "./components/Pilates";
import Yoga from "./components/Yoga";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Video />} /> {/* Home page route */}
        <Route path="/info" element={<Info />} /> {/* Experience page route */}
        <Route path="/userDetail" element={<UserDetail />} />
        <Route path="/contact" element={<Thankyou />} />
        <Route path="/userDetail2" element={<Pilates />} />
        <Route path="/yoga-event" element={<Yoga />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
