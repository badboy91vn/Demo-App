import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Animated,
    Platform,
    StatusBar
} from "react-native";

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

class TwitterUIDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0)
        };
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: "clamp"
        });
        const headerZindex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [0, 1],
            extrapolate: "clamp"
        });

        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
            extrapolate: "clamp"
        });
        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [
                HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
                HEADER_MAX_HEIGHT + 5
            ],
            extrapolate: "clamp"
        });

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [
                0,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT -
                    HEADER_MIN_HEIGHT +
                    5 +
                    PROFILE_IMAGE_MIN_HEIGHT,
                HEADER_MAX_HEIGHT -
                    HEADER_MIN_HEIGHT +
                    5 +
                    PROFILE_IMAGE_MIN_HEIGHT +
                    26
            ],
            outputRange: [-20, -20, -20, 0],
            extrapolate: "clamp"
        });

        return (
            <View style={{ flex: 1 }}>
                <Animated.View
                    style={[
                        styles.androidHeader,
                        styles.headerView,
                        {
                            alignItems: "center",
                            height: headerHeight,
                            zIndex: headerZindex
                        }
                    ]}
                >
                    <Animated.View
                        style={{
                            position: "absolute",
                            bottom: headerTitleBottom
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                fontWeight: "bold"
                            }}
                        >
                            Hà Nhật Linh
                        </Text>
                    </Animated.View>
                </Animated.View>

                <ScrollView
                    scrollEventThrottle={16}
                    style={{ flex: 1 }}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: { y: this.state.scrollY }
                            }
                        }
                    ])}
                >
                    <Animated.View
                        style={[
                            styles.profileView,
                            {
                                width: profileImageHeight,
                                height: profileImageHeight,
                                marginTop: profileImageMarginTop
                            }
                        ]}
                    >
                        <Image
                            style={{ flex: 1, width: null, height: null }}
                            source={require("../src/images/avatar.jpg")}
                        />
                    </Animated.View>
                    <View>
                        <Text style={styles.textName}>Hà Nhật Linh</Text>
                    </View>
                    <View style={{ height: 700 }} />
                </ScrollView>
            </View>
        );
    }
}

export default TwitterUIDemo;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    },
    headerView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "lightskyblue"
    },

    profileView: {
        borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
        borderColor: "white",
        borderWidth: 3,
        overflow: "hidden",
        marginLeft: 10
    },
    textName: {
        fontWeight: "bold",
        fontSize: 26,
        paddingTop: 10,
        paddingLeft: 10
    }
});
