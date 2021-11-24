import React from "react";
import classes from './NavigationItem.module.css';
import {NavLink} from "react-router-dom";

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/*Active class attached at runtime by nav link will not match our active class(NavigationItem a.active). We can easily fix that, that nav link element has one extra property
        we can set up, we can set our own activeClassName as you learned. You can add activeClassName here, and here I then want to use classes, 'active' again referring to my classes object
        which comes from my css file, this will now be the activeClassName as our css modules transformation spits it out.*/}
        {/*As long as our current paths starts with this path here(to={props.link}), this link is treated to be active. And for just '/' every route starts with that.
        So we can simply fix this by adding the 'exact' route here and with that we make sure that this only gets used if it is exact.*/}
        {/*Now this of course will attach 'exact' to all nav links, If you only knew that somewhere this should happen, you could simply pass the 'exact' property, a new property
        i just defined to <NavigationItem> and in <NavigationItem>, you can now bind the 'exact' prop of <NavLink> to 'props.exact', so to the one you're passing in from outside.
        Now this will actually only be used on the first link with just '/' and not on the second with '/orders'.*/}
        <NavLink to={props.link}
                 exact={props.exact}
                 activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;