import SuggestKeywordItem from "../../atoms/SuggestKeywordItem/SuggestKeywordItem";
import { suggestKeywordList } from "../../../../data/suggest-keyword";
import './suggest-keyword.scss';

const SuggestKeyword = () => {
    return (
        <div className="suggest">
            {suggestKeywordList.map((e, k) => (
                <SuggestKeywordItem key={k} title={e.title} url={e.url} />
            ))}
        </div>
    );
};

export default SuggestKeyword;
