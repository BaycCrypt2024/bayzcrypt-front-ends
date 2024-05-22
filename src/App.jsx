// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Loadanimation from "./pages/Loader/Loadanimation";
import Welcome from "./pages/Home/Welcome";
import Login from "./pages/Auths/Login/Login";
import Register from "./pages/Auths/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  import Congrats from "./pages/Congrats/Congrats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loadanimation />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Congrats/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
