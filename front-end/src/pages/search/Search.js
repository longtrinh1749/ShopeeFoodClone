import Pagination from './molecules/Pagination/Pagination';
import Filter from './orgamisms/Filter/Filter';
import SearchList from './orgamisms/SearchList/SearchList';

const Search = () => {
    return (
        <div className="search">
            <div className="container">
                <Filter />
                <SearchList />
                <Pagination />
            </div>
        </div>
    );
}

export default Search;
