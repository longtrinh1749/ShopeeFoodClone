import { stringToSlug } from 'helpers/function/buildSlug';
import React from 'react';

const FilterListItem = ({id , label}) => {
    id = stringToSlug(`${label} ${id}`);
    return (
        <div className="area-list_item">
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default FilterListItem;
