import { useListOrderConfirmed } from "api/shipper";
import { isString } from "formik";
import { useStore } from "hook/useStore";
import ConfirmedOrderList from "pages/shipper/molecules/ConfirmedOrderList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListOrderConfirmed } from "redux/actions/shipper";
import "./styles.scss";

const ConfirmedOrder = ({shipperId}) => {
    const dispatch = useDispatch();
    const { orderList } = useStore("Shipper", "orderReducer");
    const { execute } = useListOrderConfirmed(2)();
    const { reload } = useStore("Shipper", "orderReloadReducer");
    const { tabId } = useStore("Shipper", "orderTabReducer");

    useEffect(() => {
        execute({
            cbSuccess: (res) => {
                if(isString(res.data)) res.data = [];
                dispatch(getListOrderConfirmed({ orderList: res.data ?? null}));
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
                <ConfirmedOrderList orderList={orderList} shipperId={shipperId} />
            </tbody>

        </table>
    );
};

export default ConfirmedOrder;
