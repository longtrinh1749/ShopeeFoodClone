import "./search-list.scss";
import Item from "../../../../components/Item/Item";
import { listItem } from "../../../../data/listItem";

const SearchList = () => {
    return (
        <div className="search-list">
            <div className="container">
                <div className=" search-list_list">

                {listItem.map((e, k) => (
                    <Item key={k} item={e} />
                    ))}
                {listItem.map((e, k) => (
                    <Item key={k} item={e} />
                    ))}
                        </div>
            </div>
        </div>
    );
};

export default SearchList;
