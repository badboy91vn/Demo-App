import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import LoginScreen from "../src/uberUI/LoginScreen";

const UberUIStackNavigator = StackNavigator({
    LoginPage: { screen: LoginScreen }
});

class UberUIDemo extends Component {
    render() {
        return <UberUIStackNavigator />;
    }
}

export default UberUIDemo;
