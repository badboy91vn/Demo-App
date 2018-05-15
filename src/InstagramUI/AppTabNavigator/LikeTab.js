import React, { Component } from "react";
import { View, Text } from "react-native";

import { Icon } from "native-base";

class LikeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-heart" style={{ color: tintColor }} />
        )
    };

    render() {
        return (
            <View>
                <Text> LikeTab </Text>
            </View>
        );
    }
}

export default LikeTab;
