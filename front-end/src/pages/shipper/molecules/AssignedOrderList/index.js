import { useUpdateOrderStatus } from "api/shipper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reloadData, setOrder } from "redux/actions/shipper";
// import "./style.scss";

const AssignedOrderList = ({ orderList, shipperId }) => {
    const dispatch = useDispatch();
    function setInfo(currentOrder) {
        dispatch(setOrder({ order: currentOrder }));
    }
    const { execute: executeOrderStatus } = useUpdateOrderStatus();
    const onUpdateOrderStatus = (order) => {
        var oldDateObj = new Date();
        var newDateObj = new Date();
        newDateObj.setTime(oldDateObj.getTime() + 30 * 60 * 1000);
        let data = {
            orderId: order?.orderId,
            statusId: 5,
            shipperId,
            deliveryAt: newDateObj,
        };
        executeOrderStatus({
            data,
            cbSuccess: (res) => {},
        });
        setTimeout(() => {
            dispatch(reloadData({reload: true}));
        }, 1000);
    };

    useEffect(() => {
    }, [orderList]);

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
                            <button
                                className="btn btn-danger ms-2"
                                onClick={() => onUpdateOrderStatus(order)}
                                data-bs-toggle="modal"
                                data-bs-target="#oder_detail_notice"
                            >
                                Hoàn thành
                            </button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default AssignedOrderList;
