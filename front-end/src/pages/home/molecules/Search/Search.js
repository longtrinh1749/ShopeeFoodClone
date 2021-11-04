import './search.scss';

const Search = () => {
    return (
        <>
            <form action="" className="search_form">
                <input type="text"  placeholder="Tìm địa điểm, món ăn, địa chỉ..."/>
                <button><i className="las la-search"></i></button>
            </form>
        </>
    );
}

export default Search;
