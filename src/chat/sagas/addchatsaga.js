import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
    addMessage,
    REQUEST_ADD_MESSAGE,
} from '../actions/chataction';

function* configAddMessageSaga(action) {
    try {
        const { data } = action.payload;
        const payload = { message: data}
        yield put(addMessage(payload));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSagaAddMessage() {
    yield takeLatest(REQUEST_ADD_MESSAGE, configAddMessageSaga);
}

export default rootSagaAddMessage;