import './shop.scss'
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import ItemShop from '../../components/ItemShop/ItemShop';
import Promotion from 'components/Promotion/promotion';


const Shop = (props) => {
    const navigate = useNavigate();

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
    const tmpSection = "";
    
    useEffect(() => {
        setApplyVoucher({voucherCode: "", discount: 0});
        getShopData();
        getShopSection();
        getShopItemData();
        getUserInfo();
    }, [props.user]);

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
                if ( response.data.data.result !== 'not found')
                setSections(response.data.data);
                if (response.data.data == "section not found not existed") {
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
                if (response.data.data == "Category not found not existed") {
                    setShopItems([]);
                }
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
        if (totalPrice > vouchers[index].limitPrice) {
            handleDiscountClose();
            setApplyVoucher({
                voucherCode: vouchers[index].voucherCode,
                discount: vouchers[index].discount | 0,
            });
        }
    }

    function placeOrder() {
        handleOrderClose();
        let saleFormList = [];
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
            total: totalPrice - applyVoucher.discount,
            saleFormList: saleFormList,
        }
        axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}:8600//api/v1/public/order/upload`, newOrder)
            .then((response) => {
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error)
            });

        navigate("/order-history");
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

    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
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
                            <Row className="rating"><span className="rating-number">50+</span>????nh gi?? tr??n ShopeeFood</Row>
                            <Row className="status-restaurant">
                                <Col md={2} className="opentime">M??? C???a</Col>
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
                        <Row className="menu-restaurant-tab">TH???C ????N</Row>
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
                                            {vouchers.map((voucher, index) => (
                                                <Promotion key={index} item={voucher} />
                                            ))}
                                        </Row>
                                        <Row className="search-items">
                                            <img src="" alt="" />
                                            <input placeholder="T??m M??n"></input>
                                        </Row>
                                        <Row className="menu-restaurant-list">
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
                                                        <input type="text" id="txtNote" placeholder="Th??m ghi ch??..." />
                                                        <span class="price-order">{numberWithCommas(cartItem.price)}</span>
                                                    </Row>
                                                </Row>
                                            ))}
                                        </Row>
                                        <Row className="row-bill-restaurant">
                                            <Col>C???ng</Col>
                                            <Col className="price">{numberWithCommas(totalPrice)}??</Col>
                                        </Row>
                                        <Row className="row-bill-restaurant input-promocode">
                                            <p><span>(*)</span>Nh???p m?? khuy???n m??i ??? b?????c ho??n t???t</p>
                                        </Row>
                                        <Row className="row-bill-restaurant">
                                            <Col>T???ng C???ng</Col>
                                            <Col className="total-price">{numberWithCommas(totalPrice)}??</Col>
                                        </Row>
                                        <Button className="btn btn-red" onClick={openOrderModal}>?????t tr?????c</Button>
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
                            <Modal.Title><span className='title-modal'>ShopeeFood</span> Th??ng b??o</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Vui l??ng ch???n m??n!</Modal.Body>
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
                            <Modal.Title>X??c nh???n ????n h??ng</Modal.Title>
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
                                        <Row className='title-order'>Chi ti???t ????n h??ng</Row>
                                        <Row className='order-list'>
                                            {cartItems.map((cartItems, index) => (
                                                <Row key={index} className='order-item'>
                                                    <Col md={1} className='order-item-number'>{1}</Col>
                                                    <Col md={9} className='order-item-info'>{cartItems.itemName}</Col>
                                                    <Col className='order-item-price'>{numberWithCommas(cartItems.price)}??</Col>
                                                </Row>
                                            ))}
                                        </Row>
                                        <Row className='info-order'>
                                            <Row className='info-order-row'>
                                                <Col className='info-order-left'>T???ng c???ng <b>{cartItems.length}</b> ph???n</Col>
                                                <Col className='info-order-right'><b>{numberWithCommas(totalPrice)}??</b></Col>
                                            </Row>
                                            <Row className='info-order-row'>
                                                <Col className='info-order-left'>M?? khuy???n m??i</Col>
                                                <Col className='info-order-right'><b>-{applyVoucher.discount}??</b></Col>
                                            </Row>
                                        </Row>
                                        <Row className='discount-code'>
                                            <Col md={9} className='discount-code-left'>
                                                <span className="text">M?? khuy???n m??i</span>
                                                <input type="text" className="input-code" placeholder="Nh???p m??" value={applyVoucher.voucherCode}></input>
                                                <button type="button">??p d???ng</button>
                                            </Col>
                                            <Col className='discount-code-right'>
                                                <span className="txt-blue" onClick={viewMyCode}>View my code</span>
                                                <i aria-hidden="true" onClick={viewMyCode}></i>
                                            </Col>
                                        </Row>
                                        <Row className='final-price'>
                                            <Col className='final-price-left'>T???ng c???ng <b>{cartItems.length}</b> ph???n</Col>
                                            <Col className='final-price-right'><b>{numberWithCommas(totalPrice - applyVoucher.discount)}</b></Col>
                                        </Row>
                                        <Row className='payment-method'>
                                            <Col md={10} className='payment-method-left'><span className="text">Ti???n M???t</span></Col>
                                            <Col className='payment-method-right'>
                                                <span className="txt-blue">Thay ?????i</span>
                                                <i aria-hidden="true"></i>
                                            </Col>
                                        </Row>
                                        <Row className='order-note'>
                                            <textarea className='note' placeholder="V?? d???: T??a nh?? ABC, l???u 8, cho th??m 2 ly nh???a...." name="note"></textarea>
                                        </Row>
                                        <Row className='not-vat'>
                                            <span className="txt-gray">Kh??ng xu???t ho?? ????n VAT</span>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={placeOrder}>
                                <div className="submit-order">?????t h??ng <i className="fas fa-arrow-right"></i></div>
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
                        <Modal.Title>M?? khuy???n m??i</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            {vouchers.map((voucher, index) => (
                                <Row key={index} index={index} className='modal-order-discount-row'>
                                    <Col md={1} className='modal-order-discount-icon'></Col>
                                    <Col className='modal-order-discount-code'>{voucher.voucherCode}</Col>
                                    <Col className='modal-order-discount-price'>Gi???m gi??: <span className='price'>{numberWithCommas(voucher.discount)}??</span></Col>
                                    <Col className='modal-order-discount-minprice'>?????t t???i thi???u: <span className='price'>{numberWithCommas(voucher.limitPrice)}??</span></Col>
                                    <Col className='modal-order-discount-apply'>
                                        <button onClick={() => applyDiscountCode(index)}>??p d???ng</button>
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