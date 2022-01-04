import { useListOrderAssigned } from "api/shipper";
import { isString } from "formik";
import { useStore } from "hook/useStore";
import CompletedOrderList from "pages/shipper/molecules/CompletedOrderList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListOrderConfirmed } from "redux/actions/shipper";

const CompletedOrder = ({shipperId}) => {
    const dispatch = useDispatch();
    const { orderList } = useStore("Shipper", "orderReducer");
    const { execute } = useListOrderAssigned();

    useEffect(() => {
        execute({
            params : {
                statusId : 5,
                shipperId
            },
            cbSuccess: (res) => {
                if(isString(res.data)) res.data = [];
                dispatch(getListOrderConfirmed({ orderList: res.data }));
            },
        });
    }, []);

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
                <CompletedOrderList orderList={orderList} />
            </tbody>
        </table>
    );
};

export default CompletedOrder;
