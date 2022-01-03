import "./style.scss";

export const OrderModalNotice = () => {
    return (
        <div
            className="modal fade"
            id="oder_detail_notice"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Thông báo
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <img src="./images/success.png" alt="" />
                        <div className="alert alert-success" role="alert">
                            <p>Thành công</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
