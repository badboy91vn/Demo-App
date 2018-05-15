import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Dimensions,
    TouchableWithoutFeedback
} from "react-native";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Label,
    Input,
    Body,
    Button
} from "native-base";
import * as firebase from "firebase";
import KeyboardSpacer from "react-native-keyboard-spacer";
import DismissKeyboard from "dismissKeyboard";
import Spinner from "react-native-loading-spinner-overlay";

const { height, width } = Dimensions.get("window");

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: false
        };
    }

    static navigationOptions = {
        header: null
    };

    btnRegister = () => {
        if (this.state.username == "" || this.state.password == "") {
            alert("Username or Password is empty");
            return;
        }
        this.setState({ loading: true });
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.username,
                this.state.password
            )
            .then(succ => {
                alert("Register success!!!");
                this.setState({ loading: false });
                this.props.navigation.navigate("LoginPage");
            })
            .catch(err => {
                this.setState({ loading: false });
                alert(err);
            });
    };

    render() {
        return (
            <Container>
                <Content>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            DismissKeyboard();
                        }}
                    >
                        <ImageBackground
                            source={require("../images/bg_login.jpg")}
                            style={[
                                styles.backgroundImage,
                                { height: height, width: width }
                            ]}
                        >
                            <View style={{ alignItems: "center" }}>
                                <Text style={styles.txtTilte}>
                                    Register Page
                                </Text>
                            </View>
                            <View style={styles.inputContainer}>
                                {/* Username */}
                                <Item floatingLabel style={styles.inputText}>
                                    <Label style={{ fontSize: 15 }}>
                                        Username
                                    </Label>
                                    <Input
                                        onChangeText={username => {
                                            this.setState({ username });
                                        }}
                                        value={this.state.username}
                                    />
                                </Item>
                                {/* Password */}
                                <Item
                                    floatingLabel
                                    style={[
                                        styles.inputText,
                                        { marginTop: 15 }
                                    ]}
                                >
                                    <Label style={{ fontSize: 15 }}>
                                        Password
                                    </Label>
                                    <Input
                                        secureTextEntry={true}
                                        onChangeText={password => {
                                            this.setState({ password });
                                        }}
                                        value={this.state.password}
                                    />
                                </Item>
                            </View>

                            <Button
                                full
                                style={styles.btnRegister}
                                onPress={this.btnRegister}
                            >
                                <Text>Register</Text>
                            </Button>
                            <Button
                                full
                                style={styles.btnBack}
                                onPress={() => {
                                    this.props.navigation.navigate("LoginPage");
                                }}
                            >
                                <Text>Back</Text>
                            </Button>

                            <KeyboardSpacer />
                        </ImageBackground>
                    </TouchableWithoutFeedback>
                </Content>
                <Spinner visible={this.state.loading} />
            </Container>
        );
    }
}

export default Register;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        justifyContent: "center"
        // backgroundColor: "transparent"
    },
    txtTilte: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textShadowColor: "#252525",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 15,
        marginBottom: 10
    },
    inputContainer: {
        justifyContent: "center",
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.2)"
    },
    inputText: {
        marginLeft: 20,
        marginRight: 20
    },
    btnRegister: {
        backgroundColor: "blue",
        margin: 20,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.6)"
    },
    btnBack: {
        marginHorizontal: 20,
        backgroundColor: "blue",
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.6)"
    }
});
