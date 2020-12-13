import firebase from 'firebase';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Announcements from './components/announcements';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';

const RouterComp = () => {
  return (
    <Router navigationBarStyle={styles.navBar}>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login'
                 component={LoginForm}
                 title='Login'
                 titleStyle={{color:"red"}}
                 rightTitle='Duyurular'
                 onRight={() => Actions.announcements()}
                 />
          <Scene key="announcements"
                 component={Announcements}
                 title='Duyurular'
          />       
        </Scene>
        <Scene key='main'>
          <Scene key='tweets'
                 component={Tweets}
                 title='Tweets'
                 titleStyle={styles.navTitle}
                 rightTitle='New'
                 onRight={() => Actions.newTweet()}
                 onLeft={() => {
                  firebase.auth().signOut();
                  Actions.auth();
                 }}
                 leftTitle='Logout'
                 />
           <Scene key='newTweet'
                  component={NewTweet}
                  title='New Tweet'
                  />
           <Scene key='updateTweet'
                  component={UpdateTweet}
                  title='Update / Delete Tweet'
                  />
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = StyleSheet.create({
  navBar: {
    fontFamily: "pfencoresanspro_book",
    backgroundColor: 'orange', // changing navbar color
  },
  navTitle: {
    flex:1,
    color: 'red',
    justifyContent:"center",
    alignItems:"center",
    paddingLeft: 100
  },
})

export default RouterComp;
