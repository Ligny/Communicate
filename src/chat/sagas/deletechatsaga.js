import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
    deleteMessage,
    REQUEST_DELETE_MESSAGE,
} from '../actions/chataction';

function* configDeleteMessageSaga(action) {
    try {
        const key = action.payload;
        const payload = { message: key}
        yield put(deleteMessage(payload));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSagaDeleteMessage() {
    yield takeLatest(REQUEST_DELETE_MESSAGE, configDeleteMessageSaga);
}

export default rootSagaDeleteMessage;