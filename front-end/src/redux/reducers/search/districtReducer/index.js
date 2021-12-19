import { SEARCH_LABELS } from "redux/actionLabels";

const initialState = {
    districtList: [],
};

export function districtReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SEARCH_LABELS.LOAD_DISTRICT_LIST: {
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
