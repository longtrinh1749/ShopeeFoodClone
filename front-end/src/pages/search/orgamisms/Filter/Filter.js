import "./filter.scss";
import FilterArea from "../../molecules/FilterArea/FilterArea";
import FilterCategory from "../../molecules/FilterCategory/FilterCategory";
import FilterSort from "../../molecules/FilterSort/FilterSort";

const Filter = ({active, setActive}) => {
    return (
        <div className="filter">
            <div className="filter_left">
                {/* <FilterArea /> */}
                <FilterCategory  active={active} setActive={setActive}/>
            </div>
            <div className="filter_right">
                <FilterSort />
            </div>
        </div>
    );
};

export default Filter;
