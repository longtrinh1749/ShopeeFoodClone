import "./style.scss";

const OrderListItem = () => {
    return (
        <div className="order_list-item">
            <div className="item-info">
                <div className="item-info_number">1</div>
                <div className="item-info_name">Mỳ trộn đặc biệt</div>
                <div className="item-info_note">[Há cảo, Mỳ Indomie]</div>
            </div>
            <div className="item-price">25,000</div>
        </div>
    );
};

export default OrderListItem;
