import "./app.scss";
import "bootstrap";
import Header from "./components/Header/Header";
import Food from "./pages/home/organisms/Food/Food";
import Banner from "./pages/home/molecules/Banner/Banner";

function App() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Banner />
                <Food />
            </div>
        </>
    );
}

export default App;
