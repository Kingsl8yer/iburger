import React, {useEffect} from "react";
import Order from "../../components/Order/Order";
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = props => {
    const {onFetchOrders, token, userId} = props;
    /*I will implement 'componentDidMount'. I can use 'componentDidMount' here because I only want to fetch orders when this is loaded, there is no way we will go there
 with out remounting it. So 'componentDidUpdate' is not what I'm looking for, so 'componentDidMount' is what I need.*/
    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders, token, userId]);


    let orders = <Spinner/>;
    if (!props.loading) {
        orders =
            props.orders.map(order =>
                (<Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>))
    }
    return (
        <div>
            {orders}
        </div>
    )


}

const mapStateToProps = state => {
    return {
        orders: state.order.order,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
};

/*I of course also want to handle any potential errors so I'll import my own higher order component, 'withErrorHandler'.
 Of course, let's also pass 'axios' here, otherwise this won't work */
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));