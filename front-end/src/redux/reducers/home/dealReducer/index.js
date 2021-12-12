import { HOME_LABELS } from "redux/actionLabels";

const initialState = {
    dealList: [],
};

export function dealReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case HOME_LABELS.LOAD_MORE_DEAL: {
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
