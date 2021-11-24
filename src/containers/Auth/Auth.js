import React, {useState, useEffect} from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import {Redirect} from "react-router-dom";
import * as action from "../../store/actions";
import {updateObject, checkValidity} from "../../shared/utility";

const Auth = props => {
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });
    const [isSignup, setIsSignup] = useState(true);
    const {buildingBurger, authRedirectPath, onSetRedirectPath} = props;
    useEffect(() => {
        if (!buildingBurger && authRedirectPath !== '/') {
            /*So now we reset the path whenever we reach the auth page without building a burger.*/
            onSetRedirectPath('/');
        }
    }, [buildingBurger, authRedirectPath, onSetRedirectPath]);


    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(controls, {
            [controlName]: updateObject(controls[controlName], {
                value: event.target.value,
                /*there we have this 'validation' property which I'll pass, so that is referring to that 'validation' property each 'control' has where I set up the rules.*/
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true
            })
        });
        setControls(updatedControls);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(controls.email.value, controls.password.value, isSignup);
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup);
    }


    const formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }
    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
        />
    ));

    if (props.loading) {
        form = <Spinner/>
    }

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            /*Again this message property is only available because I'm using the 'error' as it comes back from firebase and that happens to be a javascript object which has a message property*/
            <p>{props.error.message}</p>
        );
    }

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath}/>;
    }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType="Success">SUBMIT</Button>
            </form>
            <Button clicked={switchAuthModeHandler} btnType="Danger">SWITCH
                TO {isSignup ? 'SIGN IN' : 'SIGN UP'}</Button>
        </div>
    );

}
const mapStateToProps = state => {
    return {
        /*Now on '.state', we have to access auth since this is what leads to the auth reducer in the end due to 'combinedReducers'. So we have to access' state.auth'
        and there now, the 'loading' property we set up in our auth reducers state,*/
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        /*Now we could receive the 'path' as an argument to this function here and pass it on or we just hard code '/' in here because if I call this action from within that component,
        I always want to reset it back to its basic form.*/
        onSetRedirectPath: () => dispatch(action.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);