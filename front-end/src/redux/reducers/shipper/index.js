// libs
import { combineReducers } from "redux";
// reducers
import { orderReducer, orderReloadReducer , orderTabReducer, orderFullInfoReducer } from "./orderReducer";
import { orderDetailReducer } from "./orderDetailReducer";
import { itemReducer, itemInOrderReducer } from "./itemReducer";

export const Shipper = combineReducers({
    orderReducer,
    orderDetailReducer,
    orderReloadReducer,
    orderFullInfoReducer,
    orderTabReducer,
    itemInOrderReducer,
    itemReducer
});
