import "./filter-category.scss";
import FilterListItem from "../../atoms/FilterListItem/FilterListItem";

const FilterCategory = ({active, setActive}) => {

    const filterActive = () => {
        setActive(!active);
    };

    return (
        <div className="filter_category filter_item">
            <div className={`filter_item-btn ${
                    active ? "filter_item-btn-active" : ""
                }`} onClick={filterActive}>
                Phân loại <i className="las la-angle-down"></i>
            </div>
            <div
                className={`filter_item-list ${
                    active ? "filter_item-active" : ""
                }`}
            >
                <FilterListItem title={"Đồ ăn"} />
                <FilterListItem title={"Đồ ăn"} />
                <FilterListItem title={"Đồ ăn"} />
                <FilterListItem title={"Đồ ăn"} />
                <FilterListItem title={"Đồ ăn"} />
            </div>
        </div>
    );
};

export default FilterCategory;
