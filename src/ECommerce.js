import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

import Header from "../src/eCommerceUI/Header";
import Banner from "../src/eCommerceUI/Banner";
import ContentContainer from "../src/eCommerceUI/ContentContainer";

class ECommerce extends Component {
    render() {
        return (
            <ScrollView>
                <Header />
                <Banner />
                <ContentContainer />
            </ScrollView>
        );
    }
}

export default ECommerce;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
