import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    Platform,
    StatusBar
} from "react-native";
import {
    Icon,
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    List,
    Item,
    ListItem
} from "native-base";
import { DrawerNavigator, DrawerItems } from "react-navigation";

// import HomeScreen from "../src/amazonUI/HomeScreen";
import HomeScreenClone from "../src/amazonUI/HomeScreenClone";
import SettingScreen from "../src/amazonUI/SettingScreen";

const CustomDrawerContentComponent = props => {
    return (
        <Container>
            <Header
                style={[
                    { backgroundColor: "#3a455c", height: 250 },
                    styles.androidHeader
                ]}
            >
                {/* <Left
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Icon name="person" style={{ color: "white" }} />
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 22,
                            color: "white",
                            fontStyle: "italic"
                        }}
                    >
                        Hello, HNL
                    </Text>
                </Left> */}
                <Body>
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 75
                        }}
                        source={require("../src/images/uber/login_flag.png")}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Icon name="person" style={{ color: "white" }} />
                        <Text
                            style={{
                                marginLeft: 10,
                                marginTop: 10,
                                fontSize: 22,
                                color: "white",
                                fontStyle: "italic"
                            }}
                        >
                            Hello, HNL
                        </Text>
                    </View>
                </Body>
            </Header>

            <Content>
                <DrawerItems {...props} />
                {/* <FlatList
                    data={["Home", "Shop by Category", "Today's Deals"]}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => (
                        <ListItem noBorder>
                            <Text>{item}</Text>
                        </ListItem>
                    )}
                />

                <FlatList
                    style={{ borderTopWidth: 2, borderTopColor: "#f0f0f0" }}
                    data={["Setting"]}
                    renderItem={({ item }) => (
                        <ListItem noBorder>
                            <Text>{item}</Text>
                        </ListItem>
                    )}
                /> */}
            </Content>
        </Container>
    );
};

const AmazonUIDemoDrawer = DrawerNavigator(
    {
        HomePage: HomeScreenClone,
        SettingPage: SettingScreen
    },
    {
        initialRouteName: "HomePage",
        drawerPosition: "left",
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRouter: "DrawerOpen",
        drawerCloseRouter: "DrawerClose",
        drawerToggleRouter: "DrawerToggle"
    }
);

class AmazonUIDemo extends Component {
    render() {
        return <AmazonUIDemoDrawer />;
    }
}

export default AmazonUIDemo;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    }
});
