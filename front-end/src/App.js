import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
              <Route path = "/home" element = {<Home/>}></Route>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/search" element={<Search />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
