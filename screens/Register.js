import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleUserRegister = () => {
    let mail = email;
    let pass = password;
    let fname = name;
    setEmail("");
    setPassword("");
    setName("");
    firebase.auth().createUserWithEmailAndPassword(mail, pass)
    .then((userCredential) => {
      console.log(userCredential.user); 
      var user = userCredential.user;
      firebase.database().ref('users/' + user.uid).set({
          name: fname,
          email: mail,
          password: pass,
      }).then((data)=>{
          console.log('data ', data)
          navigation.navigate('Home');
      }).catch((error)=>{
          console.log('error ', error)
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/images/model.png")} resizeMode="contain" />
 
      <StatusBar style="light" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          value={name}
        />
      </View>

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
      <TouchableOpacity style={styles.registerBtn} onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.registerText}>Already a User ? Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleUserRegister}>
        <Text style={styles.loginText}>Register</Text>
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