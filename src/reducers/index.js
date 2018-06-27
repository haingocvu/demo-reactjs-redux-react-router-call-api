import { combineReducers } from "redux";
import products from "./../reducers/products";

const appReducer = combineReducers({
    products
})

export default appReducer;