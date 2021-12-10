import "./style.scss";

const Map = () => {
    return (
        <div className="map">
            <div className="map_gg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2192712213932!2d105.8181499513488!3d20.98384579461541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf3ac9a49ef%3A0x5b78fa754b6f3955!2zMzEzIELDuWkgWMawxqFuZyBUcuG6oWNoLCDEkOG7i25oIEPDtG5nLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1638935359456!5m2!1svi!2s"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    title="map"
                ></iframe>
            </div>
            <div className="map_location">
                <div className="map_location-start">
                    <div className="location-label"></div>
                    <div className="start-address">
                        <p>Bếp Mẹ Gấu - Quán Ăn Vặt - Hoàng Mai</p>
                        <p>45 Ngách 59 Ngõ 197 Hoàng Mai, P. Hoàng Văn Thụ, Hoàng Mai, Hà Nội</p>
                    </div>
                </div>
                <div className="map_location-end">
                    <div className="location-label"></div>
                    <div className="end-address">
                        <p className="user-name">abc123 - 012345678</p>
                        <p className="user-address">P. Hoàng Văn Thụ, Quận Hoàng Mai, Thành Phố Hà Nội, Vietnam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
