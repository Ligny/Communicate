import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

const defaultValue = {
    username: '',
};

const Signup = ({ state, signupRequest }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    const history = useHistory();

    const submit = (data) => {
        signupRequest(data);
        reset(defaultValue);
    };

    useEffect (() => {
        if (state.loginState.login === 'success') {
            history.push('/chat');
        } reset(defaultValue);
    }, [state.loginState.login])

    return(
        <center>
            <h1>Sign up</h1>
            <hr/>
            <form onSubmit={handleSubmit(submit)}>
                <br/>
                <input type={'text'} placeholder={'username'} name={'username'} ref={register({ required: true, minLength: 3 })}/>
                {errors.username && (<p>bad input</p>)}
                <br/>
                <br/>
                <input type={'submit'} value={'create'}/>
            </form>
            <br/>
            <br/>
            back to
            <br/>
            <Link to={'/'}>sign in</Link>
        </center>
    );
}

export default Signup;