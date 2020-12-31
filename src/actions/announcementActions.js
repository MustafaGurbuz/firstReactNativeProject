import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const NEWS_CHANGED = 'news_changed';
export const SEND_NEWS = 'send_news';
export const FETCH_NEWS = 'fetch_news';
export const UPDATE_NEWS = 'update_news';
export const DELETE_NEWS = 'delete_news';

const REF_DATABASE = '/news';
export const changeNews = (news) => {
    return {
        type: NEWS_CHANGED,
        payload: news
    }
}

export const sendNews = (news) => {
    const currentUser = firebase.auth().currentUser;

    const email = currentUser.email;

    return (dispatch) => {
        firebase.database().ref(REF_DATABASE)
            .push({ email, news })
            .then(() => {
                Actions.announcements();
                dispatch({
                    type: SEND_NEWS
                })
            })
    }
}

export const fetchNews = () => {
    return (dispatch) => {
        firebase.database().ref(REF_DATABASE)
            .on('value', (snapshot) => {
                console.log(snapshot.val())
                dispatch({
                    type: FETCH_NEWS,
                    payload: snapshot.val()
                })
            })
    }
}

export const updateNews = ({ news, uid, email }) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE + '/' + uid)
            .set({
                news, email
            })
            .then(() => {
                Actions.announcements();
                dispatch({
                    type: UPDATE_NEWS
                })
            })
    }
}

export const deleteNews = (uid) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE + '/' + uid)
            .remove()
            .then(() => {
                Actions.announcements();
                dispatch({
                    type: DELETE_CONTACT
                })
            })
    }
}
