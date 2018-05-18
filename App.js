import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import SwiperDemo from "./src/SwiperDemo";
import UberUIDemo from "./src/UberUIDemo";
import AmazonUIDemo from "./src/AmazonUIDemo";
import TwitterUIDemo from "./src/TwitterUIDemo";
import InstagramUIDemo from "./src/InstagramUIDemo";
import LoginAppDemo from "./src/LoginAppDemo";
import HomeSceneUI from "./src/HomeSceneUI";
import MobxCountDemo from "./src/MobxCountDemo";
import MobXListDemo from "./src/MobXListDemo";

console.ignoredYellowBox = ["Setting a timer", "Warning: "];

class App extends Component {
    render() {
        return <MobXListDemo />;
    }
}

export default App;
