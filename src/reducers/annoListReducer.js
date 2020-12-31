import {
    FETCH_NEWS
} from '../actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return action.payload
        default:
            return state;
    }
}
