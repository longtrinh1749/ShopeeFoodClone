import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
// import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
// import Search from "./pages/search/Search";
// import ItemShop from "./components/ItemShop/ItemShop";
import Shop from "./pages/shop/shop"


function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                {/* <Home /> */}
                {/* <ItemShop item={ itemShop }/> */}
                <Shop />
            </div>
            <Footer />
        </>
    );
}

export default App;
