import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class ImageOverlay extends Component {
    render() {
        let header = this.props.header ? (
            <Text style={styles.overlayHeader}>{this.props.header}</Text>
        ) : null;

        let paragraph = this.props.paragraph ? (
            <Text style={styles.overlayText}>{this.props.paragraph}</Text>
        ) : null;

        return (
            <View>
                {header}
                {paragraph}
            </View>
        );
    }
}

export default ImageOverlay;

const styles = StyleSheet.create({
    overlayHeader: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: "#292929",
        textAlign: "center",
        padding: 20,
        backgroundColor: "rgba(255,255,255,.6)"
    },
    overlayText: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: "center",
        fontSize: 16,
        fontStyle: "italic",
        color: "#292929",
        textAlign: "center",
        padding: 8,
        marginTop: 8,
        backgroundColor: "rgba(255,255,255,.6)"
    }
});
