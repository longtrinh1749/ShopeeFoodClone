import { OWNER_LABELS } from "redux/actionLabels";

const initialState = {
    shopItemList: [],
};

export function ownerReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case OWNER_LABELS.LOAD_LIST_ITEM: {
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

const initialItemState = {
    shopItem: [],
};

export function ownerItemReducer(
    state = initialItemState,
    { type, payload }
) {
    switch (type) {
        case OWNER_LABELS.EDIT_ITEM: {
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

