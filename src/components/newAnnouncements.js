import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { AnnoTextArea, MyButton } from './common';
import { changeNews, sendNews } from '../actions';

class NewTweet extends Component {

    onChangeTweet(news) {
        this.props.changeNews(news)
    }

    sendTweet() {
        this.props.sendNews(this.props.news);
    }

    render() {
        return (
            <View style={styles.newTweetContainer}>
                <AnnoTextArea placeholder='Type here...'
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
    const { news } = state.annoForm;
    return {
        news
    }
}

export default connect(mapStateToProps, {
    changeNews, sendNews
})(NewTweet);
