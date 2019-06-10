import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import SwiperDemo from "./src/SwiperDemo";
import UberUIDemo from "./src/UberUIDemo";
import AmazonUIDemo from "./src/AmazonUIDemo";
import TwitterUIDemo from "./src/TwitterUIDemo";
import InstagramUIDemo from "./src/InstagramUIDemo";
import LoginAppDemo from "./src/LoginAppDemo";
import HomeSceneUI from "./src/HomeSceneUI";
import ProfileUIDemo from "./src/ProfileUIDemo";
import ECommerce from "./src/ECommerce";
import AirBnbUIDemo from "./src/AirBnbUIDemo";


import MobXCountDemo from "./src/MobXCountDemo";

console.ignoredYellowBox = ["Setting a timer", "Warning: "];

class App extends Component {
    render() {
        return <AirBnbUIDemo />;
    }
}

export default App;
