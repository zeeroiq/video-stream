import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';
import { formValues } from 'redux-form';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payLoad: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// action creator for create stream, uses redux thunk
export const createStream = (formValues) => {
    return async (dispatch) => {
        streams.post('/streams', formValues);
    };
};