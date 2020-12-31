import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDlM2-wWpshJaTxXVd4Y9QwipS4QsAmjvY",
      authDomain: "first-react-project-9fc83.firebaseapp.com",
      databaseURL: "https://first-react-project-9fc83-default-rtdb.firebaseio.com",
      projectId: "first-react-project-9fc83",
      storageBucket: "first-react-project-9fc83.appspot.com",
      messagingSenderId: "715195073317",
      appId: "1:715195073317:web:a974b97cbfa6f2375710cc",
      measurementId: "G-HT997D3Y3P"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
