import "./search-list.scss";
import Item from "../../../../components/Item/Item";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStore } from "hook/useStore";
import { useListShopByFilter } from "api/home";
import React, { useEffect } from "react";
import { setShopList } from "redux/actions/home";
import Pagination from "pages/search/molecules/Pagination/Pagination";
import { useState } from "react";


function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const SearchList = () => {
    let query = useQuery();
    let category = useParams();
    let params = {};
    if(!category.categoryId)
    {
        let name = query.get("name").split('=');
        params = {
            districtList: "",
            categoryList: "",
            name: name.pop(),
            page: 0,
            size: 11,
        }
    }
    else
    {
        let categoryArr = category.categoryId.split("-");
        let categoryId = categoryArr.pop();
        params = {
            districtList: "",
            categoryList: categoryId,
            name: "",
            page: 0,
            size: 11,
        }
    }

    

    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const { shopList } = useStore("Home", "shopReducer");
    const { execute, isLoading, response, error } = useListShopByFilter();
    useEffect(() => {
        execute({
            params,
            cbSuccess: (res) => {
                // console.log(res);
                // setTotalPage(res.)
                dispatch(setShopList({ shopList: res.data.content }));
            },
        });
    }, []);

    const makePaginate= () => {
        let paginate=[];
        for(let i=1; i<= totalPage; i++)
        {
            paginate.push(
                <li key={i} className={`pagination_item ${i=== currentPage ? 'pagination_item-active' : ''}`}>
                    <a href="/">1</a>
                </li>
            )
        }

        return paginate;
    }

    return (
        <>
            <div className="search-list">
                <div className="container">
                    <div className=" search-list_list">
                        {shopList.map((e, k) => (
                            <Item key={k} item={e} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="pagination">
                <div className="container">
                    <ul className="pagination_list">
                        {makePaginate()}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SearchList;
