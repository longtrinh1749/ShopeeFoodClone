import './voucherlist.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Voucher from './sub-component/Voucher';
const VoucherList = (props) =>{
    const [vouchersInfo, setvouchersInfo] = useState([]);
    let formattedRole = 'user';
    if (props.user.role === "SELLER") formattedRole = 'shop';
    useEffect(() => {
        let params = {
            applyType: formattedRole,
            applyToId: props.user.id 
        }
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/voucher/applied`, {
            params
        }).then((res)=>{
            console.log(res.data.data)
            if ( res.data.data == 'voucher not found not existed') setvouchersInfo([]);
            else setvouchersInfo(res.data.data)
        });
      }, []);
    return (
        <div className="container">
        <h1 className="block-title mb-4 text-center order-hist-title">
          Mã Khuyễn Mãi
        </h1>
        <div className="history-switch">
          <div className="item now active">ShopeeFood</div>
        </div>
        <div className="history-table-container">
          <div className="history-table">
            <div className="history-table-row history-table-heading">
              <div className="history-table-cell">Mã khuyến mãi</div>
              <div className="history-table-cell">Giảm giá</div>
              <div className="history-table-cell">Đặt tối thiểu</div>
              <div className="history-table-cell">Ngày hết hạn</div>
              <div className="history-table-cell">Trạng thái</div>
            </div>
            {vouchersInfo.map((voucher, index) =>(<Voucher key={index} index={index} voucher={voucher}></Voucher>) )} 
          </div>
        </div>
      </div>
    )
}
export default VoucherList