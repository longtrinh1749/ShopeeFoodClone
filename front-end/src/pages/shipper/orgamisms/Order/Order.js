import OrderBtn from "../../molecules/OrderBtn";
import OrderDetail from "../../molecules/OrderDetail";
import OrderList from "../../molecules/OrderList";
import OrderPayment from "../../molecules/OrderPayment";
import "./styles.scss";

const Order = () => {
    return (
        <div className="order">
            <div className="order-top">
                <OrderDetail />
                <OrderList />
                <OrderPayment />
            </div>
            <OrderBtn />
        </div>
    );
};

export default Order;
