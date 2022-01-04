// libs
import { combineReducers } from "redux";
// reducers
import { ownerReducer, ownerItemReducer } from "./ownerReducer";

export const Owner = combineReducers({
    ownerReducer,
    ownerItemReducer,
});
