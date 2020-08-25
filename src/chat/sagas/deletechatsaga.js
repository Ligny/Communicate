import { put, takeLatest, call } from 'redux-saga/effects';

import {
    deleteMessage,
    REQUEST_DELETE_MESSAGE,
} from '../actions/chataction';

const deletekeyMessage = async(key) => {
    await fetch(`http://localhost:1337/messagings/${key}`, { method: 'DELETE' })
    const res = await fetch('http://localhost:1337/messagings/');
    const mesaging = await res.json();
    return mesaging;
}

function* configDeleteMessageSaga(action) {
    try {
        const key = action.payload;
        const newMessageList = yield call(deletekeyMessage, key);
        const payload = { message: newMessageList};
        yield put(deleteMessage(payload));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSagaDeleteMessage() {
    yield takeLatest(REQUEST_DELETE_MESSAGE, configDeleteMessageSaga);
}

export default rootSagaDeleteMessage;