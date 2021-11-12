import { useState } from "react";
import Pagination from "./molecules/Pagination/Pagination";
import Filter from "./orgamisms/Filter/Filter";
import SearchList from "./orgamisms/SearchList/SearchList";
import "./search.scss";

const Search = () => {
    const [active, setActive] = useState(false);

    const handleSearch = () => {
        setActive(false);
    };

    return (
        <div className="search">
            <div className="search_wrap" onClick={handleSearch}></div>
            <div className="container">
                <Filter active={active} setActive={setActive} />
                <SearchList />
                <Pagination />
            </div>
        </div>
    );
};

export default Search;
