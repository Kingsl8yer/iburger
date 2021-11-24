import React, {useState} from "react";
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button";
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from "../../UI/Spinner/Spinner";
import Input from "../../UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import {updateObject, checkValidity} from "../../../shared/utility";
import * as actions from '../../../store/actions/index';

const ContactData = props => {
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: 'fastest',
            validation: {},
            /*I still add this 'valid' property to the dropdown even though it of course doesn't have any validation rules but therefore it should always be 'valid'(true)*/
            valid: true
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);


    const orderHandler = (event) => {
        /*'PreventDefault()' is important on the 'orderHandler' on the event you're getting automatically to prevent the default which would be to send the request and reload the page.*/
        event.preventDefault();
        //this.setState({loading: true});
        /*I just want to get the 'name' and then the 'value' directly mapped to each other.*/
        const formData = {};
        /*So there I'll have my 'formElementIdentifier' in this.state.orderForm, so this very long form element identifier is simply 'email', 'country' and so on.*/
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData,
            userId: props.userId
            /*customer: {
                name: 'Miguel Varona',
                address: {
                    street: 'Las Delicias',
                    zipCode: 'M1 4FG',
                    country: 'Canada'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'*/
        }
        // axios.post('/orders.json', order).then(response => {
        //     /*Now one thing I want to do is this 'purchasing' state which I'm setting here is not  required any more, 'loading' is a state I don't use yet.*/
        //     this.setState({loading: false});
        //     this.props.history.push('/');
        // })
        //     .catch(error => {
        //         this.setState({loading: false});
        //     });
        props.onOrderBurger(order, props.token);
    }


    /*We need to update the this.state.value for a given input upon user changes*/
    /*We also receive or need a second argument which is the 'inputIdentifier' so that we can reach out to our 'state', get the right element here, the right object and adjust its value.*/
    const inputChangedHandler = (event, inputIdentifier) => {
        /*I'll first of all create my copy of my form data(updatedOrderForm), however this does not create a deep clone, so I copy that object and I distribute all the properties, I get a new
        object but since in these objects, I have more nested objects, these would not be cloned deeply*/
        //const updatedOrderForm = {...this.state.orderForm};

        /*I'll take the updatedOrderForm which is a clone of the original and there I'll now access my 'inputIdentifier' so this is a value like 'email', like deliveryMethod.*/
        /*Now I get access to this object which we haven't cloned already so now I need to clone that object and I'll store it in the new constant 'updatedFormElement'. Now I can safely change
        the value of the 'updatedFormElement' because it is again a clone.*/
        const updatedFormElement = updateObject(orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, orderForm[inputIdentifier].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(orderForm, {
            /* The new property should be this dynamic '[inputIdentifier]' where we pick a specific control, which we of course store as properties in our order form object in the state,
           like name, street and so on.*/
            [inputIdentifier]: updatedFormElement
        });

        /*So I will reach out to 'updatedFormElement.value' and set this equal to 'event.target.value'*/
        //updatedFormElement.value = event.target.value;

        /*I want to set 'updatedFormElement.valid' equal to 'this.checkValidity' and pass the 'updatedFormElement.value' which we already adjusted to the value passed by the event
         and of course I want to pass my 'updatedFormElement.validation' object which is just my 'rules' on  'checkValidity()'.*/
        //updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        /*So now to update the 'touched' value, I'll go to my 'inputChangedHandler' where we of course know that the user typed something or changed something so at this point of time
        something has been changed. And now in there, I want to update 'touched' */
        //updatedFormElement.touched = true;

        /*I can now again access the 'inputIdentifier' and set it equal to the 'updatedFormElement'. Now with this, I can call this.setState and set order form to updated order form.*/
        //updatedOrderForm[inputIdentifier] = updatedFormElement;


        /*So with that, we should now know the overall form validity and this allows us to disable the button.*/
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }


    /*I now need to first of all turn my this.state.orderForm object into some kind of array I can loop through*/
    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        });
    }
    /*I'll add my 'form' variable which is the <form> down there by default but if this.state.loading is true, then 'form' will actually be this <Spinner/> component. So let me grab
    the <form> from down there, I pointed into the 'form' variable up here and then, I'll just output form here, this 'form' variable which either is the form or the  <Spinner/>.*/
    let form = (
        /* All the other things here, 'placeholder' and so on should really be passed on now because we pass on props, that is what we define in our Input component.*/
        <form onSubmit={orderHandler}>
            {/*<Input elementType="..." elementConfig="..." value="..."/>*/}
            {formElementsArray.map(formElement => (
                <Input key={formElement.id}
                       elementType={formElement.config.elementType}
                       elementConfig={formElement.config.elementConfig}
                       value={formElement.config.value}
                       invalid={!formElement.config.valid}
                    /* 'shouldValidate' should only be true if my object in the 'orderForm' has a 'validation' object, my 'delivery' method which is the dropdown in the end hasn't so it
                    shouldn't validate at all.*/
                       shouldValidate={formElement.config.validation}
                       touched={formElement.config.touched}

                    /*I'll go to my 'ContactData' component and the method I passed to 'changed', the reference here should be a referenced to an anonymous function so that I can now
                    pass arguments to the 'inputChangedHandler' method call. In this anonymous function, here we now get this 'event' object which is created by React automatically
                    and I want to pass this on but I also now want to pass my 'identifier'(id), which is form element ID */
                       changed={(event) => inputChangedHandler(event, formElement.id)}
                />
            ))}
            {/*We are not using the original html button there, we're using our own implementation so there we need to expect a 'disabled' prop and pass it on to the native button 'disabled' attribute.*/}
            <Button btnType="Success" disabled={!formIsValid}>ORDER</Button>
        </form>
    );
    if (props.loading) {
        form = <Spinner/>;
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    )

}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));

