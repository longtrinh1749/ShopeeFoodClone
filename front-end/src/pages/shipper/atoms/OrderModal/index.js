import { useOrderFullInfo, useOrderShop, useOrderUser, useShopItemAll, useUpdateOrderStatus } from "api/shipper";
import { useStore } from "hook/useStore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getItemAll, reloadData } from "redux/actions/shipper";

export const OrderModal = ({ tabId, shipperId }) => {
    const dispatch = useDispatch();
    const { order } = useStore("Shipper", "orderDetailReducer");
    const { itemList } = useStore("Shipper", "itemReducer");
    const { execute: executeUser } = useOrderUser(order.customerId)();
    const { execute: executeShop } = useOrderShop(order.shopId)();
    const { execute: executeShopItemAll } = useShopItemAll();
    const { execute: executeFullInfo } = useOrderFullInfo(order.orderId)();
    const [shop, setShop] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [ itemId, setItemId ] = useState([]);

    const { execute: executeOrderStatus } = useUpdateOrderStatus();

    // console.log(order);
    useEffect(() => {
        if (order.customerId !== 0) {
            executeUser({
                cbSuccess: (res) => {
                    setCustomer(res.data);
                },
            });
        }
        if (order.shopId !== 0) {
            executeShop({
                cbSuccess: (res) => {
                    setShop(res.data);
                },
            });
        }
        if (order.orderId !== 0) {
            executeFullInfo({
                cbSuccess: (res) => {
                    // let data = res.data;
                    setItemId(res.data.salesList)
                    // setShop(res.data);
                },
            });
            executeShopItemAll({
                params : {
                    shopId: order.shopId,
                },
                cbSuccess: (res) => {
                    dispatch(getItemAll({ itemList : res.data }));
                },
            });
        }
    }, [order]);

    const onUpdateOrderStatus = (status) => {
        var oldDateObj = new Date();
        var newDateObj = new Date();
        newDateObj.setTime(oldDateObj.getTime() + 30 * 60 * 1000);
        let data = {
            orderId: order?.orderId,
            statusId: status,
            shipperId,
            deliveryAt: newDateObj,
        };
        // console.log(data);
        executeOrderStatus({
            data,
            cbSuccess: (res) => {},
        });
        setTimeout(() => {
            dispatch(reloadData({reload: true}));
        }, 1000);
    };

    return (
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
                            Chi ti???t ????n h??ng
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Ng?????i ?????t</td>
                                    <td>{customer?.profile.name}</td>
                                    <td>S??? ??i???n tho???i</td>
                                    <td>{customer?.profile.phone}</td>
                                </tr>
                                <tr>
                                    <td>T??n qu??n</td>
                                    <td>{shop?.shopName}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>?????a ch???</td>
                                    <td>{shop?.address}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>??i???m ?????n</td>
                                    <td>{order?.deliveryAddress}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>L??u ??</td>
                                    <td>{order?.note}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Danh s??ch ????n h??ng</td>
                                    <td colSpan={3}>{
                                        itemId.map((value, index) => {
                                            let itemInfo = itemList.find((i) => i.itemId === value.salesId.itemId);
                                            return (
                                                <div key={index}>{itemInfo?.itemName} x {value?.quantity}</div>
                                            )
                                        })
                                    }</td>
                                </tr>
                                <tr>
                                    <td>Ship</td>
                                    <td>{order?.shippingFees}</td>
                                    <td>Khuy???n m???i</td>
                                    <td>{order?.discount}</td>
                                </tr>
                                <tr>
                                    <td>T???ng ti???n</td>
                                    <td>
                                        <span className="btn btn-success">
                                            {order?.total}
                                        </span>
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        {tabId === 1 ? (
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#oder_detail_notice"
                                onClick={() => onUpdateOrderStatus(3)}
                            >
                                Nh???n ????n
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#oder_detail_notice"
                                onClick={() => onUpdateOrderStatus(5)}
                            >
                                Ho??n th??nh
                            </button>
                        )}
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
    );
};
