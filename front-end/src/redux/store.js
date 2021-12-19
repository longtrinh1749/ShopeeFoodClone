import { combineReducers, createStore } from "redux";
import * as reducers from "redux/reducers";

const rootReducer = combineReducers({
    ...reducers
});

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
);

export { store };
