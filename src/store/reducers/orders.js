import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    order: [],
    loading: false,
    purchased: false
};

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});

    return updateObject(state, {
        loading: false,
        purchased: true,
        order: state.order.concat(newOrder)
    });
};

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchOrdersSuccess = (state, action) => {
    /*I want to store the orders I fetched so I'll get my state and I'll set orders equal to action and there the property name was just 'orders',
               we can confirm this in our 'action' creator, in the 'order' file, there we dispatched 'fetchOrderSuccess' and in 'fetchOrdersSuccess', we have our 'orders' property.
               So this is the 'orders' property we can extract in our reducer therefore, this one and these are the orders already, if you have a look at the transformation function
               in an array format, so we can store that in our array.*/
    return updateObject(state, {
        order: action.orders,
        loading: false
    });
};

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);

        case actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action);

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action);

        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action);

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);

        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);

        default:
            return {
                ...state
            }
    }
};

export default reducer;