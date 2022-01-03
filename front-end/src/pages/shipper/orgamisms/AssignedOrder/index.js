import { useListOrderAssign, useListOrderAssigned, useListOrderConfirmed } from "api/shipper";
import { isString } from "formik";
import { useStore } from "hook/useStore";
import AssignedOrderList from "pages/shipper/molecules/AssignedOrderList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListOrderConfirmed } from "redux/actions/shipper";

const AssignedOrder = () => {
    const dispatch = useDispatch();
    const { orderList } = useStore("Shipper", "orderReducer");
    const { execute } = useListOrderAssigned();
    const { reload } = useStore("Shipper", "orderReloadReducer");
    const { tabId } = useStore("Shipper", "orderTabReducer");

    useEffect(() => {
        execute({
            params : {
                statusId : 3,
                shipperId : 70
            },
            cbSuccess: (res) => {
                if(isString(res.data)) res.data = [];
                dispatch(getListOrderConfirmed({ orderList : res.data }));
            },
        });
    }, [reload, tabId]);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Địa chỉ nhận hàng</th>
                    <th scope="col">Thời gian order</th>
                    <th scope="col">Tổng</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <AssignedOrderList orderList={orderList} />
            </tbody>
        </table>
    );
};

export default AssignedOrder;
