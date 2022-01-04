import './order.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Order = (props) => {
    ///api/v1/public/order/shipper/{id} /api/v1/public/shop/{id} /v1/public/users/1
    const [shipperName, setshipperName] = useState('');
    const [shopName, setshopName] = useState('');
    const [shopAddress, setshopAddress] = useState('');
    const [show, setShow] = useState(false);
    const [orderDetail, setorderDetail] = useState({
        total:'',
        salesList:[],
        shippingFees: '',
        discount: ''
    });
    const [sales, setsales] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    // document.getElementById('confirm').style.display = "none"
    // document.getElementById('cancel').style.display = "none"
    const initData= ()=>{
                // get shipper info
                axios
                .get(
                    `${process.env.REACT_APP_SERVER_ADDRESS}:8400/v1/public/users/${props.order.shipperId}`
                )
                .then((res) => {
                    // console.log(res.data.data);
                    setshipperName(res.data.data.profile.name)
                });
            // get shop info
            axios
                .get(
                    `${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/shop/${props.order.shopId}`
                )
                .then((res) => {
                    // console.log(res.data.data);
                    setshopName(res.data.data.shopName)
                    setshopAddress(res.data.data.address)
                });
            console.log(props.role)
            console.log(props.order.status.statusId)
            if ( props.role === "SELLER"){
                if (props.order.status.statusId === 1 ) {
                    document.getElementsByClassName('confirm')[props.index].style.display = "inline"
                    document.getElementsByClassName('cancel')[props.index].style.display = "inline"
                }
            }
    }
    useEffect(() => {
        initData()
    }
        , [props.role]);
    function cancelOrder(){
        let body = {
            orderId : props.order.orderId,
            statusId: 6,
            shipperId: props.order.shipperId,
            deliveryAt: ''
        }
        axios
        .put(
            `${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/order/update`, body
        ).then((res)=>{
            console.log(res)
            window.alert(res.data.result)
            document.getElementsByClassName('confirm')[props.index].style.display = "none"
            document.getElementsByClassName('cancel')[props.index].style.display = "none"
            document.getElementsByClassName("status")[props.index].innerHTML = "Canceled"
        })
    }
    function confirmOrder(){
        let body = {
            orderId : props.order.orderId,
            statusId: 2,
            shipperId: props.order.shipperId,
            deliveryAt: ''
        }
        axios
        .put(
            `${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/order/update`, body
        ).then((res)=>{
            console.log(res)
            window.alert(res.data.result)
            document.getElementsByClassName('confirm')[props.index].style.display = "none"
            document.getElementsByClassName('cancel')[props.index].style.display = "none"
            document.getElementsByClassName("status")[props.index].innerHTML = "Confirmed"
        })
    }
    function showOrderDetail(){
        handleShow();
        axios
        .get(
            `${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/order/full-info/${props.order.orderId}`
        )
        .then((res) => {
            console.log(res.data.data.salesList);
            console.log(res.data.data);
            setorderDetail(res.data.data)
            for ( let i = 0 ;i < res.data.data.salesList.length; i++){
                axios.get(
                    `${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/item/${res.data.data.salesList[i].salesId.itemId}`
                ).then((res)=>{
                    document.getElementById(i).innerHTML = res.data.data.itemName;
                })
                // console.log(res.data.data.salesList[i].salesId.itemId);
            }
        });
    }
    function formatDbTime(dbTime) {
        if (dbTime == null) return ''
        let formatedTime = '';
        const date = dbTime.split('T');
        const datePieces = date[0].split('-');
        const time = date[1].split('.')
        formatedTime = formatedTime.concat(datePieces[2]).concat('-' + datePieces[1]).concat('-' + datePieces[0]) + ' ' + time[0];
        return formatedTime
    }
    return (
        <><div className="history-table-row">
            <div className="history-table-cell small-col">{props.index + 1}</div>
            <div className="history-table-cell">{props.order.code}</div>
            <div className="history-table-cell small-text">
                <div><span className='small-text'>Thời gian đặt {formatDbTime(props.order.orderAt)}</span></div>
                <span className='small-text'>Thời gian giao {formatDbTime(props.order.deliveryAt)}</span>
            </div>
            <div className="history-table-cell">
                <div className='order-shop-name'>{shopName}</div>
                <div className='order-shop-address'>{shopAddress}</div>
            </div>
            <div className="history-table-cell">{shipperName}</div>
            <div className="history-table-cell">{props.order.total}</div>
            <div className="history-table-cell status">{props.order.status.statusName}</div>
            <div className="history-table-cell">
                <a className='detail order-action' onClick={showOrderDetail}>Chi tiết</a> 
                <div><a className='confirm order-action' id='confirm' onClick={confirmOrder}>Xác nhận</a></div> 
                <div><a className='cancel order-action' id='cancel' onClick={cancelOrder}>Hủy</a></div>
            </div>
        </div>      
        
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-60w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Chi tiết đơn hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="history-table-row modal-row history-table-heading">
            <div className="history-table-cell">Món</div>
            <div className="history-table-cell">Số lượng</div>
            <div className="history-table-cell">Giá</div>
            <div className="history-table-cell">Phí </div>
            <div className="history-table-cell">Giảm giá</div>
            <div className="history-table-cell">Tổng tiền</div>
        </div>
        <div className="history-table-row modal-row">
            <div className="history-table-cell">
            {orderDetail.salesList.map((sale, index) =>(
                <div key={index}>
                    <span>{sale.quantity + " "}</span>
                    <span id={index}></span>
                </div>
            ) )}
            </div>
            <div className="history-table-cell">{orderDetail.salesList.length + " items"}</div>
            <div className="history-table-cell">{parseInt(orderDetail.total) - parseInt(orderDetail.shippingFees) + parseInt(orderDetail.discount) }</div>
            <div className="history-table-cell">{orderDetail.shippingFees} </div>
            <div className="history-table-cell">{'- ' + orderDetail.discount}</div>
            <div className="history-table-cell">{orderDetail.total}</div>
        </div>
        </Modal.Body>
      </Modal>
            </>


    )
}
export default Order