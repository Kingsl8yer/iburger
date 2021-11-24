import React from "react";
import classes from './Button.module.css';

const button = (props) => (
    /*We are not using the original html button there, we're using our own implementation so there we need to expect a disabled prop and pass it on to the native button disabled attribute.*/
    <button onClick={props.clicked} disabled={props.disabled}
            className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default button;