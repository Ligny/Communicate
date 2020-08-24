import {
    call,
    put,
    takeLatest,
    select
} from 'redux-saga/effects';
import {loginSuccess,
    loginFailure,
    LOGIN_REQUEST
} from './../actions/loginaction';

const onSubmit = (register, data) => {
    
    const found = register.find(item => item.username === data.username);
    if (found) {
        return true
    } else {
        return false
    }
}

function* SagaLogin (action) {
    try {
        const { data } = action.payload;
        const State = yield select();
        const connected = yield call(onSubmit, State.userState.user, data);
        if (connected === true) {
            const payload = data.username;
            yield put(loginSuccess(payload));
        } else {
            yield put(loginFailure());
        }
    } catch (error) {
        yield put(loginFailure());
    }   
}

export function* rootSagaLogin() {
    yield takeLatest(LOGIN_REQUEST, SagaLogin);
}

export default rootSagaLogin;