import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import ImageOverlay from "./ImageOverlay";

class Banner extends Component {
    render() {
        return (
            <ImageBackground
                source={require("../images/bg_login.jpg")}
                style={styles.img}
            >
                {/* <Text style={styles.txtBanner}>Banner</Text> */}
                <ImageOverlay
                    header={"React Native"}
                    paragraph={"e-commerce"}
                />
            </ImageBackground>
        );
    }
}

export default Banner;

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 250,
        alignItems: "center",
        justifyContent: "center"
    },
    txtBanner: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 30,
        color: "#fff",
        borderRadius: 20,
        backgroundColor: "rgba(1,0,0,.5)"
    }
});
