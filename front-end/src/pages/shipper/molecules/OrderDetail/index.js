import OrderDetailItem from "../../atoms/OrderDetailItem";
import "./style.scss";

const OrderDetail = () => {
    return (
        <div className="order_detail">
            <div
                type="button"
                className="order_detail-btn"
                data-bs-toggle="modal"
                data-bs-target="#oder_detail"
            >
                <span>Chi tiết đơn hàng</span>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div
                className="modal fade order_detail-modal"
                id="oder_detail"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Chi tiết đơn hàng
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="user">
                                <div className="user_info">
                                    <p className="user_info-img">
                                    <i className="fas fa-user"></i>
                                    </p>
                                    <p className="user_name">Absd</p>
                                </div>
                                <div className="user_total">
                                    2 món
                                </div>
                            </div>
                            <div className="order_detail-list">
                                <OrderDetailItem />
                                <OrderDetailItem />
                                <OrderDetailItem />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
