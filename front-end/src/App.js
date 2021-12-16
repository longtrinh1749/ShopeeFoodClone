import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  return (
    <>
      <Header 
        user = {user}
        setUser = {setUser}
        />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="login" element={<Login setUser={setUser}/>} />
            <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
