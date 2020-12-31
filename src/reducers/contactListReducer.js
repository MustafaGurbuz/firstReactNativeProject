import {
    FETCH_CONTACT
} from '../actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CONTACT:
            return action.payload
        default:
            return state;
    }
}
