import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
//import {withRouter} from "react-router-dom";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredKey => {
        return [...Array(props.ingredients[ingredKey])].map((_, i) => {
            return <BurgerIngredients key={ingredKey + i} type={ingredKey}/>
        });
    }).reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

/*If we use a special higher order component provided by react-router-dom(withRouter), we can actually kind of inject match location and history, inject these special props in any
 component.*/
//export default withRouter(burger);
export default burger;