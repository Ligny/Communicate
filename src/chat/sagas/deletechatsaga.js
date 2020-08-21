import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
    deleteMessage,
    REQUEST_DELETE_MESSAGE,
} from '../actions/chataction';

function eraseMessage(key, conv) {
    conv.splice(key, 1);
    return conv;
}

function* configDeleteMessageSaga(action) {
    try {
        const State = yield select();
        const key = action.payload;
        const list = yield call(eraseMessage, key, State.messageState.message);
        const payload = { message: list}
        yield put(deleteMessage(payload));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSagaDeleteMessage() {
    yield takeLatest(REQUEST_DELETE_MESSAGE, configDeleteMessageSaga);
}

export default rootSagaDeleteMessage;