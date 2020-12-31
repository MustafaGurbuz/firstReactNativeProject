import React from 'react';
import { StyleSheet, View } from 'react-native';

const AnnoCard = (props) => {
    return (
        <View style={styles.cardWrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#dddddd',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
});

export { AnnoCard };
