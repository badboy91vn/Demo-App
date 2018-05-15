import React, { Component } from "react";
import { View, Text, Platform } from "react-native";

import { TabNavigator } from "react-navigation";
import { Icon } from "native-base";

import HomeTab from "../InstagramUI/AppTabNavigator/HomeTab";
import SearchTab from "../InstagramUI/AppTabNavigator/SearchTab";
import AddMediaTab from "../InstagramUI/AppTabNavigator/AddMediaTab";
import LikeTab from "../InstagramUI/AppTabNavigator/LikeTab";
import ProfileTab from "../InstagramUI/AppTabNavigator/ProfileTab";

const AppTabNavigator = TabNavigator(
    {
        HomeTab: {
            screen: HomeTab
        },
        SearchTab: {
            screen: SearchTab
        },
        AddMediaTab: {
            screen: AddMediaTab
        },
        LikeTab: {
            screen: LikeTab
        },
        ProfileTab: {
            screen: ProfileTab
        }
    },
    {
        initialRouteName: "HomeTab",
        tabBarPosition: "bottom",
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: "white"
                    }
                })
            },
            activeTintColor: "#000",
            inactiveTintColor: "#dedede",
            showLabel: false,
            showIcon: true
        }
    }
);

class MainScreen extends Component {
    static navigationOptions = {
        header: null
        // headerLeft: (
        //     <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />
        // ),
        // title: "Instagram",
        // headerRight: (
        //     <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />
        // )
    };

    render() {
        return <AppTabNavigator />;
    }
}

export default MainScreen;
