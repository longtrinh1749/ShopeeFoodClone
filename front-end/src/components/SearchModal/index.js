import { useListShopByFilter } from "api/home";
import { useStore } from "hook/useStore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShopList } from "redux/actions/home";
import "./style.scss";

const Item = ({item}) => {
    return (
        <div className="list_item-item">
            <div className="item_imgs">
                <img src={item.imgUrl} alt="" />
            </div>
            <div className="item_infos">
                <p className="item_info-title">{item.shopName}</p>
                <p className="item_info-address">{item.address}</p>
            </div>
        </div>
    );
};

const SearchModal = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const { shopList } = useStore("Home", "shopReducer");
    const { execute, isLoading, response, error } = useListShopByFilter();

    useEffect(() => {
        execute({
            params: {
                districtList: "",
                categoryList: "",
                name: input,
                page: 0,
                size: 11,
            },
            cbSuccess: (res) => {
                // console.log(res);
                // setTotalPage(res.)
                let shopList = res.data.content ?? [];
                dispatch(setShopList({ shopList }));
            },
        });
    }, [input]);

    return (
        <div className="modal fade modal-open" id="search-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal_exit" data-bs-dismiss="modal">
                        <i className="las la-times"></i>
                    </div>
                    <div className="modal_img">
                        <img src="/images/bg-search.png" alt="" />
                    </div>
                    <div className="modal_title">
                        Đặt Đồ ăn, giao hàng từ 20'... có 59595 địa điểm ở TP.
                        HCM từ 00:00 - 23:59
                    </div>
                    <div className="modal_input">
                        <form action="">
                            <input
                                type="text"
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </form>
                    </div>
                    <div
                        className={`modal_list ${
                            input !== "" ? "modal_list-show" : ""
                        }`}
                    >
                        <div className="list_item">
                            {
                                shopList.map((item, k) =>  <Item key={k} item={item}/>)
                            }

                            <div className="list_btn" data-bs-dismiss="modal">
                                <Link to={`/danh-sach?name=${input}`}>
                                    Tìm kiếm kết quả cho{input}
                                    <span className="text-search">{input}</span>
                                    <span className="btn-search">
                                        <i className="las la-search"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
