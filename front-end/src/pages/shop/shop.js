import './shop.scss'
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import ItemShop from '../../components/ItemShop/ItemShop';

var itemShop = {
    imgUrl: "images/shield.png",
    itemName: "Bún Bò Giò Heo Thịt Chả + Nước Ép Dưa Hấu",
    discount: 50000,
    price: 100000,
}

const Shop = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showOrder, setOrderShow] = useState(false);
    const handleOrderClose = () => setOrderShow(false);
    const handleOrderShow = () => setOrderShow(true);

    const [showDiscount, setDiscountShow] = useState(false);
    const handleDiscountClose = () => setDiscountShow(false);
    const handleDiscountShow = () => setDiscountShow(true);

    const shopId = window.location.href.substring(window.location.href.lastIndexOf("-") + 1);
    var sections = [
        {
            sectionName: "alo",
            sectionId: 111,
        }
    ];

    useEffect(() => {
        getShopData();
        getShopSection();
        getShopItemData();
    });

    function getShopData() {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/shop/` + shopId)
            .then((response) => {
                let shop = response.data.data;
                document.getElementById('breadcrum-shop-name').innerHTML = `<a role="button" tabindex="0">` + shop.shopName + `</a>`;
                document.getElementsByClassName('name-restaurant')[0].innerHTML = shop.shopName;
                document.getElementsByClassName('address-restaurant')[0].innerHTML = shop.address;
                document.getElementsByClassName('cost-restaurant')[0].innerHTML = `<i class="fas fa-dollar-sign"></i>` + shop.priceRange;

            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function getShopSection() {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/section/shop?shopId=` + shopId)
            .then((response) => {
                sections = response.data.data;
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    
    function getShopItemData() {

    }

    function openOrderModal() {
        if (1) {
            handleOrderShow();
        }
    }

    function viewMyCode() {
        handleDiscountShow();
    }

    function applyDiscountCode() {
        handleDiscountClose();
        console.log(document.getElementsByClassName("modal-order-discount-code")[0].innerHTML);
    }

    return (
        <div>
            <div className="detail-restaurant-part">
                <Container className="detail-restaurant">
                    <Row>
                        <Col className="detail-restaurant-img">
                            <img src="https://images.foody.vn/res/g103/1020115/prof/s640x400/foody-upload-api-foody-mobile-hmzz-200421103141.jpg" alt=""></img>
                        </Col>
                        <Col className="detail-restaurant-info">
                            <Row>
                                <Breadcrumb className="breadcrumb">
                                    <Breadcrumb.Item className="breadcrumb-link">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item className="breadcrumb-link">Hanoi</Breadcrumb.Item>
                                    <Breadcrumb.Item className="breadcrumb-link" id='breadcrum-shop-name'>Bún Bò Đất Thánh - Shop Online</Breadcrumb.Item>
                                </Breadcrumb>
                            </Row>
                            <Row className='kind-restaurant'>Shop Online</Row>
                            <Row className="name-restaurant">Bún Bò Đất Thánh - Shop Online</Row>
                            <Row className="address-restaurant">221/16 Đất Thánh, P. 6, Tân Bình, TP. HCM</Row>
                            <Row className="rating"><span className="rating-number">50+</span>đánh giá trên ShopeeFood</Row>
                            <Row className="status-restaurant">
                                <Col md={2} className="opentime">Mở Cửa</Col>
                                <Col className="time"><i class="far fa-clock"></i>06:00 - 22:00</Col>
                            </Row>
                            <Row className="cost-restaurant"><i class="fas fa-dollar-sign"></i></Row>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="menu-restaurant-part">
                <Container className="restaurant">
                    <Col className="menu-restaurant">
                        <Row className="menu-restaurant-tab">THỰC ĐƠN</Row>
                        <Row className="menu-restaurant-content">
                            <Container className="menu-restaurant-container">
                                <Row>
                                    <Col md={2} className="menu-restaurant-category">
                                        {sections.map((section) => (
                                            <div key={section.sectionId} className="item-link">{section.sectionName}</div>  
                                        ))}
                                    </Col>
                                    <Col md={7} className="menu-restaurant-detail">
                                        <Row className="promotion-order">
                                        </Row>
                                        <Row className="search-items">
                                            <img src="" alt="" />
                                            <input placeholder="Tìm Món"></input>
                                        </Row>
                                        <Row className="menu-restaurant-list">
                                            <Row className='title-menu'>MÓN ĐANG GIẢM</Row>
                                            <ItemShop item={itemShop}></ItemShop>
                                            <ItemShop item={itemShop}></ItemShop>
                                            <ItemShop item={itemShop}></ItemShop>
                                            <ItemShop item={itemShop}></ItemShop>
                                            <ItemShop item={itemShop}></ItemShop>
                                        </Row>
                                    </Col>
                                    <Col className="now-bill-restaurant">
                                        <Row className='order-card-group'>
                                            <Row className='order-card-item'>
                                                <Row className='clearfix'>
                                                    <button className="fas fa-plus-square"></button>
                                                    <span className="number-order">1</span>
                                                    <button className="fas fa-minus-square"></button>
                                                    <span className="name-order"> Trà xanh rau câu</span>
                                                </Row>
                                                <Row className='note-order'>
                                                    <input type="text" id="txtNote" placeholder="Thêm ghi chú..." />
                                                    <span class="price-order">30,400đ</span>
                                                </Row>
                                            </Row>
                                            <Row className='order-card-item'>
                                                <Row className='clearfix'>
                                                    <button className="fas fa-plus-square"></button>
                                                    <span className="number-order">1</span>
                                                    <button className="fas fa-minus-square"></button>
                                                    <span className="name-order"> Trà xanh rau câu</span>
                                                </Row>
                                                <Row className='note-order'>
                                                    <input type="text" id="txtNote" placeholder="Thêm ghi chú..." />
                                                    <span class="price-order">30,400đ</span>
                                                </Row>
                                            </Row>
                                            <Row className='order-card-item'>
                                                <Row className='clearfix'>
                                                    <button className="fas fa-plus-square"></button>
                                                    <span className="number-order">1</span>
                                                    <button className="fas fa-minus-square"></button>
                                                    <span className="name-order"> Trà xanh rau câu</span>
                                                </Row>
                                                <Row className='note-order'>
                                                    <input type="text" id="txtNote" placeholder="Thêm ghi chú..." />
                                                    <span class="price-order">30,400đ</span>
                                                </Row>
                                            </Row>
                                        </Row>
                                        <Row className="row-bill-restaurant">
                                            <Col>Cộng</Col>
                                            <Col className="price">0đ</Col>
                                        </Row>
                                        <Row className="row-bill-restaurant input-promocode">
                                            <p><span>(*)</span>Nhập mã khuyến mãi ở bước hoàn tất</p>
                                        </Row>
                                        <Row className="row-bill-restaurant">
                                            <Col>Tổng Cộng</Col>
                                            <Col className="total-price">0đ</Col>
                                        </Row>
                                        <Button className="btn btn-red" onClick={openOrderModal}>Đặt trước</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Col>
                    <Col className="bill-restaurant"></Col>
                </Container>
            </div>
            <div className='modal'>
                <div className='no-order-modal'>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title><span className='title-modal'>ShopeeFood</span> Thông báo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Vui lòng chọn món!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Ok
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='order-modal'>
                    <Modal
                        show={showOrder}
                        onHide={handleOrderClose}
                        backdrop="static"
                        keyboard={false}
                        className='order-modal'
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Xác nhận đơn hàng</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col md={5} className='order-left'>
                                        <Row className='direction-from'>
                                            <div className='direction-name'>Bún Bò Đất Thánh - Shop Online</div>
                                            <div className='direction-address'>221/16 Đất Thánh, P. 6, Tân Bình, TP. HCM</div>
                                        </Row>
                                        <Row className='direction-to'>
                                            <div className='direction-name'>Le Duc Long - 0123456789</div>
                                            <div className='direction-address'>Hoang Mai, Ha Noi</div>
                                        </Row>
                                    </Col>
                                    <Col className='order-right'>
                                        <Row className='title-order'>Chi tiết đơn hàng</Row>
                                        <Row className='order-list'>
                                            <Row className='order-item'>
                                                <Col md={1} className='order-item-number'>1</Col>
                                                <Col md={9} className='order-item-info'>Bún Bò Giò Heo Thịt Chả + Nước Ép Dưa Hấu</Col>
                                                <Col className='order-item-price'>100000đ</Col>
                                            </Row>
                                            <Row className='order-item'>
                                                <Col md={1} className='order-item-number'>2</Col>
                                                <Col md={9} className='order-item-info'>Bún Bò Giò Heo Thịt Chả</Col>
                                                <Col className='order-item-price'>100000đ</Col>
                                            </Row>
                                        </Row>
                                        <Row className='info-order'>
                                            <Row className='info-order-row'>
                                                <Col className='info-order-left'>Tổng cộng <b>3</b> phần</Col>
                                                <Col className='info-order-right'><b>200000đ</b></Col>
                                            </Row>
                                            <Row className='info-order-row'>
                                                <Col className='info-order-left'>Mã khuyến mãi</Col>
                                                <Col className='info-order-right'><b>-0đ</b></Col>
                                            </Row>
                                        </Row>
                                        <Row className='discount-code'>
                                            <Col md={9} className='discount-code-left'>
                                                <span className="text">Mã khuyến mãi</span>
                                                <input type="text" className="input-code" placeholder="Nhập mã" value=""></input>
                                                <button type="button">Áp dụng</button>
                                            </Col>
                                            <Col className='discount-code-right'>
                                                <span className="txt-blue" onClick={viewMyCode}>View my code</span>
                                                <i aria-hidden="true" onClick={viewMyCode}></i>
                                            </Col>
                                        </Row>
                                        <Row className='final-price'>
                                            <Col className='final-price-left'>Tổng cộng <b>3</b> phần</Col>
                                            <Col className='final-price-right'><b>200000đ</b></Col>
                                        </Row>
                                        <Row className='payment-method'>
                                            <Col md={10} className='payment-method-left'><span className="text">Tiền Mặt</span></Col>
                                            <Col className='payment-method-right'>
                                                <span className="txt-blue">Thay đổi</span>
                                                <i aria-hidden="true"></i>
                                            </Col>
                                        </Row>
                                        <Row className='order-note'>
                                            <textarea placeholder="Ví dụ: Tòa nhà ABC, lầu 8, cho thêm 2 ly nhựa...." name="note"></textarea>
                                        </Row>
                                        <Row className='not-vat'>
                                            <span className="txt-gray">Không xuất hoá đơn VAT</span>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleOrderClose}>
                                <div className="submit-order">Đặt hàng <i className="fas fa-arrow-right"></i></div>
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className='discount-modal'>
                <Modal
                    show={showDiscount}
                    onHide={handleDiscountClose}
                    backdrop="static"
                    keyboard={false}
                    className='discount-modal'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Mã khuyến mãi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row className='modal-order-discount-row'>
                                <Col md={1} className='modal-order-discount-icon'></Col>
                                <Col className='modal-order-discount-code'>SIEUTIEC10</Col>
                                <Col className='modal-order-discount-price'>Giảm giá: <span className='price'>10,000đ</span></Col>
                                <Col className='modal-order-discount-minprice'>Đặt tối thiểu: <span className='price'>20,000đ</span></Col>
                                <Col className='modal-order-discount-apply'>
                                    <button onClick={applyDiscountCode}>Áp dụng</button>
                                </Col>
                            </Row>
                            <Row className='modal-order-discount-row'>
                                <Col md={1} className='modal-order-discount-icon'></Col>
                                <Col className='modal-order-discount-code'>SIEUTIEC10</Col>
                                <Col className='modal-order-discount-price'>Giảm giá: <span className='price'>10,000đ</span></Col>
                                <Col className='modal-order-discount-minprice'>Đặt tối thiểu: <span className='price'>20,000đ</span></Col>
                                <Col className='modal-order-discount-apply'>
                                    <button onClick={applyDiscountCode}>Áp dụng</button>
                                </Col>
                            </Row>
                            <Row className='modal-order-discount-row'>
                                <Col md={1} className='modal-order-discount-icon'></Col>
                                <Col className='modal-order-discount-code'>SIEUTIEC10</Col>
                                <Col className='modal-order-discount-price'>Giảm giá: <span className='price'>10,000đ</span></Col>
                                <Col className='modal-order-discount-minprice'>Đặt tối thiểu: <span className='price'>20,000đ</span></Col>
                                <Col className='modal-order-discount-apply'>
                                    <button onClick={applyDiscountCode}>Áp dụng</button>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Shop;