import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../../store/actions/index";

const Logout = props => {
    const {onLogout} = props;
    useEffect(() => {
        onLogout();
    }, [onLogout]);


    /*And then the only thing I return as part of this component is that 'Redirect' component here which means whenever this container is loaded,
    it just redirects me, of course a very easy way of redirecting the user.*/
    return <Redirect to="/"/>;

}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);