// libs
import { combineReducers } from "redux";
// reducers
import { orderReducer, orderReloadReducer , orderTabReducer } from "./orderReducer";
import { orderDetailReducer } from "./orderDetailReducer";

export const Shipper = combineReducers({
    orderReducer,
    orderDetailReducer,
    orderReloadReducer,
    orderTabReducer
});
