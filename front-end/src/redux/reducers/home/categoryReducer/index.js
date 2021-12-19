import { HOME_LABELS } from "redux/actionLabels";

const initialState = {
    categoryList: [],
};

export function categoryReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case HOME_LABELS.LOAD_CATEGORY: {
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
