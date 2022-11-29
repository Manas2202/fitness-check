import React,{useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ProgressBarAndroid,
    SafeAreaView,
    Dimensions,
    FlatList,
    ImageBackground,
    Pressable,
    Modal,
    TextInput,
} from 'react-native';
import BG from '../assets/images/BG.png';
import axios from 'axios';
import AnimatedLoader from "react-native-animated-loader";
import { handleBmiQuery } from '../server/BmiApi';
const {width} = Dimensions.get('window');
const ITEM_LENGTH = width * 0.8;
export default function ServicesCarousel() {
    const [modalVisible, setModalVisible] = useState(false);
    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);
    const [bmi,setBmi] = useState(null);
    const [visible, setVisible] = useState(false);
    const [data,setData] = useState(
        [
            {
                title:"Item 1",
                text: "Text 1",
            },
            {
                title:"Item 2",
                text: "Text 2",
            },
            {
                title:"Item 3",
                text: "Text 3",
            },
            {
                title:"Item 4",
                text: "Text 4",
            },
            {
                title:"Item 5",
                text: "Text 5",
            },
          ]
    );

    const handleCalculateBmi = () => {
        setVisible(true);
        axios.get(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key' : '74804162c4mshaa410f577e14bb4p18740bjsndb808b289504',
                'X-RapidAPI-Host' : 'body-mass-index-bmi-calculator.p.rapidapi.com'
            }
        }).then(response => {
            setVisible(false);
            console.log(response.data);
            setBmi(response.data.bmi);
        }).catch(error => {
            setVisible(false);
            console.log(error);
        })
    }



    return (
        <SafeAreaView style={{flex: 1, paddingTop: 5, }}>
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
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextHeading}>Calculate BMI Here</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Your Weight In Kg"
                                placeholderTextColor="#003f5c"
                                onChangeText={(weight) => setWeight(weight)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Enter Your Height In meters"
                                placeholderTextColor="#003f5c"
                                onChangeText={(height) => setHeight(height)}
                            />
                        </View>
                        <Pressable
                            style={[styles.button1, styles.buttonClose]}
                            onPress={handleCalculateBmi}
                        >
                            <Text style={styles.textStyle}>Calculate BMI</Text>
                        </Pressable>
                        <Text style={styles.modalTextBmi}>Your BMI is - { bmi ? bmi : <>?</> }</Text>
                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            color="#BC142A"
                            onPress={() => {
                                setModalVisible(!modalVisible); 
                                setBmi(null)
                            }}
                        >
                            <Text style={styles.textStyle}>Close Calculator</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.servicesHeadingText}>Bmi Calculator</Text>
                <View style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
                    <ImageBackground source={BG} style={styles.itemContent}>
                        <Text style={styles.servicesCardHeading}>BMI Calculator</Text>
                        <Pressable style={styles.button} onPress={() => {setModalVisible(true)}}>
                            <Text style={styles.text}>Get Started</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    serviceCarouselContainer : {
        width: '100%',
        overflow:'hidden',
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginLeft:'auto',
        marginRight:'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop : 25
    },
    lottie: {
        width: 100,
        height: 100
    },
    itemContent: {
        backgroundColor: '#8860A2',
        borderRadius: 5,
        width : '100%',
        height: 100,
    },
    servicesHeadingText : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    servicesCardHeading : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 15,
        marginTop: 15,
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: '100%',
        height: '60%',
    },
    modalView: {
        margin: 20,
        width: '90%',
        height: '60%',
        backgroundColor: "white",
        borderRadius: 10,
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
    button1: {
        borderRadius: 10,
        padding: 10,
        width: '50%',
        marginTop: 10,
        elevation: 2
    },
    button2: {
        borderRadius: 10,
        padding: 10,
        width: '50%',
        marginTop: 30,
        elevation: 2
    },
    button1: {
        borderRadius: 10,
        padding: 10,
        width: '50%',
        marginTop: 10,
        elevation: 2
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
    modalTextHeading: {
        fontSize: 20,
        textAlign: "left",
        marginBottom: 25,
    },
    inputView: {
        backgroundColor: "#CCCCCC",
        width: "100%",
        height: 50,
        marginBottom: 20,
        paddingLeft: 10,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        backgroundColor: '#CCCCCC',
        width: '100%',
        borderRadius: 10,
    },
    modalTextBmi : {
        fontSize: 20,
        textAlign: "left",
        marginTop: 25,
    }
})