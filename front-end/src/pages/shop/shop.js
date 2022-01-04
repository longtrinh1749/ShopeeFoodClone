import './shop.scss'
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import ItemShop from '../../components/ItemShop/ItemShop';


const Shop = (props) => {
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
    const [shop, setShop] = useState(0);
    const [sections, setSections] = useState([]);
    const [shopItems, setShopItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [userInfo, setUserInfo] = useState({});
    const [vouchers, setVouchers] = useState([]);
    const [applyVoucher, setApplyVoucher] = useState([
        {
            voucherCode: "",
            discount: 0,
        }
    ]);

    useEffect(() => {
        setApplyVoucher({voucherCode: "", discount: 0});
        getShopData();
        getShopSection();
        getShopItemData();
        getUserInfo();
    }, []);

    function getShopData() {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/shop/` + shopId)
            .then((response) => {
                let shop = response.data.data;
                setShop(shop);
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function getShopSection() {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/section/shop?shopId=` + shopId)
            .then((response) => {
                setSections(response.data.data);
                if (response.data.data == null) {
                    setSections([]);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function getShopItemData() {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8500/api/v1/public/item/shop?shopId=` + shopId)
            .then((response) => {
                setShopItems(response.data.data);
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function getUserInfo() {
        let config = {
            headers: {
                Authorization: props.user.headerKey
            }
        }
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8400/v1/user`, config)
            .then((res) => {
                console.log(res.data.data);
                setUserInfo(res.data.data);
                getVoucher(res.data.data.userId)
            })
    }

    function getVoucher(userId) {
        axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}:8600/api/v1/public/voucher/applied?applyType=user&applyToId=` + userId)
            .then((response) => {
                console.log(response.data.data);
                setVouchers(response.data.data);
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function openOrderModal() {
        if (cartItems.length == 0) {
            handleShow();
        } else {
            handleOrderShow();
        }
    }

    function viewMyCode() {
        handleDiscountShow();
    }

    function applyDiscountCode(index) {
        handleDiscountClose();
        setApplyVoucher({
            voucherCode: vouchers[index].voucherCode,
            discount: vouchers[index].discount | 0,
        });
    }

    function placeOrder() {
        handleOrderClose();
        let saleFormList = [];
        console.log(cartItems)
        cartItems.forEach((cartItem) => {
            saleFormList.push({itemId: cartItem.itemId, quantity: 1})
        });
        let newOrder = {
            statusId: 1,
            customerId: userInfo.userId,
            shopId: shopId,
            orderAt: '2022-01-06T22:27:00.000+0000',
            deliveryAddress: userInfo.address,
            deliveryDistrict: userInfo.district,
            note: document.getElementsByClassName('note')[0].innerHTML,
            shippingFees: 0,
            discount: applyVoucher.discount,
            total: totalPrice,
            saleFormList: saleFormList,
        }
        axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}:8600//api/v1/public/order/upload`, newOrder)
            .then((response) => {
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    function plusClick() {
        document.getElementsByClassName('number-order').innerHTML = parseInt(document.getElementsByClassName('number-order').innerHTML) + 1;
    }

    function minusClick(index) {
        // if (document.getElementsByClassName('number-order').innerHTML == '1') {
        //     let tmpArray = cartItems;
        //     tmpArray.slice(index, 1);
        //     console.log(tmpArray);
        //     setCartItems(tmpArray);
        // }
        // document.getElementsByClassName('number-order').innerHTML = parseInt(document.getElementsByClassName('number-order').innerHTML) - 1;
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
                                    <Breadcrumb.Item className="breadcrumb-link" id='breadcrum-shop-name'>{shop.shopName}</Breadcrumb.Item>
                                </Breadcrumb>
                            </Row>
                            <Row className='kind-restaurant'>Shop Online</Row>
                            <Row className="name-restaurant">{shop.shopName}</Row>
                            <Row className="address-restaurant">{shop.address}</Row>
                            <Row className="rating"><span className="rating-number">50+</span>đánh giá trên ShopeeFood</Row>
                            <Row className="status-restaurant">
                                <Col md={2} className="opentime">Mở Cửa</Col>
                                <Col className="time"><i className="far fa-clock"></i>06:00 - 22:00</Col>
                            </Row>
                            <Row className="cost-restaurant"><i class="fas fa-dollar-sign"></i>{shop.priceRange}</Row>

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
                                        {sections.map((section, index) => (
                                            <div key={index} className="row item-link">{section.sectionName}</div>
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
                                            {shopItems.map((shopItem, index) => (
                                                <ItemShop key={index} item={shopItem} cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                                            ))}
                                        </Row>
                                    </Col>
                                    <Col className="now-bill-restaurant">
                                        <Row className='order-card-group'>
                                            {cartItems.map((cartItem, index) => (
                                                <Row key={index} index={index} className='order-card-item'>
                                                    <Row className='clearfix'>
                                                        <button className="fas fa-plus-square" onClick={plusClick}></button>
                                                        <span className="number-order">1</span>
                                                        <button className="fas fa-minus-square" onClick={minusClick(index)}></button>
                                                        <span className="name-order">{cartItem.itemName}</span>
                                                    </Row>
                                                    <Row className='note-order'>
                                                        <input type="text" id="txtNote" placeholder="Thêm ghi chú..." />
                                                        <span class="price-order">{cartItem.price}</span>
                                                    </Row>
                                                </Row>
                                            ))}
                                        </Row>
                                        <Row className="row-bill-restaurant">
                                            <Col>Cộng</Col>
                                            <Col className="price">{totalPrice}đ</Col>
                                        </Row>
                                        <Row className="row-bill-restaurant input-promocode">
                                            <p><span>(*)</span>Nhập mã khuyến mãi ở bước hoàn tất</p>
                                        </Row>
                                        <Row className="row-bill-restaurant">
                                            <Col>Tổng Cộng</Col>
                                            <Col className="total-price">{totalPrice}đ</Col>
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
                                            <div className='direction-name'>{shop.shopName}</div>
                                            <div className='direction-address'>{shop.address}</div>
                                        </Row>
                                        <Row className='direction-to'>
                                            <div className='direction-name'>{userInfo.name} - {userInfo.phone}</div>
                                            <div className='direction-address'>{userInfo.address}</div>
                                        </Row>
                                    </Col>
                                    <Col className='order-right'>
                                        <Row className='title-order'>Chi tiết đơn hàng</Row>
                                        <Row className='order-list'>
                                            {cartItems.map((cartItems, index) => (
                                                <Row key={index} className='order-item'>
                                                    <Col md={1} className='order-item-number'>{1}</Col>
                                                    <Col md={9} className='order-item-info'>{cartItems.itemName}</Col>
                                                    <Col className='order-item-price'>{cartItems.price}đ</Col>
                                                </Row>
                                            ))}
                                        </Row>
                                        <Row className='info-order'>
                                            <Row className='info-order-row'>
                                                <Col className='info-order-left'>Tổng cộng <b>{cartItems.length}</b> phần</Col>
                                                <Col className='info-order-right'><b>{totalPrice}đ</b></Col>
                                            </Row>
                                            <Row className='info-order-row'>
                                                <Col className='info-order-left'>Mã khuyến mãi</Col>
                                                <Col className='info-order-right'><b>-{applyVoucher.discount}đ</b></Col>
                                            </Row>
                                        </Row>
                                        <Row className='discount-code'>
                                            <Col md={9} className='discount-code-left'>
                                                <span className="text">Mã khuyến mãi</span>
                                                <input type="text" className="input-code" placeholder="Nhập mã" value={applyVoucher.voucherCode}></input>
                                                <button type="button">Áp dụng</button>
                                            </Col>
                                            <Col className='discount-code-right'>
                                                <span className="txt-blue" onClick={viewMyCode}>View my code</span>
                                                <i aria-hidden="true" onClick={viewMyCode}></i>
                                            </Col>
                                        </Row>
                                        <Row className='final-price'>
                                            <Col className='final-price-left'>Tổng cộng <b>{cartItems.length}</b> phần</Col>
                                            <Col className='final-price-right'><b>{totalPrice - applyVoucher.discount}</b></Col>
                                        </Row>
                                        <Row className='payment-method'>
                                            <Col md={10} className='payment-method-left'><span className="text">Tiền Mặt</span></Col>
                                            <Col className='payment-method-right'>
                                                <span className="txt-blue">Thay đổi</span>
                                                <i aria-hidden="true"></i>
                                            </Col>
                                        </Row>
                                        <Row className='order-note'>
                                            <textarea className='note' placeholder="Ví dụ: Tòa nhà ABC, lầu 8, cho thêm 2 ly nhựa...." name="note"></textarea>
                                        </Row>
                                        <Row className='not-vat'>
                                            <span className="txt-gray">Không xuất hoá đơn VAT</span>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={placeOrder}>
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
                            {vouchers.map((voucher, index) => (
                                <Row key={index} index={index} className='modal-order-discount-row'>
                                    <Col md={1} className='modal-order-discount-icon'></Col>
                                    <Col className='modal-order-discount-code'>{voucher.voucherCode}</Col>
                                    <Col className='modal-order-discount-price'>Giảm giá: <span className='price'>{voucher.discount}đ</span></Col>
                                    <Col className='modal-order-discount-minprice'>Đặt tối thiểu: <span className='price'>{voucher.limitPrice}đ</span></Col>
                                    <Col className='modal-order-discount-apply'>
                                        <button onClick={() => applyDiscountCode(index)}>Áp dụng</button>
                                    </Col>
                                </Row>
                            ))}
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