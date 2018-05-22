import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "../src/profileUI/Header";
import Bar from "../src/profileUI/Bar";
import IMGView from "../src/profileUI/IMGView";

class ProfileUIDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Bar />
                <IMGView />
            </View>
        );
    }
}

export default ProfileUIDemo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
});
