import { call, put, takeLatest } from 'redux-saga/effects';

import {
    apiSuccessGetuser,
    apiFailureGetuser,
    API_REQUEST_GETUSER
} from './../actions/getuseraction';

const fetchUser = async () => {
    const res = await fetch('http://localhost:1337/users/');
    const data = await res.json();
    return data;
};

function* apiSagaGetuser() {
    try {
        const list = yield call(fetchUser);
        const payload = { user: list };
        yield put(apiSuccessGetuser(payload));
    } catch (error) {
        yield put(apiFailureGetuser(error));
    }
}

export function* rootSagaGetuser() {
    yield takeLatest(API_REQUEST_GETUSER, apiSagaGetuser);
}

export default rootSagaGetuser;