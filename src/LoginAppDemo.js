import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import * as firebase from "firebase";

import Login from "./LoginAppDemo/Login";
import Register from "./LoginAppDemo/Register";

var firebaseConfig = {
    apiKey: "AIzaSyDodc-hH05LJu_L_0VEPGnWDujHK42GB-g",
    authDomain: "beerinfo-37e7b.firebaseapp.com",
    databaseURL: "https://beerinfo-37e7b.firebaseio.com",
    projectId: "beerinfo-37e7b",
    storageBucket: "",
    messagingSenderId: "305533605616"
};
firebase.initializeApp(firebaseConfig);

const AppStackNavigator = StackNavigator(
    {
        LoginPage: {
            screen: Login
        },
        RegisterPage: {
            screen: Register
        }
    },
    {
        initialRouteName: "LoginPage"
    }
);

class LoginAppDemo extends Component {
    render() {
        return <AppStackNavigator />;
    }
}

export default LoginAppDemo;
