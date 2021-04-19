import _ from 'lodash';
import { 
    FETCH_STREAMS, 
    FETCH_STREAM, 
    EDIT_STREAM, 
    CREATE_STREAM, 
    DELETE_STREAM 
} from "../actions/types";

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            // since dispatch will be calling only with the id, so no need to do action.payload.id
            return _.omit(state, action.payload);
        default:
            return state;
    }
}