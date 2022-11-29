import React , {useState,useEffect} from 'react';
import  {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    Dimensions,
    FlatList,
    ImageBackground,
    Pressable,
    ScrollView,
} from 'react-native';
import { VideoTypeData } from './VideoTypeData';
import { firebase } from '../config/Firebase';
import AnimatedLoader from "react-native-animated-loader";
import Header from '../components/Header';
export default function VideoType({navigation}) {
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
                    console.log(userDetails);
                });
            } else {
                setUser(null);
                setVisible(false);
                navigation.navigate('Login');
            }
        });
    },[]);

    const handleVideoTypePress = (title) => {
        navigation.navigate('VideosList', {title});
    }

    return (
        <ScrollView style={styles.scrollView}>
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
                        <SafeAreaView style={styles.container}>
                            {
                                VideoTypeData.map((item, index) => {
                                    return (
                                        <Pressable key={index} style={styles.videoTypeCardParent} onPress={() => handleVideoTypePress(item.title)}>
                                            <Image source={item.image} style={styles.videoTypeCard} />
                                            <Text style={styles.videoTypeCardText}>{item.title}</Text>
                                        </Pressable>
                                    )
                                })
                            }
                        </SafeAreaView>
                    </>
                ) :  (
                    <></>
                )
            }
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 30,
    },
    lottie: {
        width: 100,
        height: 100
    },
    headingText : {
        fontSize: 20,
        fontWeight: 'bold',
    },
    videoTypeCardParent : {
        width: '46%',
        overflow:'hidden',  
        borderRadius: 5,
        height: 170,
        marginTop: 20,
        overflow: 'hidden',
    },
    scrollView : {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    videoTypeCard : {
        width: '98%',
        height: 125,
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    videoTypeCardText : {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 7,
        // marginLeft: 20,
        textAlign: 'center',
    },
});