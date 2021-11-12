import './filter-sort.scss';

const FilterSort = () => {
    return (
        <div className="filter_sort">
            <p className="filter_sort-result">200 kết quả</p>
            <div className="filter_sort-dropdown">
            <button
                className="btn dropdown-toggle header_dropdown"
                type="button"
                id="filter-sort"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Hà Nội
            </button>
            <ul
                className="dropdown-menu"
                aria-labelledby="filter-sort"
            >
                <li>
                    <a className="dropdown-item" href="/">
                        Action
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
}

export default FilterSort;
