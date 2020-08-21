export const REQUEST_ADD_MESSAGE = 'REQUEST_ADD_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REQUEST_DELETE_MESSAGE = 'REQUEST_DELETE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const requestAddMessage = (data) => ({ type: REQUEST_ADD_MESSAGE, payload: { data } })
export const addMessage = payload => ({ type: ADD_MESSAGE, payload });
export const requestDeleteMessage = (key) => ({ type: REQUEST_DELETE_MESSAGE, payload: key })
export const deleteMessage = payload => ({ type: DELETE_MESSAGE, payload });