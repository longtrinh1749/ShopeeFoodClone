import { useDispatch } from "react-redux";
import { setOrder } from "redux/actions/shipper";

const CompletedOrderList = ({ orderList }) => {
    const dispatch = useDispatch();
    function setInfo(currentOrder) {
        dispatch(setOrder({ order: currentOrder }));
    }
    return (
        <>
            {orderList.map((order, index) => {
                let date = new Date(order.orderAt);
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{order.deliveryAddress}</td>
                        <td>
                            {date.toLocaleDateString() +
                                " - " +
                                date.toLocaleTimeString()}
                        </td>
                        <td>{order.total}</td>
                        <td>
                            <div
                                className="btn btn-success order_detail-btn"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#oder_detail"
                                onClick={() => setInfo(order)}
                            >
                                Xem chi tiết
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default CompletedOrderList;
