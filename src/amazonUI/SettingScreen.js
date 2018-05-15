import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";

import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Item,
    Input,
    Card,
    CardItem,
    Body
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";

const mau1 = "#3a455c";

class SettingScreen extends Component {
    static navigationOptions = {
        drawerIcon: <Icon name="cog" style={{ width: 24, height: 24 }} />
    };

    render() {
        return (
            <Container>
                <Header style={[styles.header, styles.androidHeader]}>
                    <Left style={{ flexDirection: "row" }}>
                        <Icon
                            onPress={() => {
                                this.props.navigation.navigate("DrawerOpen");
                            }}
                            name="md-menu"
                            style={{ color: "white", marginRight: 15 }}
                        />
                        <FAIcon
                            name="amazon"
                            style={{ fontSize: 32, color: "white" }}
                        />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            Setting Page
                        </Text>
                    </Body>
                    <Right>
                        <Icon name="md-cart" style={{ color: "white" }} />
                    </Right>
                </Header>

                <Content
                    contentContainerStyle={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <View>
                        <Text>Setting Page</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default SettingScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: mau1,
        borderBottomColor: "#757575",
        height: 90
    },
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    }
});
