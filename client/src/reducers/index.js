import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
    auth: authReducer,
    form: reducer,
    streams: streamsReducer
}); 