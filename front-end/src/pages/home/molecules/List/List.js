import { useListShop } from 'api/home';
import { useStore } from 'hook/useStore';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ItemList from '../../atoms/ItemList/ItemList';
import ListTab from '../../atoms/ListTab/ListTab';
import { setShopList } from 'redux/actions/home';
import './list.scss';

const List = () => {
    const dispatch = useDispatch();
    const { shopList } = useStore("Home", "shopReducer");
    const { execute, isLoading, response, error } = useListShop();
    const [noItem, setNoItem] = useState(9);

    useEffect(() => {
        execute({
            params: {
                page: 1,
                size: 9,
            },
            cbSuccess: (res) => {
                dispatch(setShopList({ shopList: res.data.content }));
            },
        });
    }, []);

    const loadMore = () => {
        setNoItem(prev => prev + 9);
    }

    return (
        <div className="list">
            <ListTab />
            <div className="list_list">
                {shopList.slice(0, noItem).map((e,k)=> <ItemList key={k} item={e} />)}
            </div>
            <div className="list_more" onClick={loadMore}>
                <span>Xem thêm <i className="fas fa-redo"></i></span>
            </div>
        </div>
    );
}

export default List;
