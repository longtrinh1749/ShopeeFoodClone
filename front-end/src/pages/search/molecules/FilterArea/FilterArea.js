import { useListDistrict } from 'api/search';
import { useStore } from 'hook/useStore';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDistrictList, updateFilterStatus } from 'redux/actions/search';
import AreaListItem from '../../atoms/FilterListItem/FilterListItem';

const FilterArea = () => {
    const dispatch = useDispatch();
    const { districtList } = useStore("Search", "districtReducer");
    const { filterDistrict, filterCategory } = useStore("Search", "filterReducer");
    const { execute, isLoading, response, error } = useListDistrict();
    useEffect(() => {
        execute({
            cbSuccess: (res) => {
                dispatch(getDistrictList({ districtList: res.data }));
            },
        });
    }, []);

    const showFilterDistrict = () => {
        dispatch(updateFilterStatus({filterDistrict: !filterDistrict, filterCategory: false}));
    }
    return (
        <div className="filter_area filter_item">
            <div className="filter_item-btn" onClick={showFilterDistrict}>
                Khu vực <i className="las la-angle-down"></i>
            </div>
            <div className={`filter_item-list ${filterDistrict ? 'filter_item-active' : ''}`}>
                {
                    districtList.map(district => {
                        return < AreaListItem key={district.districtId} id={district.districtId} label={district.districtName} />
                    })
                }
            </div>
        </div>
    );
}

export default FilterArea;
