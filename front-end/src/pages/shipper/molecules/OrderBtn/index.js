import "./style.scss";

const OrderBtn = () => {
    return (
        <div className="order_btn">
            <div className="order_btn-accept">
                <button className="btn btn-success">Duyệt đơn</button>
            </div>
            <div className="order_btn-cancel">
                <button className="btn btn-danger">Hủy đơn</button>
            </div>
        </div>
    )
}

export default OrderBtn
