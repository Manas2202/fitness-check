import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ProgressBarAndroid
} from 'react-native';
import cycle from '../assets/images/cycle.png';
import walk from '../assets/images/walk.png';
export default function StatsCards() {
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
                    <View style={styles.progressBarParent}>
                        <Text style={styles.progressText}>60%</Text>
                        <ProgressBarAndroid
                            styleAttr='Horizontal'
                            indeterminate={false}
                            progress={0.6}
                            color='#8860A2'
                            style={styles.progressBar}
                            />
                    </View>
                    <View style={styles.statsCardFooter}>
                        <Text style={styles.footerText}>Target - 5 Km.</Text>
                        <Text style={styles.footerText}>Current - 3 Km.</Text>
                        <Text style={styles.statCardType}>Walking</Text>
                    </View>
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
    }
})