import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

class HomeSceneUI extends Component {
    render() {
        return (
            <ImageBackground
                source={require("./images/bg_login.jpg")}
                style={styles.container}
            >
                <View style={styles.overlayContainer}>
                    <View style={styles.topContent}>
                        <Text style={styles.headerText}>H o m e</Text>
                    </View>
                    <View style={styles.botContent}>
                        <View style={styles.menuItem}>
                            <Text>1</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text>2</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text>3</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text>4</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text>5</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text>6</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default HomeSceneUI;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%",
        height: "100%"
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: "rgba(225, 131, 255, 0.4)"
    },
    topContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 50,
        color: "white",
        borderWidth: 1,
        borderColor: "white",
        padding: 20,
        paddingHorizontal: 40,
        backgroundColor: "rgba(255,255,255,.2)"
    },
    botContent: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    menuItem: {
        width: "30%",
        height: "30%",
        padding: 20,
        margin: 2,
        borderColor: "#000",
        borderWidth: 2,
        backgroundColor: "rgba(255,255,255,.5)",
        justifyContent: "center",
        alignItems: "center"
    }
});
