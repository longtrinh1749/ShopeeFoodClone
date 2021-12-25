import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Signup from "./pages/signup/Signup";
import Shop from "./pages/shop/shop";

function App() {
  const [user, setUser] = useState('');
  return (
    <>
      <BrowserRouter>
      <Header
        user = {user}
        setUser = {setUser}
        />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login setUser={setUser}/>} />
            <Route path="search" element={<Search />} />
            <Route path="signup" element = {<Signup/>} />
            <Route path="danh-sach/:categoryId" element={<Search/>} />
            <Route path="danh-sach" element={<Search/>} />
            <Route path="shop/:shopUrl" element = {<Shop/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;