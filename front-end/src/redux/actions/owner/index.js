import { OWNER_LABELS } from "redux/actionLabels";

export function getShopItemList(payload) {
    return {
        type: OWNER_LABELS.LOAD_LIST_ITEM,
        payload,
    };
}

export function addNewShopItem(payload) {
    return {
        type: OWNER_LABELS.ADD_NEW_ITEM,
        payload,
    };
}

export function editShopItem(payload) {
    return {
        type: OWNER_LABELS.EDIT_ITEM,
        payload,
    };
}
