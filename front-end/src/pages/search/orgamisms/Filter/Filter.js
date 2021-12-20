import "./filter.scss";
import FilterArea from "../../molecules/FilterArea/FilterArea";
import FilterCategory from "../../molecules/FilterCategory/FilterCategory";
import FilterSort from "../../molecules/FilterSort/FilterSort";
import { useStore } from "hook/useStore";
import { useDispatch } from "react-redux";
import { updateFilterStatus } from "redux/actions/search";
import { useEffect } from "react";
import { useListShopByFilter } from "api/home";
import { setShopList } from "redux/actions/home";

const Filter = () => {
    const dispatch = useDispatch();
    const { filterCategoryList, filterDistrictList } = useStore("Search", "filterReducer");
    const { execute, isLoading, response, error } = useListShopByFilter();

    const handleSearch = () => {
        dispatch(updateFilterStatus({filterDistrict: false, filterCategory: false}));
        let category = filterCategoryList.join(",");
        let district = filterDistrictList.join(",");
        execute({
            params : {
                districtList: district,
                categoryList: category,
                name: '',
                page: 0,
                size: 11,
            },
            cbSuccess: (res) => {
                // console.log(res);
                // setTotalPage(res.)
                let shopList = res.data.content ?? [];
                dispatch(setShopList({ shopList }));
            },
        });
    };

    return (
        <div className="filter">
            <div className="filter_left">
                <FilterArea/>
                <FilterCategory/>
                <button className="btn btn-danger"onClick={handleSearch}>Tìm kiếm</button>
            </div>
            {/* <div className="filter_right">
                <FilterSort />
            </div> */}
        </div>
    );
};

export default Filter;
