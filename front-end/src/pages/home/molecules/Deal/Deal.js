import './deal.scss';
import Item from '../../../../components/Item/Item';
import { useEffect, useState } from 'react';
import { useListDeal } from 'api/home';
import { useDispatch } from 'react-redux';
import { useStore } from 'hook/useStore';
import { setDealList } from 'redux/actions/home';

const Deal = () => {
    const dispatch = useDispatch();
    const { dealList } = useStore("Home", "dealReducer");
    const { execute, isLoading, response, error } = useListDeal();
    const [noItem, setNoItem] = useState(9);
    useEffect(() => {
        execute({
            cbSuccess: (res) => {
                dispatch(setDealList({ dealList: res.data }));
            },
        });
    }, []);

    const loadMore = () => {
        setNoItem(prev => prev + 9);
    }

    return (
        <div className="endow">
            <div className="endow_header">
                <p>Ưu đãi</p>
                <a href="/"><i className="fas fa-border-all"></i>Xem tất cả</a>
            </div>
            <div className="endow_list">
                {dealList.slice(0, noItem).map((e,k)=> <Item key={k} item={e} />)}
            </div>
            <div className="endow_more" onClick={loadMore}>
                <span>Xem thêm</span>
                <i className="fas fa-redo"></i>
            </div>
        </div>
    );
}

export default Deal;
