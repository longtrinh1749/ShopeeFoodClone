import { SHIPPER_LABELS } from "redux/actionLabels";

export function getListOrderConfirmed(payload) {
    return {
        type: SHIPPER_LABELS.LOAD_LIST_CONFIRMED_ORDER,
        payload,
    };
}

export function getOrderShop(payload) {
    return {
        type: SHIPPER_LABELS.GET_SHOP_INFO,
        payload,
    };
}

export function getOrderCustomer(payload) {
    return {
        type: SHIPPER_LABELS.GET_USER_INFO,
        payload,
    };
}

export function setOrder(payload) {
    return {
        type: SHIPPER_LABELS.SET_ORDER_INFO,
        payload,
    };
}

export function reloadData(payload) {
    return {
        type: SHIPPER_LABELS.RELOAD_DATA,
        payload,
    };
}

export function changeTabId(payload) {
    return {
        type: SHIPPER_LABELS.CHANGE_TAB_ID,
        payload,
    };
}
