import React,{useState,useEffect} from 'react';
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
    TouchableOpacity,
    StatusBar
} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import { WebView } from 'react-native-webview';
import { firebase } from '../config/Firebase';
import Header from '../components/Header';
export default function VideosList({navigation,route}) {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [visible, setVisible] = useState(false);
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        setVisible(true);
        firebase.auth().onAuthStateChanged((userData) => {
            if (userData) {
                setUser(userData);
                firebase.database().ref('users/' + userData.uid).once('value').then((snapshot) => {
                    if(route.params.title === 'Yoga'){
                        setVideoList([
                            {
                                id: 's2NQhpFGIOg',
                            },
                            {
                                id: 'QWB6nRcxyTc',
                            },
                            {
                                id: 'Eml2xnoLpYE',
                            },
                            {
                                id: 'phuS5VLQy8c',
                            },
                            {
                                id: 'AzV3EA-1-yM',
                            },
                            {
                                id: 'hJbRpHZr_d0',
                            },
                        ])
                    }else if(route.params.title === 'Zumba'){
                        setVideoList([
                            {
                                id: 'vG_Bs0QLc3I',
                            },
                            {
                                id: 'MwHtUKyLrac',
                            },
                            {
                                id: 'aNX4GH7VPSA',
                            },
                            {
                                id: 'xfmHPW-AfQs',
                            },
                            {
                                id: 'qkH-X3IQv_4',
                            },
                            {
                                id: 'gGEeyRydzy0',
                            },
                        ])
                    }else if(route.params.title === 'Healthy Food'){
                        setVideoList([
                            {
                                id: 'EhfOZMOF9W4',
                            },
                            {
                                id: 'c7DAMvmeL2U',
                            },
                            {
                                id: '5dR22hbln6w',
                            },
                            {
                                id: 'SuNc0QRTvGA',
                            },
                            {
                                id: 'DVs3TReDkwo',
                            },
                            {
                                id: 'V5gSyFYdTpY',
                            },
                        ])
                    }else if(route.params.title === 'Workout'){
                        setVideoList([
                            {
                                id: 'eaRQF-7hhmo',
                            },
                            {
                                id: 'AzV3EA-1-yM',
                            },
                            {
                                id: 'ml6cT4AZdqI',
                            },
                            {
                                id: 'IT94xC35u6k',
                            },
                            {
                                id: 'ow3hpYJqYEI',
                            },
                            {
                                id: 'cO8cccJkQ1c',
                            },
                        ])
                    }else if(route.params.title === 'Meditation'){
                        setVideoList([
                            {
                                id: 'YWDRFZFCrGE',
                            },
                            {
                                id: 'JEoxUG898qY',
                            },
                            {
                                id: 'Hzi3PDz1AWU',
                            },
                            {
                                id: 'wruCWicGBA4',
                            },
                            {
                                id: 'XnT_cOq_Ba8',
                            },
                            {
                                id: 'aIIEI33EUqI',
                            },
                        ])
                    }else if(route.params.title === 'Healthy Routine'){
                        setVideoList([
                            {
                                id: '0vGWYrIpoII',
                            },
                            {
                                id: 'w98WtcKtL6M',
                            },
                            {
                                id: 'OCRNsFJ8kzM',
                            },
                            {
                                id: 'DuX7De5xGBE',
                            },
                            {
                                id: 'SL-Ucy8NfHs',
                            },
                            {
                                id: 'mqgh-rJMKSc',
                            },
                        ])
                    }
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
        <ScrollView style={styles.videosContainer}>
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
                user && userDetails !== null ? 
                    videoList.map((item,index) => {
                        return(
                            <View style={styles.webViewContainer} key={item.id}>
                                <WebView
                                    style={styles.webView}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{uri: 'https://www.youtube.com/embed/' + item.id }}
                                />
                            </View>
                        )
                    })
                : (
                    <View style={styles.container}>
                    </View>
                )
            }
            <StatusBar style="dark" />   
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    videosContainer : {
        backgroundColor: '#fff',
        marginTop: 30,
    },
    lottie: {
        width: 100,
        height: 100
    },
    webView: {
        width: Dimensions.get('window').width,
        height: 300,
    },
    webViewContainer : {
        width: Dimensions.get('window').width,
        height: 300,
        backgroundColor: '#000',
        marginBottom: 10,
    }
});