import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
// import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
// import Search from "./pages/search/Search";
// import ItemShop from "./components/ItemShop/ItemShop";
import Shop from "./pages/shop/shop"


=======
import Search from "./pages/search/Search";
<<<<<<< HEAD
import Login from "./pages/login/Login"
>>>>>>> bc60affb109376268b0cd5c1a9b861d0b2138830
function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                {/* <Home /> */}
<<<<<<< HEAD
                {/* <ItemShop item={ itemShop }/> */}
                <Shop />
=======
                {/* <Search /> */}
                <Login/>
>>>>>>> bc60affb109376268b0cd5c1a9b861d0b2138830
            </div>
            <Footer />
        </>
    );
=======
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Signup from "./pages/signup/Signup";

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
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login setUser={setUser}/>} />
            <Route path="search" element={<Search />} />
            <Route path="signup" element = {<Signup/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
>>>>>>> 5adf50c11ddacd2f396139bf153d376c4fd27a28
}

export default App;
