import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../images/avatar.jpg")}
                    style={styles.img}
                />
                <Text style={styles.txtLogo}> E - Commerce </Text>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 70,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: "#ccc"
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 20,        
    },
    txtLogo: {
        fontSize: 20,
        fontStyle: "italic",
        color: "#292929",
        marginLeft: 5
    }
});
