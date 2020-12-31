import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const CONTACT_CHANGED = 'contact_changed';
export const SEND_CONTACT = 'send_contact';
export const FETCH_CONTACT = 'fetch_contact';
export const UPDATE_CONTACT = 'update_contact';
export const DELETE_CONTACT = 'delete_contact';

const REF_DATABASE = '/person';
const CHILD_REF = '/contact';
export const changeContact = (contact) => {
    return {
        type: CONTACT_CHANGED,
        payload: contact
    }
}

export const sendContact = (contact) => {
    const currentUser = firebase.auth().currentUser;

    const email = currentUser.email;

    return (dispatch) => {
        firebase.database().ref(REF_DATABASE).child(CHILD_REF).child(CHILD_REF)
            .push({ email, contact })
            .then(() => {
                Actions.contact();
                dispatch({
                    type: SEND_CONTACT
                })
            })
    }
}

export const fetchContact = () => {
    return (dispatch) => {
        firebase.database().ref(REF_DATABASE).child(CHILD_REF).child(CHILD_REF)
            .on('value', (snapshot) => {
                console.log(snapshot.val())
                dispatch({
                    type: FETCH_CONTACT,
                    payload: snapshot.val()
                })
            })
    }
}

export const updateContact = ({ contact, uid, email, cid }) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE + '/' + uid).child(CHILD_REF).child(CHILD_REF + '/' + cid)
            .set({
                contact, email
            })
            .then(() => {
                Actions.contact();
                dispatch({
                    type: UPDATE_CONTACT
                })
            })
    }
}

export const deleteContact = (uid, cid) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE + '/' + uid).child(`${uid}`).child(CHILD_REF + '/' + cid)
            .remove()
            .then(() => {
                Actions.contact();
                dispatch({
                    type: DELETE_CONTACT
                })
            })
    }
}
