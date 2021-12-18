import { HOME_LABELS } from "redux/actionLabels";

export function setDealList(payload) {
    return {
        type: HOME_LABELS.LOAD_MORE_DEAL,
        payload,
    };
}

export function setShopList(payload) {
    return {
        type: HOME_LABELS.LOAD_MORE_LIST,
        payload,
    };
}

export function getCategoryList(payload) {
    return {
        type: HOME_LABELS.LOAD_CATEGORY,
        payload,
    };
}
