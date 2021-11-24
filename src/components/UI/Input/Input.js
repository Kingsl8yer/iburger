import React from "react";
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    /*I will add a new constant which I'll name 'inputClasses' which is an array which at the beginning is just 'classes.inputElement' */
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    /*And now to handle the case that we also have different attributes, I expect to get the attributes you want to set on <input> as props for our <input {...props}/> wrapper. This then allows
    me to simply distribute them on the <input> element, so any default html attributes you want to set on your <input>, you only need to set the input type prop and then you pass the
    normal attributes you would pass to that type, so if you have a <textarea>, you simply pass the normal props you want it to pass from outside and inside of my custom <input> component,
    I don't have to worry about which exact type we have. I rely on you using the wrapper correctly and passing the correct normal html attributes, this is a way of reducing the
    complexity here so that I only have to set the right element and then you take care about the props.*/
    switch (props.elementType) {
        case('input'):
            inputElement = <input className={inputClasses.join(' ')}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}
                                     {...props.elementConfig}
                                     value={props.value}
                                     onChange={props.changed}/>;
            break;
        case('select'):
            inputElement = <select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(
                    option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    )
                )}
            </select>;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}/>;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}
export default input;
