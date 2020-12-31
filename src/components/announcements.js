import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchNews } from '../actions';
import { AnnoCard } from './common';

class Announcements extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity key={item.uid}
        onPress={() => {
          Actions.updateAnnouncements({
            news: item
          })
        }}>
        <AnnoCard>
          <Text style={styles.tweetStyle}> {item.news} </Text>
        </AnnoCard>
      </TouchableOpacity>
    )
  }

  render() {
    const { annoList } = this.props;
    return (
      <View style={styles.tweetListContainer}>
        <FlatList data={annoList}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.uid} />
      </ View>
    )
  }
}

const styles = StyleSheet.create({
  tweetListContainer: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    padding: 10
  },
  tweetStyle: {
    color: 'white',
    fontSize: 18,
    paddingTop: 5,
    padding: 20
  },
  emailStyle: {
    color: '#AAB1B4',
    fontSize: 14,
    alignSelf: 'flex-end',
    paddingBottom: 3
  }
})

const mapStateToProps = state => {
  const annoList = _.map(state.annoList, (val, uid) => {
    return { ...val, uid }
  });

  return {
    annoList
  }
}

export default connect(mapStateToProps, {
  fetchNews
})(Announcements);
