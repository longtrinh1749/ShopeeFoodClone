import { stringToSlug } from 'helpers/function/buildSlug';
import { useStore } from 'hook/useStore';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilterList } from 'redux/actions/search';

const FilterListItem = ({id , label}) => {
    const dispatch = useDispatch();
    const { filterDistrict, filterCategory } = useStore("Search", "dropdownReducer");
    let { filterCategoryList, filterDistrictList } = useStore("Search", "filterReducer");
    id = stringToSlug(`${label} ${id}`);

    const handleClick = (e) => {
        let value = e.target.value;
        let isCheck = e.target.checked;
        let id = value.split("-").pop();
        if(filterDistrict)
        {
            if(isCheck) filterDistrictList.push(id);
            else filterDistrictList = filterDistrictList.filter(item => item !== id)
        }
        if(filterCategory)
        {
            if(isCheck) filterCategoryList.push(id);
            else filterCategoryList = filterCategoryList.filter(item => item !== id)
        }
        dispatch(updateFilterList({filterDistrictList, filterCategoryList}));
    }
    return (
        <div className="area-list_item" >
            <input type="checkbox" id={id} value={id} onClick={(e) => handleClick(e)}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default FilterListItem;
