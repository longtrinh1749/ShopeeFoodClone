import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Signup from "./pages/signup/Signup";
import UpdateAccount from "pages/update-account/UpdateAccount";
import Shop from "./pages/shop/shop";
import OrderHistory from "pages/order-history/OrderHistory";
import Shipper from "pages/shipper/Shipper";
import Owner from "pages/owner";
function App() {
    const [user, setUser] = useState({
        username: "",
        headerKey: "",
    });
    return (
        <>
            <BrowserRouter>
                <Header user={user} setUser={setUser} />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="login" element={<Login setUser={setUser} />} />
                    <Route path="search" element={<Search />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="danh-sach/:categoryId" element={<Search />} />
                    <Route path="danh-sach" element={<Search />} />
                    <Route
                        path="profile"
                        element={<UpdateAccount user={user} />}
                    />
                    <Route path="order-history" element={<OrderHistory />} />
                    <Route path="shop/:shopUrl" element={<Shop />} />
                    <Route path="shipper" element={<Shipper />} />
                    <Route path="owner" element={<Owner />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
