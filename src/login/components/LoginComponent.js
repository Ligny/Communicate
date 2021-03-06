import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

const defaultValue = {
    username: '',
};

const Login = ({ log, apiRequestGetuser, loginRequest }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    const history = useHistory();

    useEffect(() => {
        apiRequestGetuser();
    }, []);

    useEffect (() => {
        if (log?.loginState.login === 'success') {
           history.push('/chat');
        }
    }, []);

    useEffect (() => {
        if (log.loginState.login === 'success') {
            history.push('/chat');
        } reset(defaultValue);
    }, [log.loginState.login]);

    const submit = (data) => {
        loginRequest(data);
    }

    return(
        <center>
            <h1>Sign in</h1>
            <hr/>
            <form onSubmit={handleSubmit(submit)}>
                <br/>
                <input type={'text'} placeholder={'username'} name={'username'} ref={register({ required: true, minLength: 3 })}/>
                {errors.username && (<p>bad input</p>)}
                <br/>
                <br/>
                <input type={'submit'} value={'Submit'}/>
            </form>
            <br/>
            <br/>
            No account
            <br/>
            <Link to={'/signup'}>Sign up</Link>
        </center>
    );
}

export default Login;