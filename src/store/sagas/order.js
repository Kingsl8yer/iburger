import axios from "../../axios-orders";
import {put} from "redux-saga/effects";
import * as actions from "../actions/orders";

export function* purchaseBurgerSaga(action) {
    try {
        yield put(actions.purchaseBurgerStart());
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }
}

export function* fetchOrdersSaga(action) {
    try {
        yield put(actions.fetchOrdersStart());

        /*This is a query parameter understood by firebase which allows us to well order our data. Now I don't actually want to reorder it
       but this also tells firebase hey you can filter by that.*/
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        const response = yield axios.get('/orders.json' + queryParams);
        const fetchedOrders = [];
        for (let key in response.data) {
            /*To not lose the IDs though which are my keys(MNewvt4Hu6GS0bYzjfH from firebase) here. I'll do one thing, I'll not push this object, I'll instead push a
             new object onto this 'fetchedOrders' array where I will distribute the properties of the Order object I've fetched from firebase with the spread operator
             and add one new property 'id' which is the 'key' because remember the 'key' is in this object we've fetched from firebase where the ID's created by firebase.
             So now I have my 'fetchedOrders' array full of order objects which also are aware of their IDs.*/
            fetchedOrders.push({...response.data[key], id: key});
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    } catch (error) {
        yield put(actions.fetchOrdersFail(error));
    }
}