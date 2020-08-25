import { put, takeLatest, call } from 'redux-saga/effects';

import {
    addMessage,
    REQUEST_ADD_MESSAGE,
} from '../actions/chataction';

const addNewMessage = async(data) => {
    const newMessage = {message: data.message, username: data.username};
    const option = {method: 'POST', body: JSON.stringify(newMessage)};
    await fetch('http://localhost:1337/messagings/', option);
    const res = await fetch('http://localhost:1337/messagings/');
    const mesaging = await res.json();
    return mesaging;
}

function* configAddMessageSaga(action) {
    try {
        const { data } = action.payload;
        const messaging = yield call(addNewMessage, data);
        const payload = { message: messaging}
        yield put(addMessage(payload));
    } catch (error) {
        console.log(error);
    }
}

export function* rootSagaAddMessage() {
    yield takeLatest(REQUEST_ADD_MESSAGE, configAddMessageSaga);
}

export default rootSagaAddMessage;