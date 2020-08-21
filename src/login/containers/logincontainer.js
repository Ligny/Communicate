import { connect } from 'react-redux';

import Login from './../components/LoginComponent';
import { loginRequest } from './../actions/loginaction';
import { apiRequestGetuser } from './../actions/getuseraction';

const mapStateToProps = (state) => ({ log: state });

const mapDispatchToProps = { apiRequestGetuser, loginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
