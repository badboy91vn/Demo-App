import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomImage from "../eCommerceUI/CustomImage";

class ContentContainer extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.col2}>
                    <CustomImage
                        imgURL={require("../images/avatar.jpg")}
                        header={"- HNL -"}
                        paragraph={"- 1991 -"}
                    />
                </View>
                <View style={styles.col1}>
                    <CustomImage
                        imgURL={require("../images/bg_login.jpg")}
                        header={"- HNL -"}
                        paragraph={"- 1991 -"}
                    />
                </View>
                <View style={styles.contentBanner}>
                    <CustomImage
                        imgURL={require("../images/amazon/recommended_2.jpg")}
                        header={"- HNL -"}
                        paragraph={"- 1991 -"}
                    />
                </View>
                <View style={styles.col1}>
                    <CustomImage
                        imgURL={require("../images/avatar.jpg")}
                        header={"- HNL -"}
                        paragraph={"- 1991 -"}
                    />
                </View>
                <View style={styles.col2}>
                    <CustomImage
                        imgURL={require("../images/bg_login.jpg")}
                        header={"- HNL -"}
                        paragraph={"- 1991 -"}
                    />
                </View>
            </View>
        );
    }
}

export default ContentContainer;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 5
    },
    col1: {
        flex: 1,
        padding: 5
    },
    col2: {
        flex: 2,
        padding: 5
    },
    contentBanner: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    }
});
