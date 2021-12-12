// libs
import { combineReducers } from "redux";
// reducers
import { dealReducer } from "./dealReducer";
import { shopReducer } from "./listReducer";

export const Home = combineReducers({
    dealReducer,
    shopReducer
});
