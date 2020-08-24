import { connect } from 'react-redux';

import Signup from './../components/SignupComponent';
import { signupRequest } from './../actions/signupaction';

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = { signupRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);