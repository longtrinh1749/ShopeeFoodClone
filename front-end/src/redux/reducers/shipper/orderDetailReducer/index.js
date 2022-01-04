import { SHIPPER_LABELS } from "redux/actionLabels";

const initialState = {
    order: {
        "customerId" : 0,
        "shopId" : 0,
        "orderId" : 0,
    },
};

export function orderDetailReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case SHIPPER_LABELS.SET_ORDER_INFO: {
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
