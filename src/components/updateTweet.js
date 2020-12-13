import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { changeTweet, updateTweet, deleteTweet } from '../actions';
import { TextArea, MyButton } from './common';

class UpdateTweet extends Component {

  componentDidMount() {
    const { person } = this.props.person;

    this.props.changeTweet(person);
    this.checkEmail = this.checkEmail.bind(this);

  }

  onChangeTweet(person) {
      this.props.changeTweet(person);
  }

  checkEmail(callback) {
    const { email } = this.props.user;
    const tweetEmail = this.props.person.email;
    if (tweetEmail === email) {
      callback();
    } else {
      Alert.alert(
        'Wrong Email',
        'This is not your tweet, so you can\'t update or delete it. ',
        [
          {text: 'OK', onPress:() => console.log('wrong email')}
        ]
      )
    }
  }

  updateTweet() {
    this.checkEmail(() => {
      const tweetObj = { ...this.props.person,
                          person: this.props.personForm.person};
      this.props.updateTweet(tweetObj);
    })
  }

  deleteTweet() {
    this.checkEmail(() => {
      Alert.alert(
        'Are you sure?',
        'This tweet will be deleted after you clicked OK.',
        [
          {text: 'OK', onPress:() => {
            const { uid } = this.props.person;
            this.props.deleteTweet(uid);
          }},
          {text: 'Cancel', onPress:() => console.log('canceled')}
        ]
      )
    })
  }

  render() {
    const { personForm } = this.props;

    return (
      <View style={styles.updateContainer}>
        <TextArea placeholder='Type here...'
                  value={personForm.person}
                  onChangeText={this.onChangeTweet.bind(this)}
                  />
        <MyButton spinner={false}
                  title='Update'
                  onPress={this.updateTweet.bind(this)}
                  color='dodgerblue'
                  backgroundColor='dodgerblue'/>
        <MyButton spinner={false}
                  title='Delete'
                  onPress={this.deleteTweet.bind(this)}
                  color='red'
                  backgroundColor='red' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  updateContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15
  }
});

const mapStateToProps = state => {
  console.log(state.auth.user);
  return {
    user: state.auth.user,
    personForm: state.personForm
  }
}

export default connect(mapStateToProps, {
  changeTweet, updateTweet, deleteTweet
})(UpdateTweet);
