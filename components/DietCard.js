import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    Image,
    ImageBackground,
    Pressable
} from 'react-native';
import BG from '../assets/images/BG.png';
import Model from '../assets/images/model.png';
import Fire from '../assets/images/fire.png';
export default function DietCard() {

    const onPress = () => {
        console.log("Something!")
    }

    return (
        <ImageBackground style={styles.dietContainer} source={BG} resizeMode="cover" width="100%" height="100%">
            <View style={styles.dietCardLeft}>
                <View style={styles.dietCardLeftInner}>
                    <Image source={Fire} style={styles.dietCardFireImg}/>
                    <Text style={styles.dietTextOne}>Welcome To Fitness Check!</Text>
                </View>
                <Text style={styles.dietTextTwo}>The one & only solution for your all health problem</Text>
            </View>
            <View style={styles.dietCardRight}>
                <Image source={Model} style={styles.dietChatImg}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    dietContainer : {
        width: '100%',
        height: 200,
        overflow:'hidden',
        borderRadius: 5,
        marginTop: 20,
        marginLeft:'auto',
        marginRight:'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },
    dietCardLeft : {
        width: '50%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    dietCardRight : {
        width: '50%',
        height: 200,
    },
    dietChatImg : {
        width: '100%',
        height: 200,
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    dietCardLeftInner:{
        width: '100%',
        flexDirection: 'row',
    },
    dietCardFireImg:{
        width: 18,
        height: 18,
        borderRadius: 50/2,
        marginRight: 10,    
    },
    dietTextOne : {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
    },
    dietTextTwo : {
        color: '#ccc',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        elevation: 3,
        marginTop:10,
        backgroundColor: 'black',
        width: '70%',
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})