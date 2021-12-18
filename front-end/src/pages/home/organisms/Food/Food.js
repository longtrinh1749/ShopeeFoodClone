import Deal from "pages/home/molecules/Deal/Deal";
import List from "pages/home/molecules/List/List";
import LocationShip from "pages/home/molecules/LocationShip/LocationShip";
import Search from "pages/home/molecules/Search/Search";
import SuggestKeyword from "pages/home/molecules/SuggestKeyword/SuggestKeyword";
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
                    {/* <LocationShip /> */}
                    <Deal />
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Food;
