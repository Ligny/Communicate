import { call, put, takeLatest, select } from 'redux-saga/effects';

import {
    addMessage,
    REQUEST_ADD_MESSAGE,
} from '../actions/chataction';

function submitMessage(data, user, conv) {
    const currentmessage = {username: user, message: data.message}
    if (conv) {
        conv.push(currentmessage);
    } else {
    }
    return conv;
}

function* configAddMessageSaga(action) {
    try {
        const State = yield select();
        const { data } = action.payload;
        const list = yield call(submitMessage, data, State.loginState.user, State.messageState.message);
        const payload = { message: list}
        yield put(addMessage(payload));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSagaAddMessage() {
    yield takeLatest(REQUEST_ADD_MESSAGE, configAddMessageSaga);
}

export default rootSagaAddMessage;