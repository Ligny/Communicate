import { spawn, all } from 'redux-saga/effects'

import LoginSaga from './login/sagas/loginsaga';
import GetuserSaga from './login/sagas/getusersaga';
import LogoutSaga from './chat/sagas/logoutsaga';
import AddMessageSaga from './chat/sagas/addchatsaga';
import DeleteMessageSaga from './chat/sagas/deletechatsaga';

function* sagas() {
    yield all([
        spawn(LoginSaga),
        spawn(GetuserSaga),
        spawn(LogoutSaga),
        spawn(AddMessageSaga),
        spawn(DeleteMessageSaga),
    ]);
}

export default sagas;