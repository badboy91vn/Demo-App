import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class YoutubeUIDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image
                        source={require("../src/images/youtube.png")}
                        style={{ width: 50, height: 50 }}
                    />
                </View>
            </View>
        );
    }
}

export default YoutubeUIDemo;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: "white",
        elevation: 3
    }
});
