import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { changeNews, updateNews, deleteNews } from '../actions';
import { TextArea, MyButton } from './common';

class UpdateTweet extends Component {

    componentDidMount() {
        const { news } = this.props.news;

        this.props.changeNews(news);
        this.checkEmail = this.checkEmail.bind(this);

    }

    onChangeNews(news) {
        this.props.changeNews(news);
    }

    checkEmail(callback) {
        const { email } = this.props.user;
        const tweetEmail = this.props.news.email;
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

    updateNews() {
        this.checkEmail(() => {
            const tweetObj = {
                ...this.props.news,
                news: this.props.annoForm.news
            };
            this.props.updateNews(tweetObj);
        })
    }

    deleteNews() {
        this.checkEmail(() => {
            Alert.alert(
                'Are you sure?',
                'This tweet will be deleted after you clicked OK.',
                [
                    {
                        text: 'OK', onPress: () => {
                            const { uid } = this.props.news;
                            this.props.deleteNews(uid);
                        }
                    },
                    { text: 'Cancel', onPress: () => console.log('canceled') }
                ]
            )
        })
    }

    render() {
        const { annoForm } = this.props;

        return (
            <View style={styles.updateContainer}>
                <TextArea placeholder='Type here...'
                    value={annoForm.news}
                    onChangeText={this.onChangeNews.bind(this)}
                />
                <MyButton spinner={false}
                    title='Update'
                    onPress={this.updateNews.bind(this)}
                    color='dodgerblue'
                    backgroundColor='dodgerblue' />
                <MyButton spinner={false}
                    title='Delete'
                    onPress={this.deleteNews.bind(this)}
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
        annoForm: state.annoForm
    }
}

export default connect(mapStateToProps, {
    changeNews, updateNews, deleteNews
})(UpdateTweet);
