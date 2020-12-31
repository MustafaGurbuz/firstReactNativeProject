import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {

    onPersonel() {
        Actions.tweets();
    }

    onAnnouncements() {
        Actions.announcements();
    }

    render() {
        return (
            <View style={styles.homeContainer}>
                <TouchableOpacity onPress={() => this.onPersonel()}>
                    <View style={styles.newButtonContainer}>
                        <Text style={styles.textStyle}>Personel Sayfası</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.newButtonContainer}>
                        <Text style={styles.textStyle}>Araçlar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onPersonel()}>
                    <View style={styles.newButtonContainer}>
                        <Text style={styles.textStyle}>Personel Takip</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onAnnouncements()}>
                    <View style={styles.newButtonContainer}>
                        <Text style={styles.textStyle}>Duyurular</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: 'lightgray',
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    newButtonContainer: {
        height: 100,
        width: 250,
        flexDirection: "column",
        backgroundColor: "orange",
        padding: 25,
        margin: 10,
        borderWidth: 5,
        borderTopRightRadius: 150,
        borderBottomStartRadius: 150
    },
    textStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold"
    }
});


export default Home;
