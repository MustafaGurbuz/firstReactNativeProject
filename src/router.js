import firebase from 'firebase';
import { StyleSheet } from 'react-native';
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import Announcements from './components/announcements';
import Tweets from './components/tweets';
import NewTweet from './components/newTweet';
import UpdateTweet from './components/updateTweet';
import Contact from './components/contact';
import NewContact from './components/newContact';
import Home from './components/home';
import NewAnnouncements from './components/newAnnouncements';
import UpdateAnnouncements from './components/updateAnnouncements';
import UpdateContact from './components/updateContact';

const RouterComp = () => {
  return (
    <Router navigationBarStyle={styles.navBar}>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene key='login'
            component={LoginForm}
            title='Login'
            titleStyle={{ color: "red" }}
            rightTitle='Duyurular'
            onRight={() => Actions.announcements()}
          />
          <Scene key="announcements"
            component={Announcements}
            title='Duyurular'
          />
        </Scene>
        <Scene key='main'>
          <Scene key='home'
            component={Home}
            title='Anasayfa'
            titleStyle={styles.navTitle}
            onLeft={() => {
              firebase.auth().signOut();
              Actions.auth();
            }}
            leftTitle='Logout'
          />
          <Scene key='tweets'
            component={Tweets}
            title='Kişiler'
            titleStyle={styles.navTitle}
            rightTitle='New'
            onRight={() => Actions.newTweet()}
            onLeft={() => {
              Actions.home()
            }}
            leftTitle='Anasayfa'
          />

          <Scene key='newTweet'
            component={NewTweet}
            title='Yeni Kişi'
          />
          <Scene key='updateTweet'
            component={UpdateTweet}
            title='Update / Delete Tweet'
          />
          <Scene key='newAnnoucements'
            component={NewAnnouncements}
            title='Yeni Duyuru'
          />
          <Scene key='updateAnnouncements'
            component={UpdateAnnouncements}
            title='Update / Delete Duyuru'
          />
          <Scene key='newContact'
            component={NewContact}
            title='Yeni İletişim'
          />
          <Scene key='contact'
            component={Contact}
            title='İletişim'
            rightTitle='New'
            onRight={() => Actions.newContact()}
          />
          <Scene key='updateContact'
            component={UpdateContact}
            title='Update / Delete Kişi'
          />
          <Scene key="announcements"
            component={Announcements}
            title='Duyurular'
            rightTitle='New'
            onRight={() => Actions.newAnnoucements()}
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
    flex: 1,
    color: 'red',
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100
  },
})

export default RouterComp;
