import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import {
    loginSuccess,
    loginFailure,
    signupExist,
    SIGNUP_REQUEST
} from './../../login/actions/loginaction';

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
            yield put(loginSuccess());
        }
    } catch (error) {
        yield put(loginFailure());
    }   
}

export function* rootSignupSaga() {
    yield takeLatest(SIGNUP_REQUEST, SagaSignup);
}

export default rootSignupSaga;