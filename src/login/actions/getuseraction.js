export const API_REQUEST_GETUSER = 'API_REQUEST_GETUSER';
export const API_REQUEST_GETUSER_SUCCESS = 'API_REQUEST_GETUSER_SUCCESS';
export const API_REQUEST_GETUSER_FAILURE = 'API_REQUEST_GETUSER_FAILURE';

export const apiRequestGetuser = () => ({ type: API_REQUEST_GETUSER });
export const apiSuccessGetuser = payload => ({ type: API_REQUEST_GETUSER_SUCCESS, payload });
export const apiFailureGetuser = error => ({ type: API_REQUEST_GETUSER_FAILURE, error });