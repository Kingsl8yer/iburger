import React from "react";
import {connect} from 'react-redux';
import CheckoutSummary from "../Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route, Redirect} from "react-router-dom";


const Checkout = props => {

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        /*'ll use replace instead to replace the current route with checkout/contactData for example.*/
        props.history.replace('checkout/contact-data');
    }


    let summary = <Redirect to="/"/>

    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to="/"/> : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={props.ings}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler}/>

                <Route path={props.match.path + '/contact-data'}
                       component={ContactData}/>
            </div>
        );
    }
    return summary;

    /*Now we don't need 'mapDispatchToProps' here because we're not actually dispatching anything in this container, we just navigate a little bit but we don't do this through redux store,
    we do this through the react router so there is nothing getting dispatched here, so for now we only need mapStateToProps,*/

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};


export default connect(mapStateToProps)(Checkout);