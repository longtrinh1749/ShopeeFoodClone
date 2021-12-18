import Map from "./orgamisms/Map/Map";
import Order from "./orgamisms/Order/Order";

const Shipper = () => {
    return (
        <div className="shipper mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <Order />
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipper;