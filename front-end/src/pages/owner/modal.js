import {
    useEditShopItem,
    useNewShopItem,
    useShopItemListAll,
    useShopSectionList,
} from "api/owner";
import { useFormik } from "formik";
import { useStore } from "hook/useStore";
import { useEffect, useState } from "react";
import "./style.scss";

const OwnerModal = ({ type }) => {
    const { execute: executeAddNew } = useNewShopItem();
    const { execute: executeEdit } = useEditShopItem();
    const { execute: executeSectionList } = useShopSectionList();
    const { execute: executeGetAll } = useShopItemListAll();
    const [maxId, setMaxId] = useState(0);
    const [sections, setSection] = useState([]);
    const { shopItem } = useStore("Owner", "ownerItemReducer");

    useEffect(() => {
        executeGetAll({
            cbSuccess: (res) => {
                setMaxId(res.data.length);
            },
        });
        executeSectionList({
            params: {
                shopId: 1,
            },
            cbSuccess: (res) => {
                setSection(res.data);
            },
        });
    }, []);

    useEffect(() => {
        formik.resetForm({
            values: {
                itemName: shopItem.itemName,
                description: shopItem.description,
                price: shopItem.price,
                sale: shopItem.sale,
                sectionId: shopItem.section?.sectionId,
            },
        });
    }, [shopItem]);

    const validate = (values) => {
        const errors = {};
        if (!values.itemName) {
            errors.itemName = "Required";
        }

        // if (!values.description) {
        //     errors.description = "Required";
        // }

        if (!/[1-9][0-9]{3,}/i.test(values.price)) {
            errors.price = "Vui lòng nhập đúng giá";
        }

        return errors;
    };
    const formik = useFormik({
        initialValues: {
            itemName: "",
            description: "",
            price: "",
            sale: 0,
            sectionId: 0,
        },
        validate,
        onSubmit: (values) => {
            if (type === 1) {
                console.log(values);
                if(values.sectionId === undefined)
                {
                    values.sectionId = sections[0].sectionId;
                }
                if(values.sale === undefined)
                {
                    values.sale = 0;
                }
                const data = {
                    itemId: maxId,
                    itemName: values.itemName,
                    description: values.description,
                    sale: parseInt(values.sale),
                    price: parseInt(values.price),
                    imgUrl: " ",
                    deleted: false,
                    sectionId: parseInt(values.sectionId),
                };
                executeAddNew({
                    data,
                    cbSuccess: (res) => {
                        alert("Thêm mới thành công");
                    },
                });
            } else {
                if(values.sectionId === undefined)
                {
                    values.sectionId = sections[0].sectionId;
                }
                if(values.sale === undefined)
                {
                    values.sale = 0;
                }
                const data = {
                    itemId: shopItem.itemId,
                    itemName: values.itemName,
                    description: values.description,
                    price: parseInt(values.price),
                    imgUrl: shopItem.imgUrl,
                    deleted: shopItem.deleted,
                    sectionId: parseInt(values.sectionId),
                    sale: shopItem.sale ?? 0,
                };
                console.log(data);
                executeEdit({
                    data,
                    cbSuccess: (res) => {
                        alert("Chinh sửa thành công");
                    },
                });
            }
        },
    });
    return (
        <div
            className="modal fade owner_form-modal"
            id="owner_form"
            tabIndex="-1"
            aria-labelledby="owner_form"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="owner_form">
                            {type === 1
                                ? "Thêm mới sản phẩmm"
                                : "Chỉnh sửa sản phẩmm"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group row">
                                <label
                                    htmlFor="itemName"
                                    className="col-sm-2 col-form-label"
                                >
                                    Tên
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        id="itemName"
                                        name="itemName"
                                        type="text"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.itemName}
                                    />
                                    {formik.errors.itemName ? (
                                        <div className="error">
                                            {formik.errors.itemName}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="description"
                                    className="col-sm-2 col-form-label"
                                >
                                    Mô tả
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        id="description"
                                        name="description"
                                        type="text"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.description}
                                    />
                                    {formik.errors.description ? (
                                        <div className="error">
                                            {formik.errors.description}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="description"
                                    className="col-sm-2 col-form-label"
                                >
                                    Giá
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        id="price"
                                        name="price"
                                        type="text"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.price}
                                    />
                                    {formik.errors.price ? (
                                        <div className="error">
                                            {formik.errors.price}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="description"
                                    className="col-sm-2 col-form-label"
                                >
                                    Sale
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        id="sale"
                                        name="sale"
                                        type="text"
                                        className="form-control"
                                        onChange={formik.handleChange}
                                        value={formik.values.sale}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="sectionId"
                                    className="col-sm-2 col-form-label"
                                >
                                    Section
                                </label>
                                <div className="col-sm-10">
                                    <select
                                        id="sectionId"
                                        name="sectionId"
                                        className="form-control"
                                        value={formik.values.sectionId}
                                        onChange={formik.handleChange}
                                        style={{ display: "block" }}
                                    >
                                        {
                                            sections.map((item) =>  <option key={item.sectionId} value={item.sectionId} label={item.sectionName} />)
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {type === 2 ? (
                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                        // data-bs-toggle="modal"
                                        // data-bs-target="#oder_detail_notice"
                                        // onClick={() => onUpdateOrderStatus(5)}
                                    >
                                        Chỉnh sửa
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        // data-bs-toggle="modal"
                                        // data-bs-target="#oder_detail_notice"
                                        // onClick={() => onUpdateOrderStatus(5)}
                                    >
                                        Thêm mới
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerModal;
