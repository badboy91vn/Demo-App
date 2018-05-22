import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Bar extends Component {
    render() {
        return (
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.barSeparator]}>
                    <Text style={styles.barTop}>12k</Text>
                    <Text style={styles.barBot}>Followers</Text>
                </View>

                <View style={styles.barItem}>
                    <Text style={styles.barTop}>1k</Text>
                    <Text style={styles.barBot}>Following</Text>
                </View>
            </View>
        );
    }
}

export default Bar;

const styles = StyleSheet.create({
    bar: {
        borderTopColor: "#fff",
        borderWidth: 4,
        backgroundColor: "#ec2c4e",
        flexDirection: "row"
    },
    barSeparator: {
        borderRightWidth: 4
    },
    barItem: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    barTop: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    barBot: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    }
});
