import './endow.scss';
import { listItem } from '../../../../data/listItem';
import Item from '../../../../components/Item/Item';

const Endow = () => {
    return (
        <div className="endow">
            <div className="endow_header">
                <p>Ưu đãi</p>
                <a href="/"><i className="fas fa-border-all"></i>Xem tất cả</a>
            </div>
            <div className="endow_list">
                {listItem.map((e,k)=> <Item key={k} item={e} />)}
            </div>
            <div className="endow_more">
                <span>Xem thêm <i className="fas fa-redo"></i></span>
            </div>
        </div>
    );
}

export default Endow;
