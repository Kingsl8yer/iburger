import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            /*Now with this setup here this state error message which I'm outputting here will throw an error initially because the modal component is always present even if we
                don't show it there. So I'll simply add that ternary expression*/
            <Auxiliary>
                <Modal show={error}
                       modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </Auxiliary>
        );

    };
}
export default withErrorHandler;