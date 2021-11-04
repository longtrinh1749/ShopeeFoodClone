import "./item-list.scss";

const ItemList = ({ item }) => {
    return (
        <div className="item-list">
            <a href="/">
                <div className="item-list_img">
                    <img src={item.image} alt="" />
                </div>
                <div className="item-list_info">
                    <div className="info_title">
                        <i className="fas fa-shield-alt"></i>
                        {item.title}
                    </div>
                    <div className="info_address">{item.address}</div>
                    <div className="info_price">
                        <div className="info_price-item">
                            <i className="fas fa-tag"></i>
                            <span>Tối thiểu 20k</span>
                        </div>
                        <div className="info_price-item">
                            <i className="fas fa-money-bill-wave"></i>
                            <span>Giá {item.price}</span>
                        </div>
                    </div>
                    <div className="info_discount">
                        <i className="fas fa-tag"></i>
                        <span>{item.discount}</span>
                    </div>
                    {item.active && <div className="info_active"></div>}
                </div>
            </a>
        </div>
    );
};

export default ItemList;
