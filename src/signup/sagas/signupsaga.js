import {
    call,
    put,
    takeLatest,
    select
} from 'redux-saga/effects';
import {
    signupSuccess,
    signupFailure,
    signupExist,
    SIGNUP_REQUEST
} from './../actions/signupaction';


const modifyLog = (logState, username) => {
    logState.login = 'success';
    logState.user = username;
}

const onSignup = async(data) => {
    const res = await fetch('http://localhost:1337/users/');
    const users = await res.json();
    const found = await users.find(item => item.username === data.username);
    if (found) {
        return true
    } else {
        const newuser = {username: data.username};
        const option = {method: 'POST', body: JSON.stringify(newuser)};
        await fetch('http://localhost:1337/users/', option);
        return false
    }
}

function *SagaSignup (action) {
    try {
        const { data } = action.payload;
        const exist = yield call(onSignup, data);
        if (exist === true) {
            yield put(signupExist());
        } else {
            const State = yield select();
            yield call (modifyLog, State.loginState, data.username);
            yield put(signupSuccess());
        }
    } catch (error) {
        yield put(signupFailure());
    }   
}

export function* rootSignupSaga() {
    yield takeLatest(SIGNUP_REQUEST, SagaSignup);
}

export default rootSignupSaga;