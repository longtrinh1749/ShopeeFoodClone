import { Container, Col, Row } from "react-bootstrap";
import "./itemShop.scss";

const ItemShop = ( props ) => {
    function addToCart() {
        props.setCartItems([...props.cartItems, props.item]);
        props.setTotalPrice(props.totalPrice + props.item.price);
    }

    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    return (
        <div>
            <Container className="item-shop">
                <Row>
                    <Col className="item-shop-image">
                        <img src="/images/Logo-ShopeefoodVN.png" alt="" width={60} height={60}></img>
                    </Col>
                    <Col md={8} className="item-shop-name">
                        <Row className="item-shop-itemname">{props.item.itemName}</Row>
                    </Col>
                    <Col className="item-shop-price">
                        <Row className="old-price">{numberWithCommas(props.item.price)}đ</Row>
                        <Row className="new-price">{numberWithCommas(props.item.price)}đ</Row>
                    </Col>
                    <Col md={1} className="item-shop-add-btn">
                        <span className="btn-add-to-cart" onClick={addToCart}>+</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ItemShop;
