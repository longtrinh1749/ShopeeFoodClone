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
}

export default App;
