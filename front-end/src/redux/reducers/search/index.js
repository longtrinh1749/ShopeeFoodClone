// libs
import { combineReducers } from "redux";
// reducers
import { districtReducer } from "./districtReducer";
import { dropdownReducer } from "./dropdownReducer";
import { filterReducer } from "./filterReducer";

export const Search = combineReducers({
    districtReducer,
    dropdownReducer,
    filterReducer,
});
