import { SHIPPER_LABELS } from "redux/actionLabels";

const initialState = {
    orderList: [],
};

export function orderReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SHIPPER_LABELS.LOAD_LIST_CONFIRMED_ORDER: {
            return {
                ...state,
                ...payload,
            };
        }
        default: {
            return state;
        }
    }
}

const initialStateReload = {
    reload: false,
};

export function orderReloadReducer(
    state = initialStateReload,
    { type, payload }
) {
    switch (type) {
        case SHIPPER_LABELS.RELOAD_DATA: {
            return {
                ...state,
                ...payload,
            };
        }
        default: {
            return state;
        }
    }
}


const initialStateTabID = {
    tabId: 1,
};

export function orderTabReducer(
    state = initialStateTabID,
    { type, payload }
) {
    switch (type) {
        case SHIPPER_LABELS.CHANGE_TAB_ID: {
            return {
                ...state,
                ...payload,
            };
        }
        default: {
            return state;
        }
    }
}