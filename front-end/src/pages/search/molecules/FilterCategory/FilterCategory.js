import "./filter-category.scss";
import FilterListItem from "../../atoms/FilterListItem/FilterListItem";
import { useStore } from "hook/useStore";
import { useDispatch } from "react-redux";
import { updateFilterStatus } from "redux/actions/search";
import { getCategoryList } from "redux/actions/home";
import { useListCategory } from "api/home";
import { useEffect } from "react";

const FilterCategory = () => {
     const dispatch = useDispatch();
    const { filterDistrict, filterCategory } = useStore("Search", "filterReducer");
    const { categoryList } = useStore("Home", "categoryReducer");
    const { execute, isLoading, response, error } = useListCategory();
    useEffect(() => {
        execute({
            cbSuccess: (res) => {
                dispatch(getCategoryList({ categoryList: res.data }));
            },
        });
    }, []);
    const showFilterCategory = () => {
        dispatch(updateFilterStatus({filterDistrict: false, filterCategory: !filterCategory}));
    }

    return (
        <div className="filter_category filter_item">
            <div className={`filter_item-btn ${
                    filterCategory ? "filter_item-btn-active" : ""
                }`} onClick={showFilterCategory}>
                Phân loại <i className="las la-angle-down"></i>
            </div>
            <div
                className={`filter_item-list ${
                    filterCategory ? "filter_item-active" : ""
                }`}
            >
                {
                    categoryList.map(category => {

                        return <FilterListItem  key={category.catId} id={category.catId} label={category.catName}  />
                    })
                }
            </div>
        </div>
    );
};

export default FilterCategory;
