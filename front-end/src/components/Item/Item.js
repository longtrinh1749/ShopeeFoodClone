import "./item.scss";

const Item = ({ item }) => {
    return (
        <div className="item">
            <a href="/">
                <div className="item_img">
                    <img src={item.imgUrl} alt="" />
                </div>
                <div className="item_info">
                    <div className="item_info-title"> <img src="/images/shield.png" alt="" />{item.shopName}</div>
                    <div className="item_info-address">{item.address}</div>
                </div>
                <div className="item_discount">
                    <i className="fas fa-tag"></i>
                    <span>{item.priceRange}</span>
                </div>
                {/* {item.active && <div className="item_active"></div>} */}
            </a>
        </div>
    );
};

export default Item;
