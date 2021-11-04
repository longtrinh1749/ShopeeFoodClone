import { listItem } from '../../../../data/listItem';
import ItemList from '../../atoms/ItemList/ItemList';
import ListTab from '../../atoms/ListTab/ListTab';
import './list.scss';

const List = () => {
    return (
        <div className="list">
            <ListTab />
            <div className="list_list">
                {listItem.map((e,k)=> <ItemList key={k} item={e} />)}
            </div>
            <div className="list_more">
                <span>Xem thêm <i className="fas fa-redo"></i></span>
            </div>
        </div>
    );
}

export default List;
