import { Container } from "react-bootstrap";
import "./promotion.scss";

const Promotion = ({ item }) => {
    return (
        <div className="promotion-item">
            <Container>
                <Col className="promotion-img"><img src={ item.img }/></Col>
                <Col className="promotion-content">{ item.content }</Col>
                <Col className="btn-copy-code"> Copy Code <span><img src=""/></span> </Col>
            </Container>
        </div>
    );
};

export default Promotion;
