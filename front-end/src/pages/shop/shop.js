import './shop.scss'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import ItemShop from '../../components/ItemShop/ItemShop';

var itemShop = {
    image: "images/shield.png",
    title: "Bún Bò Giò Heo Thịt Chả + Nước Ép Dưa Hấu",
    discount: 50000,
    price: 100000,
}

const Shop = () => {
    function getAuthenInfo(){
    }
    
    return (
        <div>
        <div className="detail-restaurant-part">
            <Container className="detail-restaurant">
                <Row>
                    <Col className="detail-restaurant-img">
                        <img src="https://images.foody.vn/res/g103/1020115/prof/s640x400/foody-upload-api-foody-mobile-hmzz-200421103141.jpg"></img>
                    </Col>
                    <Col className="detail-restaurant-info">
                        <Row>
                            <Breadcrumb className="breadcrumb">
                                <Breadcrumb.Item className="breadcrumb-link">Home</Breadcrumb.Item>
                                <Breadcrumb.Item className="breadcrumb-link">Hanoi</Breadcrumb.Item>
                                <Breadcrumb.Item className="breadcrumb-link">Bún Bò Đất Thánh - Shop Online</Breadcrumb.Item>
                            </Breadcrumb>
                        </Row>
                        <Row className='kind-restaurant'>Shop Online</Row>
                        <Row className="name-restaurant">Bún Bò Đất Thánh - Shop Online</Row>
                        <Row className="address-restaurant">221/16 Đất Thánh, P. 6, Tân Bình, TP. HCM</Row>
                        <Row className="rating"><span className="rating-number">50+</span>đánh giá trên ShopeeFood</Row>
                        <Row className="status-restaurant">
                            <Col md = {2} className="opentime">Mo Cua</Col>
                            <Col className="time">06:00 - 22:00</Col>
                        </Row>
                        <Row className="cost-restaurant">15,000 - 50,000</Row>

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
                                    <Row className="item-link">MÓN ĐANG GIẢM</Row>
                                    <Row className="item-link">MÓN CHÍNH</Row>
                                    <Row className="item-link">COMBO</Row>
                                </Col>
                                <Col md={7} className="menu-restaurant-detail">
                                    <Row className="promotion-order">
                                    </Row>
                                    <Row className="search-items">
                                        <img src=""/>
                                        <input placeholder="Tìm Món"></input>
                                    </Row>
                                    <Row className="menu-restaurant-list">
                                        <ItemShop item={itemShop}></ItemShop>
                                        <ItemShop item={itemShop}></ItemShop>
                                        <ItemShop item={itemShop}></ItemShop>
                                        <ItemShop item={itemShop}></ItemShop>
                                        <ItemShop item={itemShop}></ItemShop>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Col>
                <Col className="bill-restaurant"></Col>
            </Container>
        </div>
        </div>
    );
}

export default Shop;