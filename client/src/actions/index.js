import streams from '../apis/streams';
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM 
 } from './types';

import { formValues } from 'redux-form';
import StreamCreate from '../components/streams/StreamCreate';

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
export const createStream = formValues => {
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);

        dispatch({type: CREATE_STREAM, payLoad: response.data})
    };
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payLoad: response.data
    });
};

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payLoad: response.data
    });
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payLoad: response.data
    });
};

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payLoad: id
    });
};