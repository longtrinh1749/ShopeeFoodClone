import { Link } from "react-router-dom";
import { useState } from "react";
import "./search.scss";

const Search = () => {
    const [input, setInput] = useState("");

    return (
        <>
            <form action="" className="search_form">
                <input
                    type="text"
                    placeholder="Tìm địa điểm, món ăn, địa chỉ..."
                    onChange={(e) => setInput(e.target.value)}
                />
                <Link to={`/danh-sach?name=${input}`}>
                    <button>
                        <i className="las la-search"></i>
                    </button>
                </Link>
            </form>
        </>
    );
};

export default Search;
