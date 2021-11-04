import React from 'react';
import AreaListItem from '../../atoms/AreaListItem/AreaListItem';

const FilterCategory = () => {
    return (
        <div className="filter_category filter_item">
            <div className="filter_item-btn">
                Phân loại <i className="las la-angle-down"></i>
            </div>
            <div className="filter_item-list">
                <AreaListItem />
                <AreaListItem />
                <AreaListItem />
                <AreaListItem />
                <AreaListItem />
            </div>
        </div>
    );
}

export default FilterCategory;
