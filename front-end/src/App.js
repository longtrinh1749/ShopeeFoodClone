import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/search/Search";
import Shipper from "./pages/shipper/Shipper";

import Login from "./pages/login/Login";
function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Home />
                {/* <Search /> */}
                {/* <Shipper /> */}
                {/* <Login /> */}
            </div>
            <Footer />
        </>
    );
}

export default App;
