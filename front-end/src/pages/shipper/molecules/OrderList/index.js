import OrderListItem from '../../atoms/OrderListItem';
import "./style.scss";

const OrderList = () => {
    return (
        <div className="order_list">
            <OrderListItem />
            <OrderListItem />
            <OrderListItem />
        </div>
    )
}

export default OrderList
