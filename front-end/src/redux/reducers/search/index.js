// libs
import { combineReducers } from "redux";
// reducers
import { districtReducer } from "./districtReducer";
import { filterReducer } from "./filterReducer";

export const Search = combineReducers({
    districtReducer,
    filterReducer,
});
