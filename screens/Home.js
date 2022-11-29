import React , {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    StatusBar
} from 'react-native';
import Header from '../components/Header';
import DietCard from '../components/DietCard';
import StatsCards from '../components/StatsCards';
import ServicesCarousel from '../components/ServicesCarousel';
import { firebase } from '../config/Firebase';
import AnimatedLoader from "react-native-animated-loader";


export default function Home({navigation}) {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
        firebase.auth().onAuthStateChanged((userData) => {
            if (userData) {
                setUser(userData);
                firebase.database().ref('users/' + userData.uid).once('value').then((snapshot) => {
                    setUserDetails(snapshot.val());
                    setVisible(false);
                });
            } else {
                setUser(null);
                setVisible(false);
                navigation.navigate('Login');
            }
        });
    },[])
    return (
        <ScrollView style={styles.homeContainer}>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(0,0,0,0.75)"
                source={require("../assets/loader.json")}
                animationStyle={styles.lottie}
                speed={1}
            >
                <Text style={{color:'#fff'}}>Please Wait...</Text>
            </AnimatedLoader>
            {
                user && userDetails !== null ? (
                    <>
                        <Header user={userDetails} navigation={navigation}/>
                        <DietCard />
                        <StatsCards />
                        <ServicesCarousel />
                    </>
                ) :  (
                    <View style={styles.container}>
                    </View>
                )
            }
            <StatusBar style="dark" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeContainer : {
        position: 'relative',
        border:2,
        borderColor: '#000',
        marginTop: 20,
    },
    lottie: {
        width: 100,
        height: 100
    },
})