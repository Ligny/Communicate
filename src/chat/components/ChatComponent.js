import React from 'react';
import { useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const defaultValue = {
    message: '',
};

const Chat = ({ elem, logOutRequest, requestAddMessage, requestDeleteMessage, requestGetMessage }) => {

    const { register, handleSubmit, errors, reset } = useForm();
    const history = useHistory();

    useEffect(() => {
        requestGetMessage();
    }, []);

    const memoizedList = useMemo(() => {
        const conv = elem.messageState.message;
        return conv?.map((item, key) => (
            <div key={key}>
                <hr/>
                <h4>{item.username}</h4>
                <h5>{item.message}</h5>
                <button onClick={() => handleDelete(item.id, item.username)}>Delete</button>
                <hr/>
            </div>
        ));
    }, [elem.messageState]);

    const handleDelete = (key, username)  => {
        if(username === elem.loginState.user) {
            requestDeleteMessage(key);
        }
    };

    const handleLogout = () => {
        logOutRequest();
        history.push('/');
    }

    const submit = (data) => {
        requestAddMessage({username: elem.loginState.user, message: data.message});
        reset(defaultValue);
    }

    return(
        <center>
            <h1>Chat</h1>
            <br/>
            <hr/>
            {memoizedList}
            <form onSubmit={handleSubmit(submit)}>
                <textarea name={'message'} rows={'7'} cols={'100'} ref={register({ required: true })}/>
                {errors.message && (<p>Say something</p>)}
                <br/>
                <input type={'submit'} value={'-        send        -'}/>
            </form>
            <br/>
            <button onClick={handleLogout}>Log out</button>
        </center>
    )
};

export default Chat;