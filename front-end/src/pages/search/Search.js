import Filter from "./orgamisms/Filter/Filter";
import SearchList from "./orgamisms/SearchList/SearchList";
import "./search.scss";

const Search = (props) => {
    return (
        <div className="search">
            {/* <div className="search_wrap" onClick={handleSearch}></div> */}
            <div className="container">
                <Filter />
                <SearchList />
            </div>
        </div>
    );
};

export default Search;
