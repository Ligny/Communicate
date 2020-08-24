import { combineReducers } from 'redux';

import FetchingStateUser from './login/reducers/getuserreducer';
import FetchingLog from './login/reducers/loginreducer';
import FetchingMessage from './chat/reducers/chatreducer';
import FetchingSignup from './signup/reducers/signupreducer';

const state = combineReducers({
    userState: FetchingStateUser,
    loginState: FetchingLog,
    messageState: FetchingMessage,
    signupState: FetchingSignup
});

export default state;