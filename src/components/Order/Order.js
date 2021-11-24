import React from "react";
import classes from './Order.module.css';

const order = (props) => {
    /*Here I'll add ingredients which should be an ingredients array and we had the logic for transforming this before. In the 'Burger' component but lets do it now this way.
       I want to push a javascript object though where I of course also have the amount but before storing the amount, I also want to store the name of the ingredient */
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }
    const ingredientsOutput = ingredients.map(ig => {
        /*Now regarding the key, I actually can use the ingredient name({ig.name}) as the key as it is unique here*/
        return <span key={ig.name} style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}>
            {ig.name} ({ig.amount})
        </span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            {/*We also see that back here we want to use price.toFixed with 2 decimal places, this will only work on a number though and by default this is a string. So what I can do
    is I can simply call 'Number.parseFloat()' to convert a string to a number or of course you add a plus sign at the point of time you're passing it there in the 'Orders' component
    adding a plus(+) in front of 'order.price' should also do the trick,*/}
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;