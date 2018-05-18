import Expo from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Content } from "native-base";

import Counter from "../src/MobXDemo/Counter";

export default class MobXCountDemo extends React.Component {
    render() {
        return <Counter />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
