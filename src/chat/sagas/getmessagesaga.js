import { put, takeLatest, call } from 'redux-saga/effects';

import {
    GetMessageSuccess,
    GetMessageFailure,
    REQUEST_GET_MESSAGE,
} from '../actions/chataction';

const getMessage = async(data) => {
    const res = await fetch('http://localhost:1337/messagings/');
    const mesaging = await res.json();
    return mesaging;
}

function* configGetMessageSaga() {
    try {
        const messaging = yield call(getMessage);
        const payload = { message: messaging}
        yield put(GetMessageSuccess(payload));
    } catch (error) {
        GetMessageFailure()
    }
}

export function* rootSagaGetMessage() {
    yield takeLatest(REQUEST_GET_MESSAGE, configGetMessageSaga);
}

export default rootSagaGetMessage;