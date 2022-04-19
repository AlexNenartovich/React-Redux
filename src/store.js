import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./Reducers/allReducers";
const middleware = [thunk];
const store = createStore(allReducers, applyMiddleware(...middleware));

export default store;
