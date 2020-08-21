import { put, takeLatest } from 'redux-saga/effects';

import { logOut, LOGOUT_REQUEST } from "./../../login/actions/loginaction";

function *logout() {
    try {
        yield put(logOut());
    } catch(error) {}
}

export function * rootSagaLogout() {
    yield takeLatest(LOGOUT_REQUEST, logout);
}

export default rootSagaLogout;