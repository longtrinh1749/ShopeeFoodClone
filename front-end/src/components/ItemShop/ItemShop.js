import "./itemShop.scss";

const ItemShop = ({ item }) => {
    return (
        <div className="item">
            <a href="/">
                <div className="item_img">
                    <img src={item.image} alt="" />
                </div>
                <div className="item_info_shop">
                    <div className="item_info_shop-title">{item.title}</div>
                </div>
                <div className="item_discount">
                    <span className="discount-price">{item.discount}</span>
                    <span className="currency-unit-discount">đ</span>
                    <span className="price">{item.price}</span>
                    <span className="currency-unit">đ</span>
                </div>
                <div className="btn-add-to-cart">
                    <div className="btn-add">+</div>
                </div>
                {item.active && <div className="item_active"></div>}
            </a>
        </div>
    );
};

export default ItemShop;
