import { Container, Col, Row } from "react-bootstrap";
import "./itemShop.scss";

const ItemShop = ({ item }) => {
    function addToCart() {
        // foodObj['quantity'] = parseInt(document.getElementById("quantity-mobiles").value);
        // //console.log(foodObj);
        // var mobiles = [];
        // if (sessionStorage.getItem("mobiles") !== null) {
        //     mobiles = JSON.parse(sessionStorage.getItem("mobiles"));
        //     //console.log(mobiles);
        //     var tmpMobile = mobiles.find(mobile => mobile['id'] == foodObj['id']);
        //     if (tmpMobile) {
        //         tmpMobile['quantity'] += foodObj['quantity'];
        //     } else {
        //         mobiles.push(foodObj);
        //     }
        // } else {
        //     mobiles.push(foodObj);
        // }
        // sessionStorage.setItem("mobiles", JSON.stringify(mobiles));
        // alert("Successfully added to cart!");
    }
    return (
        <div>
            <Container className="item-shop">
                <Row>
                    <Col className="item-shop-image">
                        <img src="/images/Logo-ShopeefoodVN.png" alt="" width={60} height={60}></img>
                    </Col>
                    <Col md={8} className="item-shop-name">
                        <Row className="item-shop-itemname">{item.itemName}</Row>
                    </Col>
                    <Col className="item-shop-price">
                        <Row className="old-price">{item.price}đ</Row>
                        <Row className="new-price">{item.price}đ</Row>
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
