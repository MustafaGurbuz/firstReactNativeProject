import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextArea, MyButton } from './common';
import { changeContact, sendContact } from '../actions';

class NewTweet extends Component {

    onChangeTweet(contact) {
        this.props.changeContact(contact)
    }

    sendTweet() {
        this.props.sendContact(this.props.contact);
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
                    backgroundColor='orange' />
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
    const { contact } = state.contactForm;
    return {
        contact
    }
}

export default connect(mapStateToProps, {
    changeContact, sendContact
})(NewTweet);
