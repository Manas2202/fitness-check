import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView
} from 'react-native';

export default function BottomNav () {
    return (
        <View style={styles.bottomNavContainer}>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavContainer : {
        height: 60,
        width: '97%',
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 'auto',
        position:'absolute',
        bottom: -20,
        left: 10,
        paddingHorizontal: 10,
    },
});