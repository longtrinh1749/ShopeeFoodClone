import { SEARCH_LABELS } from "redux/actionLabels";

const initialState = {
    filterDistrict: false,
    filterCategory: false,
};

export function dropdownReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SEARCH_LABELS.DROPDOWN_STATUS: {
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
