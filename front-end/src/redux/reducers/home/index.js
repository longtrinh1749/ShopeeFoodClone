// libs
import { combineReducers } from "redux";
// reducers
import { dealReducer } from "./dealReducer";
import { shopReducer } from "./listReducer";
import { categoryReducer } from "./categoryReducer";

export const Home = combineReducers({
    dealReducer,
    shopReducer,
    categoryReducer
});
