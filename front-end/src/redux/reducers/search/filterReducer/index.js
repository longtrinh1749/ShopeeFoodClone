import { SEARCH_LABELS } from "redux/actionLabels";

const initialState = {
    filterDistrict: false,
    filterCategory: false,
};

export function filterReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SEARCH_LABELS.UPDATE_FILTER: {
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
