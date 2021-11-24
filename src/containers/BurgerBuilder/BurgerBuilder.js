import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";  //so withErrorHandler starting with a lowercase character because we're not going to use it in JSX
import * as action from '../../store/actions/index';


const BurgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false);
    const dispatch = useDispatch();
    const ings = useSelector(state => {
        return state.burgerBuilder.ingredients;
    });
    const price = useSelector(state => {
        return state.burgerBuilder.totalPrice;
    });
    const error = useSelector(state => {
        return state.burgerBuilder.error;
    });
    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null;
    });

    const onIngredientAdded = (ingName) => dispatch(action.addIngredient(ingName));
    const onIngredientRemoved = (ingName) => dispatch(action.removeIngredient(ingName));
    const onInitIngredients = useCallback(() => dispatch(action.initIngredients()), [dispatch]);
    const onInitPurchase = () => dispatch(action.purchaseInit());
    const onSetRedirectPath = (path) => dispatch(action.setAuthRedirectPath(path));


    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);

    const updatePurchaseState = (ingredientsCopy) => {
        const sum = Object.keys(ingredientsCopy).map(
            igKey => {
                return ingredientsCopy[igKey];
            }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0;
    }


    const purchaseHandler = () => {
        if (isAuthenticated) {
            setPurchasing(true);
        } else {
            onSetRedirectPath('/checkout');
            props.history.push('/auth');
        }

    }
    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }
    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push('/checkout');
    }

    const disabledInfo = {
        ...ings
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    } // {salad : true, meat: false,...}

    /*I overwrite a variable burger which I'll set prior to that, burger, where I will use the spinner and then I only want to overwrite it if this state ingredients
    is basically not null, so that will only be the case if it was loaded.*/
    let orderSummary = null;
    let burger = error ? <p>Ingredients cant be loaded</p> : <Spinner/>;
    if (ings) {
        burger = (<Auxiliary>
            <Burger ingredients={ings}/>
            <BuildControls
                ingredientAdd={onIngredientAdded}
                ingredientRemove={onIngredientRemoved}
                ingredientDisabled={disabledInfo}
                /*Where we passed 'purchasable', we could simply not reach out to our 'state.purchasable' property because we don't have that anymore but to our
                'updatePurchaseState' method which now simply returns true or false and return the result of this function call */
                purchasable={updatePurchaseState(ings)}
                price={price}
                ordered={purchaseHandler}
                isAuth={isAuthenticated}
            />
        </Auxiliary>);

        orderSummary = <OrderSummary ingredients={ings}
                                     purchaseCanceled={purchaseCancelHandler}
                                     purchaseContinued={purchaseContinueHandler}
                                     summaryPrice={price}/>;
    }
    /*So after this if statement where we check for ingredients, I'll add this old if statement where we check for the loading state to overwrite order summary when needed. */
    // if (this.state.loading) {
    //     orderSummary = <Spinner/>;
    // }

    return (
        <Auxiliary>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Auxiliary>
    );

}


export default withErrorHandler(BurgerBuilder, axios);