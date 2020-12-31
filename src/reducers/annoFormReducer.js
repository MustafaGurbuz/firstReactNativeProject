import {
    NEWS_CHANGED,
    UPDATE_NEWS,
    SEND_NEWS,
    DELETE_NEWS
} from '../actions';

const INITIAL_STATE = {
    news: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_CHANGED:
            return { ...state, news: action.payload }
        case SEND_NEWS:
            return { ...state, ...INITIAL_STATE }
        case UPDATE_NEWS:
            return { ...state, ...INITIAL_STATE }
        case DELETE_NEWS:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}
