import { stringToSlug } from 'helpers/function/buildSlug';
import { Link } from 'react-router-dom';
import './suggest-keyword-item.scss';

const SuggestKeywordItem = ({item}) => {
    let url = "danh-sach/" + stringToSlug(`${item.catName} ${item.catId}`);
    return (
        <div className="suggest_item">
            <Link to={url}>{item.catName}</Link>
        </div>
    );
}

export default SuggestKeywordItem;
