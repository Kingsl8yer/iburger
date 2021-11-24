import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    /* We probably want to have the same state we already use in the 'BurgerBuilder.js'*/
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredients = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
    const updateIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updateIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName],
        building: true
    };
    return updateObject(state, updatedState);
};

const removeIngredients = (state, action) => {
    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
    const updateIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updateIngs,
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
    };
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        /*Now when 'setIngredients' is called though, I want to set 'building' to 'false' because we just reloaded the page, we're starting from scratch we're not building yet.*/
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        /* We don't need 'break' statements because we return in each case anyways, so the code execution won't continue in this function. */
        case actionTypes.ADD_INGREDIENT:
            return addIngredients(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredients(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state);

        default:
            return state;
    }

}

export default burgerBuilder;