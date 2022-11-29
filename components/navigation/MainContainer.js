import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Hospital from '../../screens/Hospital';
import VideoType from '../../screens/VideoType';
import VideosList from '../../screens/VideosList';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import PedometerClass from '../../screens/PedometerClass';
const homeName = 'Home';
const profileName = 'Profile';
const hospitalName = 'Hospital';
const videoTypeName = 'Videos';
const videosListTypeName = 'VideosList';
const loginName = 'Login';
const registerName = 'Register';
const pedometerName = 'PedometerClass';
const Tab = createBottomTabNavigator();

export default function MainContainer () {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName={loginName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        }else if (route.name === videoTypeName) {
                            iconName = focused ? 'videocam' : 'videocam-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#000',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name={homeName} component={Home} options={{headerShown: false}}/>
                <Tab.Screen name={videoTypeName} component={VideoType} options={{headerShown: false}}/>
                <Tab.Screen name={videosListTypeName} component={VideosList} options={{headerShown: false,tabBarStyle:{display:'none'},tabBarLabel:''}}/>
                <Tab.Screen name={loginName} component={Login} options={{headerShown: false,tabBarStyle:{display:'none'},tabBarLabel:''}}/>
                <Tab.Screen name={registerName} component={Register} options={{headerShown: false,tabBarStyle:{display:'none'},tabBarLabel:''}}/>
                <Tab.Screen name={pedometerName} component={PedometerClass} options={{headerShown: false,tabBarStyle:{display:'none'},tabBarLabel:''}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        height: 60,
        width: '97%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});