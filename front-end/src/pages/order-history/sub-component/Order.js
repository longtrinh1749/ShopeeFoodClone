import './order.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
const Order = (props) => {
    ///api/v1/public/order/shipper/{id} /api/v1/public/shop/{id}
    const [shipperName, setshipperName] = useState('');
    const [shopName, setshopName] = useState('');
    const [shopAddress, setshopAddress] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // get shipper info 
    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/order/shipper/${props.order.shipperId}`
            )
            .then((res) => {
                console.log(res.data.data);
            });
    }
        , []);

    // get shop info
    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/shop/${props.order.shopId}`
            )
            .then((res) => {
                console.log(res.data.data);
                setshopName(res.data.data.shopName)
                setshopAddress(res.data.data.address)
            });
    }
        , []);
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
            <div className="history-table-cell">{props.order.status.statusName}</div>
            <div className="history-table-cell"><a className='detail' onClick={handleShow}>Chi tiết đơn hàng</a></div>
        </div>      
        
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-60w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
            </>


    )
}
export default Order