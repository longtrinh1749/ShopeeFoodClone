import "./style.scss";

const OrderPayment = () => {
    return (
        <div className="order_payment">
            <div className="order_payment-item">
                <div className="item-left">
                    Tổng cộng <b>2</b> phần
                </div>
                <div className="item-right">
                    <b>70.000</b>
                </div>
            </div>
            <div className="order_payment-item">
                <div className="item-left">
                Phí dịch vụ
                </div>
                <div className="item-right">
                1,000
                </div>
            </div>
            <div className="order_payment-item">
                <div className="item-left">
                    Phí vận chuyển: <span className="payment-distance">0.1 km </span>
                </div>
                <div className="item-right">
                15,000
                </div>
            </div>
            <div className="order_payment-item">
                <div className="item-left">
                    Khuyến mại
                </div>
                <div className="item-right">
                15,000
                </div>
            </div>

            <div className="order_payment-note">
                <div className="note-title">Ghi chú</div>
                <div className="note">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <div className="order_payment-item order_payment-total">
                <div className="item-left">
                    Tổng cộng
                </div>
                <div className="item-right">
                15,000
                </div>
            </div>
        </div>
    )
}

export default OrderPayment
