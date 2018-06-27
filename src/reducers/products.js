import * as ActionType from "./../constants/ActionType";

let initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        default:
            return [...state];
    }
}

export default products;