import { spawn, all } from 'redux-saga/effects'

import LoginSaga from './login/sagas/loginsaga';
import GetuserSaga from './login/sagas/getusersaga';
import LogoutSaga from './chat/sagas/logoutsaga';
import AddMessageSaga from './chat/sagas/addchatsaga';
import DeleteMessageSaga from './chat/sagas/deletechatsaga';
import GetMessageSaga from './chat/sagas/getmessagesaga'
import SignupSaga from './signup/sagas/signupsaga';

function* sagas() {
    yield all([
        spawn(GetuserSaga),
        spawn(LoginSaga),
        spawn(LogoutSaga),
        spawn(GetMessageSaga),
        spawn(AddMessageSaga),
        spawn(DeleteMessageSaga),
        spawn(SignupSaga),

    ]);
}

export default sagas;