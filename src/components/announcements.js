import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextArea, MyButton } from './common';
import { changeTweet, sendTweet } from '../actions';

class Announcements extends Component {


  render() {
    return (
      <View style={styles.newTweetContainer}>
          <Text>Welcome To Announcement Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newTweetContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  }
});

const mapStateToProps = state => {
  const { person } = state.personForm;
  return {
    person
  }
}

export default Announcements;
