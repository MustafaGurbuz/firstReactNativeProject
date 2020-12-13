import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextArea, MyButton } from './common';
import { changeTweet, sendTweet } from '../actions';

class NewTweet extends Component {

  onChangeTweet(person) {
    this.props.changeTweet(person)
  }

  sendTweet() {
    this.props.sendTweet(this.props.person);
  }

  render() {
    return (
      <View style={styles.newTweetContainer}>
        <TextArea placeholder='Type here...'
                  onChangeText={this.onChangeTweet.bind(this)}
                  />
        <MyButton spinner={false}
                  title='Send'
                  onPress={this.sendTweet.bind(this)}
                  color='orange'
                  backgroundColor='orange'/>
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

export default connect(mapStateToProps, {
  changeTweet, sendTweet
})(NewTweet);
