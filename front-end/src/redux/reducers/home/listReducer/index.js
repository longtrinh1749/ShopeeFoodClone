import { HOME_LABELS } from "redux/actionLabels";

const initialState = {
    shopList: [],
};

export function shopReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case HOME_LABELS.LOAD_MORE_LIST: {
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
