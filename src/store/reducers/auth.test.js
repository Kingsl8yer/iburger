import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe('auth reducer', () => {
    it('should return the initial state', () => {
        /* I will actually pass 'undefined' here as an 'initialState', that is the case when the 'state' is just getting set up at the beginning of our app
        and the 'action' is just an empty object,

so no specific action.*/
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});
