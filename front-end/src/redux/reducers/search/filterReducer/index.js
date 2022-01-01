import { SEARCH_LABELS } from "redux/actionLabels";

const initialState = {
    filterCategoryList: [],
    filterDistrictList: [],
};

export function filterReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SEARCH_LABELS.FILTER_LIST: {
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
