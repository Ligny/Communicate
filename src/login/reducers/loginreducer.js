import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGOUT_REQUEST
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
        default:
            return state;
    }
}