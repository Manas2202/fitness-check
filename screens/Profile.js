import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Profile() {
    return (
        <View style={styles.profileMainContainer}>
            <Text>This is Profile Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileMainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
