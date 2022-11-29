import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../config/Firebase"; 
import AnimatedLoader from "react-native-animated-loader";
export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        navigation.navigate('Home');
      } else {
        setVisible(false);
      }
    });
  },[])
  const handleUserLogin = () => {
    setVisible(true);
    let mail = email;
    let pass = password;
    setEmail("");
    setPassword("");
    firebase.auth().signInWithEmailAndPassword(mail, pass)
    .then((userCredential) => {
        var user = userCredential.user;
        setVisible(false);
        navigation.navigate('Home');
    })
    .catch((error) => {
        setVisible(false);
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(0,0,0,0.75)"
        source={require("../assets/loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text style={{color:'#fff'}}>Please Wait...</Text>
      </AnimatedLoader>
      <Image style={styles.image} source={require("../assets/images/model.png")} resizeMode="contain" />
 
      <StatusBar style="light" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.registerBtn} onPress={() => {navigation.navigate('Register')}}>
        <Text style={styles.registerText}>Not a User ? Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleUserLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 100,
    height: 100
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#CCCCCC",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    paddingLeft: 10,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#4D44A1",
  },
  loginText:{
    color: "#fff",
  },
  registerBtn : {
    width: "100%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    marginLeft:'auto',
    backgroundColor: "#1E1E1E",
  },
  registerText:{
    color: "#fff",
  }
});