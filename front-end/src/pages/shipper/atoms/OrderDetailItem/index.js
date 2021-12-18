import "./style.scss";

const OrderDetailItem = () => {
    return (
        <div className="order_detail-item">
            <div className="item_number">1</div>
            <div className="item_infor">
                <div className="item_infor-name">
                    <p>Mỳ trộn đặc biệt</p>
                    <span>- Há cảo,Mỳ Indomie</span>
                </div>
                <div className="item_infor-price">45,000đ</div>
            </div>
        </div>
    )
}

export default OrderDetailItem
