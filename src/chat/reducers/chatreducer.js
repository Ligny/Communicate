import {
    ADD_MESSAGE,
    DELETE_MESSAGE,
    REQUEST_ADD_MESSAGE,
    REQUEST_DELETE_MESSAGE
} from './../actions/chataction';

const initialState = {
    message: [],
    status: '',
    error: null
};

export default function FetchingStateUser(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ADD_MESSAGE: {
            return {
                ...state,
                status: 'message_add_request',
            }
        }
        case ADD_MESSAGE: {
            const { message } = action.payload;
            return {
                ...state,
                message: [...message],
                status: 'message_sent',
            };
        }
        case REQUEST_DELETE_MESSAGE: {
            return {
                ...state,
                status: 'message_delete_request'
            };
        }
        case DELETE_MESSAGE: {
            const { message } = action.payload;
            return {
                ...state,
                message: [...message],
                status: 'message_deleted',
            };
        }
        default:
            return state;
    }
}