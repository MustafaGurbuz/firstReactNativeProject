import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { changeContact, updateContact, deleteContact } from '../actions';
import { TextArea, MyButton } from './common';

class UpdateContact extends Component {

    componentDidMount() {
        const { contact } = this.props.contact;

        this.props.changeContact(contact);
        this.checkEmail = this.checkEmail.bind(this);

    }

    onChangeContact(contact) {
        this.props.changeContact(contact);
    }

    checkEmail(callback) {
        const { email } = this.props.user;
        const tweetEmail = this.props.contact.email;
        if (tweetEmail === email) {
            callback();
        } else {
            Alert.alert(
                'Wrong Email',
                'This is not your tweet, so you can\'t update or delete it. ',
                [
                    { text: 'OK', onPress: () => console.log('wrong email') }
                ]
            )
        }
    }

    updateContact() {
        this.checkEmail(() => {
            const tweetObj = {
                ...this.props.contact,
                contact: this.props.contactForm.contact
            };
            this.props.updateContact(tweetObj);
        })
    }

    deleteContact() {
        this.checkEmail(() => {
            Alert.alert(
                'Are you sure?',
                'This tweet will be deleted after you clicked OK.',
                [
                    {
                        text: 'OK', onPress: () => {
                            const { uid } = this.props.contact;
                            this.props.deleteContact(uid);
                        }
                    },
                    { text: 'Cancel', onPress: () => console.log('canceled') }
                ]
            )
        })
    }

    render() {
        const { contactForm } = this.props;

        return (
            <View style={styles.updateContainer}>
                <TextArea placeholder='Type here...'
                    value={contactForm.contact}
                    onChangeText={this.onChangeContact.bind(this)}
                />
                <MyButton spinner={false}
                    title='Update'
                    onPress={this.updateContact.bind(this)}
                    color='dodgerblue'
                    backgroundColor='dodgerblue' />
                <MyButton spinner={false}
                    title='Delete'
                    onPress={this.deleteContact.bind(this)}
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
        contactForm: state.contactForm
    }
}

export default connect(mapStateToProps, {
    changeContact, updateContact, deleteContact
})(UpdateContact);
