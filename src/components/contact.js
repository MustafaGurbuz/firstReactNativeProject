import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchContact } from '../actions';
import { Card } from './common';

class Contact extends Component {

    componentDidMount() {
        this.props.fetchContact();
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity key={item.uid}
                onPress={() => {
                    Actions.updateContact({
                        contact: item
                    })
                }}>
                <Card>
                    <Text style={styles.tweetStyle}> {item.contact} </Text>
                    <Text style={styles.emailStyle}> {item.email} </Text>
                </Card>
            </TouchableOpacity>
        )
    }

    render() {
        const { contactList } = this.props;
        return (
            <View style={styles.tweetListContainer}>
                <FlatList data={contactList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.uid} />
            </ View>
        )
    }
}

const styles = StyleSheet.create({
    tweetListContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    tweetStyle: {
        color: '#7B8D93',
        fontSize: 18,
        paddingTop: 5
    },
    emailStyle: {
        color: '#AAB1B4',
        fontSize: 14,
        alignSelf: 'flex-end',
        paddingBottom: 3
    }
})

const mapStateToProps = state => {
    const contactList = _.map(state.contactList, (val, cid) => {
        return { ...val, cid }
    });

    return {
        contactList
    }
}

export default connect(mapStateToProps, {
    fetchContact
})(Contact);
