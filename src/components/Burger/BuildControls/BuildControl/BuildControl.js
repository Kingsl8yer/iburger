import React from "react";
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingredLabel}</div>
        <button className={classes.Less}
                onClick={props.remove}
                disabled={props.disabled}>
            Less
        </button>
        <button
            className={classes.More}
            onClick={props.add}>
            More
        </button>
    </div>
);
export default buildControl;