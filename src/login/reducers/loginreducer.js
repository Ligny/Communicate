import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_REQUEST,
    SIGNUP_REQUEST,
    SIGNUP_EXIST
} from './../actions/loginaction';

const initialState = {
    login: '',
    user: '',
    error: null
};

export default function FetchingLog(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            const user = action.payload;
            return {
                ...state,
                login: 'success',
                user: user,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                login: 'fail',
            };
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                login: 'loading',
            };
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                login: 'loading',
            };
        }
        case LOGOUT: {
            return {
                ...state,
                login: 'logout',
                user: ''
            };
        }
        case SIGNUP_REQUEST: {
            return {
                ...state,
                login: 'loading',
            };
        }
        case SIGNUP_EXIST: {
            return {
                ...state,
                login: 'exist',
            };
        }
        default:
            return state;
    }
}