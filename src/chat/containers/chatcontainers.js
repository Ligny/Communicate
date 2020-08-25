import { connect } from 'react-redux';

import Chat from './../components/ChatComponent';
import { logOutRequest } from './../../login/actions/loginaction';
import { requestAddMessage } from './../actions/chataction';
import { requestDeleteMessage } from './../actions/chataction';
import { requestGetMessage } from './../actions/chataction';

const mapStateToProps = (state) => ({ elem: state });

const mapDispatchToProps = { logOutRequest, requestAddMessage, requestDeleteMessage, requestGetMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);