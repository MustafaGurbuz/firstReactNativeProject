import React, {Component} from 'react';
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
    apiKey: "AIzaSyAfCyTN5KpaiiZTLz5eH0Dez4MmGKBm82E",
    authDomain: "firstlogin-b5d18.firebaseapp.com",
    databaseURL: "https://firstlogin-b5d18.firebaseio.com",
    projectId: "firstlogin-b5d18",
    storageBucket: "firstlogin-b5d18.appspot.com",
    messagingSenderId: "282535791922",
    appId: "1:282535791922:web:87c06ec452de3b603e5b2b",
    measurementId: "G-26VZXSW6Y9"
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
