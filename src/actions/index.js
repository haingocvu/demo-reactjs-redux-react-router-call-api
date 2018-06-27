import * as ActionType from "./../constants/ActionType";
import callAPI from "../utils/apiCaller";
import * as Endpoints from "./../constants/endpoints";

const actFetchProduct = products => {
    return {
        type: ActionType.FETCH_PRODUCTS,
        products
    }
}

const actFetchProductRequest = () => {
    return dispatch => {
        return callAPI('GET', `${Endpoints.PRODUCTS}`, null)
            .then(res => {
                dispatch(actFetchProduct(res.data))
            })
            .catch(err => console.log(err))
    }
}

export { actFetchProduct, actFetchProductRequest };