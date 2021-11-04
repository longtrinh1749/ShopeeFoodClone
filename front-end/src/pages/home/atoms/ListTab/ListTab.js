import './list-tab.scss';

const ListTab = () => {
    return (
        <div className="list-tab">
            <ul className="list_tabs">
                <li className="list_tabs-active">
                    <a href="/">Gần tôi</a>
                </li>
                <li>
                    <a href="/">Bán chạy</a>
                </li>
                <li>
                    <a href="/">Đánh giá</a>
                </li>
            </ul>
            <div className="list-tab_district">
                <button
                    className="btn dropdown-toggle header_dropdown"
                    type="button"
                    id="location"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Hà Nội
                </button>
                <ul className="dropdown-menu" aria-labelledby="location">
                    <li>
                        <a className="dropdown-item" href="/">
                            Đống Đa
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/">
                            Something else here
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="/">
                            Separated link
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ListTab;
