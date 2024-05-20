import React from "react";
import "./App.css";
import Welcome from "./pages/Home/Welcome";
import Login from "./pages/Auths/Login/Login";
import Register from "./pages/Auths/Register/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
