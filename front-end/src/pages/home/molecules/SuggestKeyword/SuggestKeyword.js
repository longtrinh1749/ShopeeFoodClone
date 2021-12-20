import SuggestKeywordItem from "../../atoms/SuggestKeywordItem/SuggestKeywordItem";
import './suggest-keyword.scss';
import { useDispatch } from "react-redux";
import { useStore } from "hook/useStore";
import { useListCategory } from "api/home";
import { useEffect } from "react";
import { getCategoryList } from "redux/actions/home";

const SuggestKeyword = () => {
    const dispatch = useDispatch();
    const { categoryList } = useStore("Home", "categoryReducer");
    const { execute, isLoading, response, error } = useListCategory();
    useEffect(() => {
        execute({
            cbSuccess: (res) => {
                dispatch(getCategoryList({ categoryList: res.data }));
            },
        });
    }, []);
    return (
        <div className="suggest">
            {categoryList.map((e, k) => (
                <SuggestKeywordItem key={e.catId} item={e} />
            ))}
        </div>
    );
};

export default SuggestKeyword;
