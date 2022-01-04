import { Container, Col, Row } from "react-bootstrap";
import "./promotion.scss";

const Promotion = ( props ) => {
    return (
        <div className="promotion-item">
            <Container>
                <Row>
                    <Col md={1} className="promotion-img"><img src="/images/Logo-ShopeefoodVN.png" alt="" width={60} height={60}></img></Col>
                    <Col md={8} className="promotion-content">{props.item.description}</Col>
                    <Col md={2} className="btn-copy-code"> Copy Code <span class="fa fa-copy"></span></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Promotion;
