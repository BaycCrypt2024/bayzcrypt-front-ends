<<<<<<< HEAD
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
=======
import Home from "./pages/Home/Welcome";
import Seed from "./pages/Auths/Seed/Seed";
const App = () =>{
  return(
    <>
    <Seed/>
    </>

  )
}
export default App;
>>>>>>> 517d12f8957c2bafe891c240a4f8ae0b7a336609
