import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const defaultValue = {
    username: '',
    password: ''
};

const Login = ({ log, apiRequestGetuser, loginRequest }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    const history = useHistory();

    useEffect(() => {
        if (log.loginState.login === '') apiRequestGetuser();
    }, []);

    useEffect (() => {
        if (log?.loginState.login === 'success') {
           history.push('/chat');
        }
    }, []);

    useEffect (() => {
        if (log.loginState.login === 'success') {
            history.push('/chat');
        }
        reset(defaultValue);
    }, [log.loginState.login]);

    const submit = (data) => {
        loginRequest(data);
    }

    return(
        <center>
            <h1>Sign in</h1>
            <hr/>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'username'} name={'username'} ref={register({ required: true, minLength: 3 })}/>
                {errors.username && (<p>bad input</p>)}
                <br/>
                <input type={'password'} placeholder={'password'} name={'password'} ref={register({ required: true, minLength: 3 })}/>
                {errors.password && (<p>bad input</p>)}
                <br/>
                <br/>
                <input type={'submit'} value={'Submit'}/>
            </form>
        </center>
    );
}

export default Login;