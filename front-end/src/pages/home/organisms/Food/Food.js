import Endow from "../../molecules/Endow/Endow";
import List from "../../molecules/List/List";
import LocationShip from "../../molecules/LocationShip/LocationShip";
import Search from "../../molecules/Search/Search";
import SuggestKeyword from "../../molecules/SuggestKeyword/SuggestKeyword";
import "./food.scss";

const Food = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main-left">
                    <div className="search">
                        <h1>Đặt Đồ ăn, giao hàng từ 20'...</h1>
                        <p className="search_subtitle">
                            Có 59050 địa điểm ở TP. HCM từ 00:00 - 23:59
                        </p>
                        <Search />
                        <SuggestKeyword />
                    </div>
                </div>
                <div className="main-wrapper">
                    <LocationShip />
                    <Endow />
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Food;
