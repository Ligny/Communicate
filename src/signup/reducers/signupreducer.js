import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_EXIST,
} from './../actions/signupaction';

const initialState = {
    signup: '',
    error: null
};

export default function FetchingLog(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS: {
            return {
                ...state,
                signup: 'success',
            };
        }
        case SIGNUP_FAILURE: {
            return {
                ...state,
                signup: 'fail',
            };
        }
        case SIGNUP_REQUEST: {
            return {
                ...state,
                signup: 'loading',
            };
        }
        case SIGNUP_EXIST: {
            return {
                ...state,
                signup: 'exist',
            };
        }
        default:
            return state;
    }
}