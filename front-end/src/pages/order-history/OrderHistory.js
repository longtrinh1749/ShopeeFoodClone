import "./orderhistory.css";
import Order from "./sub-component/Order";
import React, { useState, useEffect } from "react";
import axios from "axios";
const OrderHistory = (props) => {
  const [ordersInfo, setordersInfo] = useState([]);
    useEffect(() => {
      axios
    .get(
      `${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/order/customer/${props.user.id}`
    )
    .then((res) => {
      console.log(res.data.data);
      if ( res.data.data === 'order not found not existed') setordersInfo([])
      setordersInfo(res.data.data)
    });
    }, []);
  return (
    <div className="container">
      <h1 className="block-title mb-4 text-center order-hist-title">
        Lịch sử đơn hàng
      </h1>
      <div className="history-switch">
        <div className="item now active">ShopeeFood</div>
      </div>
      <div className="history-table-container">
        <div className="history-table">
          <div className="history-table-row history-table-heading">
            <div className="history-table-cell small-col">STT</div>
            <div className="history-table-cell">Mã đơn hàng</div>
            <div className="history-table-cell">Thời gian</div>
            <div className="history-table-cell">Địa điểm</div>
            <div className="history-table-cell">Nhân viên</div>
            <div className="history-table-cell">Tổng tiền</div>
            <div className="history-table-cell">Trạng thái</div>
            <div className="history-table-cell">Chi tiết</div>
          </div>
          {ordersInfo.map((order, index) =>(<Order key={index} index={index} order={order}></Order>) )} 
        </div>
      </div>
    </div>
  );
};
export default OrderHistory;
