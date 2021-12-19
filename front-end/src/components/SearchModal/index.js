import "./style.scss";

const SearchModal = () => {
    return (
        <div
            className="modal fade modal-open"
            id="search-modal"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div
                        className="modal_exit btn-close"
                        data-bs-dismiss="modal"
                    >
                        <i className="las la-times"></i>
                    </div>
                    <div className="modal_img">
                        <img src="/images/bg-search.png" alt="" />
                    </div>
                    <div className="modal_title">
                        Đặt Đồ ăn, giao hàng từ 20'... có 59595 địa điểm ở TP.
                        HCM từ 00:00 - 23:59
                    </div>
                    <div className="modal_input">
                        <form action="">
                            <input type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
