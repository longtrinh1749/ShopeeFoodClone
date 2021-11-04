import './suggest-keyword-item.scss';

const SuggestKeywordItem = ({title = '', url = '/'}) => {
    return (
        <div className="suggest_item">
            <a href={url}>{title}</a>
        </div>
    );
}

export default SuggestKeywordItem;
