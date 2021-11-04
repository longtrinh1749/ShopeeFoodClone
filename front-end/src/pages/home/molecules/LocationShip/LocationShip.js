import './location-ship.scss';

const LocationShip = () => {
    return (
        <div className="location-ship">
            <p className="location-ship_category">
                Đồ ăn
            </p>
            <i className="fas fa-long-arrow-alt-right"></i>
            <p className="location-ship_location">
                Chọn địa chỉ giao hàng
            </p>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
}

export default LocationShip;
