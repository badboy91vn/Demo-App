import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

class Header extends Component {
    render() {
        return (
            <ImageBackground
                source={require("../images/bg_login.jpg")}
                style={styles.headerBG}
            >
                <View style={styles.header}>
                    <View style={styles.profileImgWrap}>
                        <Image
                            style={styles.profileImg}
                            source={require("../images/avatar.jpg")}
                        />
                    </View>
                    <Text style={styles.txtName}>Ha Nhat Linh</Text>
                    <Text style={styles.txtJob}>- APP DEVERLOPER -</Text>
                </View>
            </ImageBackground>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    headerBG: {
        flex: 1,
        width: null,
        alignSelf: "stretch"
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.5)"
    },
    profileImgWrap: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderColor: "rgba(0,0,0,.4)",
        borderWidth: 12
    },
    profileImg: {
        flex: 1,
        width: null,
        alignSelf: "stretch",
        borderRadius: 90,
        borderColor: "#fff",
        borderWidth: 4
    },
    txtName: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    },
    txtJob: {
        fontSize: 14,
        fontWeight: "300",
        fontStyle: "italic",
        color: "#5299cc"
    }
});
