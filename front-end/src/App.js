import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Home from "./pages/home/templates/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Home />
            </div>
            <Footer />
        </>
    );
}

export default App;
