import React, { Component } from "react";
import { View, Text } from "react-native";

import { StackNavigator } from "react-navigation";

import MainScreen from "../src/InstagramUI/MainScreen";

const AppStackNavigator = StackNavigator({
    MainPage: { screen: MainScreen }
});

class InstagramUIDemo extends Component {
    render() {
        return <AppStackNavigator />;
    }
}

export default InstagramUIDemo;
