import React from 'react';
import AreaListItem from '../../atoms/AreaListItem/AreaListItem';

const FilterArea = () => {
    return (
        <div className="filter_area filter_item">
            <div className="filter_item-btn">
                Khu vực <i className="las la-angle-down"></i>
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

export default FilterArea;
