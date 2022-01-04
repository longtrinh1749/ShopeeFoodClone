import { useShopItemList } from "api/owner";
import { useStore } from "hook/useStore";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editShopItem, getShopItemList } from "redux/actions/owner";
import OwnerModal from "./modal";
import "./style.scss";

const Owner = () => {
    const dispatch = useDispatch();
    const { shopItemList } = useStore("Owner", "ownerReducer");
    const { execute } = useShopItemList();
    const [ type, setType ] = useState(1);

    const onEdit = (item) => {
        setType(2);
        dispatch(editShopItem({shopItem : item}));
    };

    useEffect(() => {
        execute({
            params: {
                shopId: 1,
            },
            cbSuccess: (res) => {
                dispatch(getShopItemList({ shopItemList: res.data }));
            },
        });
    }, []);

    useEffect(() => {}, [type]);

    return (
        <div className="owner mt-5">
            <div className="container">
                <button className="btn btn-success mb-3" data-bs-toggle="modal"
                            data-bs-target="#owner_form" onClick={() =>{setType(1)}}>Thêm mới</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên món</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Combo</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {shopItemList.map((e, k) => {
                            return (
                            <tr key={k}>
                                <td>{k + 1}</td>
                                <td>{e.itemName}</td>
                                <td><img src={e.imgUrl} alt="" /></td>
                                <td>{e.price}</td>
                                <td>{e.section.sectionName}</td>
                                <td>
                                    <button className="btn btn-primary me-2" onClick={() => onEdit(e)} data-bs-toggle="modal"
                            data-bs-target="#owner_form">Sửa</button>
                                    <button className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <OwnerModal type={type}/>
            </div>
        </div>
    );
};

export default Owner;
