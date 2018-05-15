import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    Animated,
    Dimensions,
    Keyboard,
    Platform
} from "react-native";

import { Icon } from "native-base";
const SCREEN_HEIGHT = Dimensions.get("window").height;
import * as Animatable from "react-native-animatable";

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            placeholderPhoneNumber: "Enter your phone number",
            valueTextPhoneNumber: ""
        };
    }

    componentWillMount() {
        this.loginHeight = new Animated.Value(150);

        this.keyboardWillShowListener = Keyboard.addListener(
            "keyboardWillShow",
            this.keyboardWillShow
        );
        this.keyboardWillHideListener = Keyboard.addListener(
            "keyboardWillHide",
            this.keyboardWillHide
        );
        this.keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            this.keyboardWillShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            this.keyboardWillHide
        );

        this.keyboardHeight = new Animated.Value(0);
        this.forwardArrowOpacity = new Animated.Value(0);
        this.borderBottomWidth = new Animated.Value(0);
    }

    keyboardWillShow = event => {
        let duration = Platform.OS == "android" ? 100 : event.duration;

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            }),
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 1
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 1
            })
        ]).start();
    };

    keyboardWillHide = event => {
        let duration = Platform.OS == "android" ? 100 : event.duration;

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                toValue: 0,
                duration: duration
            }),
            Animated.timing(this.forwardArrowOpacity, {
                toValue: 0,
                duration: duration
            }),
            Animated.timing(this.borderBottomWidth, {
                toValue: 0,
                duration: duration
            })
        ]).start();
    }

    increaseHeightOfLogin() {
        this.setState({ placeholderPhoneNumber: "ex: 901433889" });

        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT,
            duration: 500
        }).start(() => {
            this.refs.textInputPhone.focus();
        });
    }

    decreaseLoginHeight() {
        Keyboard.dismiss();

        console.log(this.state.valueTextPhoneNumber);

        if (this.state.valueTextPhoneNumber == "") {
            this.setState({
                placeholderPhoneNumber: "Enter your phone number"
            });
        }

        Animated.timing(this.loginHeight, {
            toValue: 150,
            duration: 500
        }).start();
    }

    render() {
        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [1, 0]
        });
        const marginTop = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [25, 100]
        });
        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [0, 1]
        });
        // Animated for Text Enter your phone number
        const titlePhoneNumberLeft = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [100, 25]
        });
        const titlePhoneNumberBottom = this.loginHeight.interpolate({
            inputRange: [150, 400, SCREEN_HEIGHT],
            outputRange: [0, 0, 70]
        });
        const titlePhoneNumberOpacity = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [0, 1]
        });

        return (
            <View style={{ flex: 1 }}>
                {/* ARROW BACK */}
                <Animated.View
                    style={{
                        position: "absolute",
                        width: 60,
                        height: 60,
                        top: 60,
                        left: 25,
                        zIndex: 100,
                        opacity: headerBackArrowOpacity
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            this.decreaseLoginHeight();
                        }}
                    >
                        <Icon name="md-arrow-back" style={{ color: "black" }} />
                    </TouchableOpacity>
                </Animated.View>

                {/* FORWARD ARROW NEAR KEYBOAD */}
                <Animated.View
                    style={{
                        opacity: this.forwardArrowOpacity, // animated this.forwardArrowOpacity  1
                        position: "absolute",
                        backgroundColor: "#54575e",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                        width: 60,
                        height: 60,
                        right: 10,
                        bottom: this.keyboardHeight, // animated  10 this.keyboardHeight
                        zIndex: 100
                    }}
                >
                    <Icon name="md-arrow-forward" style={{ color: "white" }} />
                </Animated.View>

                <ImageBackground
                    style={{ flex: 1 }}
                    source={require("../images/uber/login_bg.jpg")}
                >
                    {/* TOP CONTENT LOGO UBER */}
                    <Animatable.View
                        animation="zoomIn"
                        iterationCount={1}
                        style={styles.topContent}
                    >
                        <View style={styles.bgUberText}>
                            <Text style={styles.uberText}>UBER</Text>
                        </View>
                    </Animatable.View>

                    {/* BOTTOM CONTENT */}
                    <Animatable.View animation="slideInUp" iterationCount={1}>
                        <Animated.View
                            style={{
                                height: this.loginHeight,
                                backgroundColor: "white"
                            }}
                        >
                            <Animated.View
                                style={{
                                    // alignItems: "flex-start",
                                    // paddingHorizontal: 25,
                                    opacity: headerTextOpacity, // animated 1
                                    marginTop: marginTop, // animated  25
                                    marginLeft: 25
                                }}
                            >
                                <Text style={{ fontSize: 24 }}>
                                    Get moving with Uber
                                </Text>
                            </Animated.View>

                            {/* BLOCK ENTER PHONE NUMBER */}
                            <TouchableOpacity
                                onPress={() => this.increaseHeightOfLogin()}
                            >
                                <Animated.View
                                    style={{
                                        alignItems: "center",
                                        flexDirection: "row",
                                        marginTop: marginTop,
                                        paddingHorizontal: 25
                                    }}
                                >
                                    {/* Animated TExt Enter Your Phone Number */}
                                    <Animated.Text
                                        style={{
                                            fontSize: 24,
                                            color: "gray",
                                            position: "absolute",
                                            bottom: titlePhoneNumberBottom,
                                            left: titlePhoneNumberLeft,
                                            opacity: titlePhoneNumberOpacity
                                        }}
                                    >
                                        Enter your phone number
                                    </Animated.Text>

                                    {/* IMGAGE FLAG */}
                                    <Image
                                        style={styles.flagIMG}
                                        source={require("../images/uber/login_flag.png")}
                                    />
                                    {/* INPUT TEXT PHONE NUMBER */}
                                    <Animated.View
                                        pointerEvents="none"
                                        style={{
                                            flex: 1,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            borderBottomWidth: this
                                                .borderBottomWidth
                                        }}
                                    >
                                        <Text style={styles.phoneNumberZone}>
                                            +84
                                        </Text>
                                        <TextInput
                                            keyboardType="numeric"
                                            ref="textInputPhone"
                                            style={styles.txtInputPhone}
                                            placeholder={
                                                this.state
                                                    .placeholderPhoneNumber
                                            }
                                            value={
                                                this.state.valueTextPhoneNumber
                                            }
                                            onChangeText={valueTextPhoneNumber =>
                                                this.setState({
                                                    valueTextPhoneNumber
                                                })
                                            }
                                            underlineColorAndroid="transparent"
                                        />
                                    </Animated.View>
                                </Animated.View>
                            </TouchableOpacity>
                        </Animated.View>

                        <View style={styles.connectSocial}>
                            <Text style={styles.connectSocialText}>
                                Or connect using a social account
                            </Text>
                        </View>
                    </Animatable.View>
                </ImageBackground>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    topContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    bgUberText: {
        backgroundColor: "white",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    uberText: {
        fontSize: 26,
        fontWeight: "bold"
    },
    phoneNumber: {
        height: this.loginHeight,
        backgroundColor: "white"
    },
    getMoveUber: {
        // alignItems: "flex-start",
        // paddingHorizontal: 25,
        opacity: this.headerTextOpacity, // animated
        marginTop: 25, // animated
        marginLeft: 25
    },
    blockPhoneNumber: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 25,
        paddingHorizontal: 25
    },
    flagIMG: {
        width: 25,
        height: 25,
        resizeMode: "contain"
    },
    blockTextInput: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    phoneNumberZone: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    txtInputPhone: { flex: 1, fontSize: 20 },
    connectSocial: {
        height: 70,
        backgroundColor: "white",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 25,
        borderTopColor: "#e8e8ec",
        borderWidth: 1
    },
    connectSocialText: {
        color: "#5a7fdf",
        fontWeight: "bold"
    }
});
