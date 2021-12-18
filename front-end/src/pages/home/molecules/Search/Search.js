import { Link } from "react-router-dom";
import "./search.scss";

const Search = () => {
    return (
        <>
            <form action="" className="search_form">
                <input
                    type="text"
                    placeholder="Tìm địa điểm, món ăn, địa chỉ..."
                />
                <Link to={"/danh-sach?name=a"}>
                    <button>
                        <i className="las la-search"></i>
                    </button>
                </Link>
            </form>
        </>
    );
};

export default Search;
