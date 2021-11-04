import React from 'react';

const AreaListItem = ({title}) => {
    return (
        <div className="area-list_item">
            <input type="checkbox" id="item" />
            <label htmlFor="item">{title}</label>
        </div>
    );
}

export default AreaListItem;
