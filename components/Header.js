import React,{useState} from 'react';
import {
    Text,
    View,
    Image,
    Pressable,
    Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../config/Firebase';
import AnimatedLoader from "react-native-animated-loader";
export default function Header({user,navigation}) {
    const [dropdown,setDropdown] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleUserLogout = () => {
        setVisible(true);
        firebase.auth().signOut().then(() => {
            console.log('User signed out!');
            setModalVisible(false);
            setVisible(false);
            navigation.navigate('Login');
        }).catch((error) => {
            setModalVisible(false);
            setVisible(false);
            console.log(error);
        });
    }

    return (
        <View style={styles.headerContainer}>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(0,0,0,0.75)"
                source={require("../assets/loader.json")}
                animationStyle={styles.lottie}
                speed={1}
            >
                <Text style={{color:'#fff'}}>Please Wait...</Text>
            </AnimatedLoader>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Do you really want to logout ? </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleUserLogout}
                            >
                            <Text style={styles.textStyle}>Yes</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>No</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={styles.headerLeft}>
                <Image
                    style={styles.headerLogo}
                    source={require('../assets/images/header.jpg')}
                    resizeMode="contain"
                />
                <View style={styles.headerUserInfo}>
                    <Text style={styles.userFullName}>{user.name}</Text>
                    {/* <Text style={styles.userAge}>Age</Text> */}
                </View>
            </View>
            <View style={styles.headerRight}>
                <Pressable onPress={() => setDropdown(!dropdown)}>
                    <Ionicons name='log-in-outline' size={30} color='#000' onPress={() => setModalVisible(true)}/>
                </Pressable>
                {
                    dropdown ?
                    <View style={styles.notificationDropdownParent}>
                        <View style={styles.notificationDropdown}>
                            <Text style={styles.notificationText}>Notification 1</Text>
                        </View>
                        <View style={styles.notificationDropdown}>
                            <Text style={styles.notificationText}>Notification 1</Text>
                        </View>
                        <View style={styles.notificationDropdown}>
                            <Text style={styles.notificationText}>Notification 1</Text>
                        </View>
                    </View> : null
                } 
            </View>
        </View>
    )
}

import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    headerContainer : {
        marginTop: 35,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headerRight : {
        height: 50,
        width: 50,
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
    },
    notificationDropdownParent : {
        position: 'absolute',
        top: 50,
        right: 0,
        width: 150,
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 5,
        zIndex: 2000,
        shadowOffset: {width: 4, height: -4},
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
    },
    notificationDropdown : {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
    },
    notificationText : {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },  
    headerLeft : {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    headerLogo:{
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    headerUserInfo : {
        height:50,
        justifyContent: 'center',
        marginLeft: 10,
    },
    userFullName:{
        fontSize:16,
        fontWeight:'bold',
    },
    userAge : {
        fontSize: 12,
    },
    notificationIcon:{
        width: 30,
        height: 30,
        alignSelf: 'center',
    },
    hiddenClass : {
        display: 'none',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: '100%',
      },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 10,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
    }
})