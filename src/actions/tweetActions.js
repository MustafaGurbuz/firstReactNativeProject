import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const TWEET_CHANGED = 'tweet_changed';
export const SEND_TWEET = 'send_tweet';
export const FETCH_TWEET = 'fetch_tweet';
export const UPDATE_TWEET = 'update_tweet';
export const DELETE_TWEET = 'delete_tweet';

const REF_DATABASE = '/person';
export const changeTweet = (person) => {
  return {
    type: TWEET_CHANGED,
    payload: person
  }
}

export const sendTweet = (person) => {
  const currentUser = firebase.auth().currentUser;

  const email = currentUser.email;

  return (dispatch) => {
    firebase.database().ref(REF_DATABASE)
      .push({ email, person })
      .then(() => {
        Actions.main();
        dispatch({
          type: SEND_TWEET
        })
      })
  }
}

export const fetchTweet = () => {
  return (dispatch) => {
    firebase.database().ref(REF_DATABASE)
      .on('value', (snapshot) => {
        console.log(snapshot.val())
        dispatch({
          type: FETCH_TWEET,
          payload: snapshot.val()
        })
      })
  }
}

export const updateTweet = ({ person, uid, email }) => {
  return dispatch => {
    firebase.database().ref(REF_DATABASE + '/' + uid)
      .set({
        person, email
      })
      .then(() => {
        Actions.main();
        dispatch({
          type: UPDATE_TWEET
        })
      })
  }
}

export const deleteTweet = (uid) => {
  return dispatch => {
    firebase.database().ref(REF_DATABASE + '/' + uid)
      .remove()
      .then(() => {
        Actions.main();
        dispatch({
          type: DELETE_TWEET
        })
      })
  }
}
