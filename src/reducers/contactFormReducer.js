import {
    CONTACT_CHANGED,
    UPDATE_CONTACT,
    SEND_CONTACT,
    DELETE_CONTACT
} from '../actions';

const INITIAL_STATE = {
    contact: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_CHANGED:
            return { ...state, contact: action.payload }
        case SEND_CONTACT:
            return { ...state, ...INITIAL_STATE }
        case UPDATE_CONTACT:
            return { ...state, ...INITIAL_STATE }
        case DELETE_CONTACT:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}
