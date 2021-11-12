import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";
import Search from "./pages/search/Search";
import ItemShop from "./components/ItemShop/ItemShop";


function App() {
    var itemShop = {
        image: "images/shield.png",
        title: "Bún Bò Giò Heo Thịt Chả + Nước Ép Dưa Hấu",
        discount: 50000,
        price: 100000,
    }
    return (
        <>
            <Header />
            <div className="wrapper">
                {/* <Home /> */}
                <ItemShop item={ itemShop }/>
            </div>
            <Footer />
        </>
    );
}

export default App;
