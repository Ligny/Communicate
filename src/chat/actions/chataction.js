export const REQUEST_GET_MESSAGE = 'REQUEST_GET_MESSAGE';
export const REQUEST_GET_MESSAGE_SUCCESS = 'REQUEST_GET_MESSAGE_SUCCESS';
export const REQUEST_GET_MESSAGE_FAILURE = 'REQUEST_GET_MESSAGE_FAILURE';
export const REQUEST_ADD_MESSAGE = 'REQUEST_ADD_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REQUEST_DELETE_MESSAGE = 'REQUEST_DELETE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const requestGetMessage = () => ({ type: REQUEST_GET_MESSAGE })
export const GetMessageSuccess = payload => ({ type: REQUEST_GET_MESSAGE_SUCCESS, payload });
export const GetMessageFailure = () => ({ type: REQUEST_GET_MESSAGE_FAILURE })
export const requestAddMessage = (data) => ({ type: REQUEST_ADD_MESSAGE, payload: { data } })
export const addMessage = payload => ({ type: ADD_MESSAGE, payload });
export const requestDeleteMessage = (key) => ({ type: REQUEST_DELETE_MESSAGE, payload: key })
export const deleteMessage = payload => ({ type: DELETE_MESSAGE, payload });