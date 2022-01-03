import { useStore } from "hook/useStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTabId, reloadData } from "redux/actions/shipper";
import { OrderModal } from "./atoms/OrderModal";
import { OrderModalNotice } from "./atoms/OrderModalNotify";
import AssignedOrder from "./orgamisms/AssignedOrder";
import CompletedOrder from "./orgamisms/CompletedOrder";
import ConfirmedOrder from "./orgamisms/ConfirmedOrder";
import "./style.scss";

const Shipper = () => {
    const dispatch = useDispatch();
    const { reload } = useStore("Shipper", "orderReloadReducer");
    const { tabId } = useStore("Shipper", "orderTabReducer");

    const setTabId = (id) => {
        dispatch(changeTabId({ tabId: id }));
    }

    useEffect(() => {
        if(reload)
        {
            dispatch(reloadData({reload: false}));
        }
    }, [tabId, reload]);

    return (
        <div className="shipper mt-5">
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                            onClick={() => setTabId(1)}
                        >
                            Đơn hàng
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                            onClick={() => setTabId(2)}
                        >
                            Đơn đang nhận
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                            onClick={() => setTabId(3)}
                        >
                            Đơn đã hoàn thành
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                    >
                        {tabId === 1 ? <ConfirmedOrder /> : <></> }
                        {/* <ConfirmedOrder /> */}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                    >
                        {tabId === 2 ? <AssignedOrder /> : <></> }
                    </div>
                    <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                    >
                        {tabId === 3 ? <CompletedOrder /> : <></> }
                    </div>
                </div>
                <OrderModal tabId={tabId}/>
                <OrderModalNotice/>
            </div>
        </div>
    );
};

export default Shipper;
