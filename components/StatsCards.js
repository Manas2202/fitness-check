import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ProgressBarAndroid,
    Pressable
} from 'react-native';
import walk from '../assets/images/walk.png';
export default function StatsCards({navigation}) {

    const handlePedometer = () => {
        navigation.navigate('PedometerClass');
    }

    return (
        <>
            <Text style={styles.servicesHeadingText}>Pedometer</Text>
            <View style={styles.statsContainer}>
                <View style={styles.rightCardParent}>
                    <View style={styles.cardHeader}>
                        <Image 
                            source={walk}
                            style={styles.statHeaderImg}
                            />
                    </View>
                    <View style={styles.statsCardFooter}>
                        <Text style={styles.footerText}>Target - ?</Text>
                        <Text style={styles.footerText}>Current - ?</Text>
                        <Text style={styles.statCardType}>Walking</Text>
                    </View>
                    <Pressable style={styles.button} onPress={handlePedometer}>
                        <Text style={styles.text}>Get Started</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    statsContainer : {
        width: '100%',
        height: 230,
        overflow:'hidden',
        borderRadius: 5,
        marginTop: 10,
        marginLeft:'auto',
        marginRight:'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },
    servicesHeadingText : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 15,
        marginTop: 10,
    },
    leftCardParent : {
        width: '48%',
        height: 230,
        backgroundColor: '#FAEFE8',
        borderRadius: 10,
        shadowOffset: {width: 2, height: -4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.5,  
        shadowRadius: 3,  
        elevation: 3,
    },
    rightCardParent : {
        width: '90%',
        height: 230,
        backgroundColor: '#E7E3FF',
        borderRadius: 10,
        shadowOffset: {width: -2, height: -4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        elevation: 3,
    },
    cardHeader:{
        width: '100%',
        height: 50,
        padding: 10,
        marginTop: 5,
    },
    statHeaderImg:{
        width: 30,
        height: 30,
    },
    progressBar : {
        width: '100%',
        height: 10,
    },
    progressBarParent : {
        width: '100%',
        height: 60,
        padding: 10,
    },
    progressText : {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statsCardFooter : {
        width: '100%',
        height: 90,
        padding: 10,
    },
    footerText : {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#171717',
    },
    statCardType : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#171717',
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        elevation: 3,
        marginTop:20,
        backgroundColor: 'black',
        width: '50%',
        marginLeft: 15,
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})