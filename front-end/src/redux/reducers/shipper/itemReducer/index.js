import { SHIPPER_LABELS } from "redux/actionLabels";

const initialState = {
    item: []
};

export function itemInOrderReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SHIPPER_LABELS.GET_ITEM_IN_ORDER: {
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

const initialStateItem = {
    itemList: []
};

export function itemReducer(
    state = initialStateItem,
    { type, payload }
) {
    switch (type) {
        case SHIPPER_LABELS.GET_ITEM_ALL: {
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
