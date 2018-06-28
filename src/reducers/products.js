import * as ActionType from "./../constants/ActionType";
import { findIndex } from "lodash";

let initialState = [];

const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case ActionType.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case ActionType.DELETE_PRODUCT:
            let id = action.id;
            index = findIndex(state, (product, index) => {
                return product.id === id
            });
            if (index !== -1) state.splice(index, 1);
            return [...state];
        default:
            return [...state];
    }
}

export default products;