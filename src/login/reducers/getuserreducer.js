import {
    API_REQUEST_GETUSER,
    API_REQUEST_GETUSER_SUCCESS,
    API_REQUEST_GETUSER_FAILURE
} from './../actions/getuseraction';

const initialState = {
    user: [],
    status: '',
    error: null
};

export default function FetchingStateUser(state = initialState, action) {
    switch (action.type) {
        case API_REQUEST_GETUSER: {
            return {
                ...state,
                status: 'loading',
            };
        }
        case API_REQUEST_GETUSER_SUCCESS: {
            const { user } = action.payload;
            return {
                ...state,
                status: 'success',
                user: [...user],
            };
        }
        case API_REQUEST_GETUSER_FAILURE: {
            return {
                ...state,
                status: 'fail',
            };
        }
        default:
            return state;
    }
}