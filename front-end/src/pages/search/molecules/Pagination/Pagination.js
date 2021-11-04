import "./pagination.scss";

const Pagination = () => {
    return (
        <div className="pagination">
            <div className="container">
                <ul className="pagination_list">
                    <li className="pagination_prev pagination_item">
                        <i className="las la-angle-left"></i>
                    </li>
                    <li className="pagination_item pagination_item-active">
                        <a href="/">1</a>
                    </li>
                    <li className="pagination_item">
                        <a href="/">2</a>
                    </li>
                    <li className="pagination_item">
                        <a href="/">3</a>
                    </li>
                    <li className="pagination_item">
                        <a href="/">4</a>
                    </li>
                    <li className="pagination_item">
                        <a href="/">5</a>
                    </li>
                    <li className="pagination_item">
                        <a href="/">6</a>
                    </li>
                    <li className="pagination_next">
                        <i className="las la-angle-right"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;
