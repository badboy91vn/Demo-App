import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Platform,
    StatusBar,
    Dimensions
} from "react-native";
import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Button
} from "native-base";

import EntypoIcon from "react-native-vector-icons/Entypo";

import HomeCardComponent from "../Components/HomeCardComponent";

const { width, height } = Dimensions.get("window");
const BTN = {
    APP: 0,
    LIST: 1,
    PEOPLE: 2,
    BOOKMARK: 3
};
const images = [
    require("../../images/amazon/recommended_1.jpg"),
    require("../../images/amazon/recommended_2.jpg"),
    require("../../images/amazon/recommended_3.jpg"),
    require("../../images/amazon/swiper_2.jpg"),
    require("../../images/amazon/swiper_3.jpg"),
    require("../../images/swiper/1.png"),
    require("../../images/swiper/2.png"),
    require("../../images/swiper/3.png"),
    require("../../images/swiper/4.png")
];

class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )
    };

    constructor(props) {
        super(props);

        this.state = {
            btnIndex: BTN.APP
        };
    }

    segementClicked = index => {
        this.setState({ btnIndex: index });
    };

    renderSectionApp = () => {
        return images.map((img, index) => {
            return (
                <View
                    key={index}
                    style={[
                        { width: width / 3, height: width / 3 },
                        { marginBottom: 2 },
                        index % 3 != 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
                    ]}
                >
                    <Image
                        source={img}
                        style={{ flex: 1, width: null, height: null }}
                    />
                </View>
            );
        });
    };

    renderSection = () => {
        switch (this.state.btnIndex) {
            case BTN.APP:
                return (
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        {this.renderSectionApp()}
                    </View>
                );
                break;
            case BTN.LIST:
                return (
                    <View>
                        <HomeCardComponent
                            postDate="25/04/2018"
                            imgUri="2"
                            countLike={200}
                            textContent="Chan that su"
                        />

                        <HomeCardComponent
                            postDate="24/04/2018"
                            imgUri="3"
                            countLike={300}
                            textContent="Ok được rồi nhé"
                        />
                    </View>
                );
                break;
            case BTN.PEOPLE:
                return (
                    <View>
                        <Text>PEOPLE</Text>
                    </View>
                );
                break;
            case BTN.BOOKMARK:
                return (
                    <View>
                        <Text>BOOKMARK</Text>
                    </View>
                );
                break;
        }
    };

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: "white" }}>
                <Header
                    style={[
                        styles.androidHeader,
                        {
                            height: 70,
                            backgroundColor: "white"
                        }
                    ]}
                >
                    <Left>
                        <Icon
                            name="md-person-add"
                            style={{ paddingLeft: 10 }}
                        />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 15 }}>bad.boy91vn</Text>
                    </Body>
                    <Right>
                        <EntypoIcon
                            name="back-in-time"
                            style={{ paddingRight: 10, fontSize: 30 }}
                        />
                    </Right>
                </Header>

                <Content>
                    {/* Avatar + Post + Follower + Following + Edit Profile + Account Infor */}
                    <View style={{ paddingTop: 10 }}>
                        {/* Avatar + Post + Follower + Following + Edit Profile */}
                        <View style={{ flexDirection: "row" }}>
                            {/* Avatar */}
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center"
                                }}
                            >
                                <Image
                                    source={require("../../images/avatar.jpg")}
                                    style={{
                                        width: 75,
                                        height: 75,
                                        borderRadius: 37.5,
                                        borderWidth: 2,
                                        borderColor: "pink"
                                    }}
                                />
                            </View>
                            {/* Post + Follower + Following + Edit Profile */}
                            <View style={{ flex: 3 }}>
                                {/* Post + Follower + Following */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-around",
                                        paddingTop: 10
                                    }}
                                >
                                    <View style={{ alignItems: "center" }}>
                                        <Text>0</Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: "grey"
                                            }}
                                        >
                                            posts
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text>12</Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: "grey"
                                            }}
                                        >
                                            followers
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: "center" }}>
                                        <Text>30</Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: "grey"
                                            }}
                                        >
                                            follwing
                                        </Text>
                                    </View>
                                </View>
                                {/* Edit Profile */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        paddingTop: 10
                                    }}
                                >
                                    <Button
                                        bordered
                                        dark
                                        style={{
                                            flex: 3,
                                            marginLeft: 10,
                                            justifyContent: "center",
                                            height: 30,
                                            borderColor: "grey"
                                        }}
                                    >
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button
                                        bordered
                                        dark
                                        style={{
                                            flex: 1,
                                            height: 30,
                                            marginLeft: 5,
                                            marginRight: 10,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderColor: "grey"
                                        }}
                                    >
                                        <Icon name="settings" />
                                    </Button>
                                </View>
                            </View>
                        </View>

                        {/* Account Infor */}
                        <View
                            style={{
                                paddingVertical: 10,
                                paddingHorizontal: 10
                            }}
                        >
                            <Text style={{ fontWeight: "bold" }}>
                                Hà Nhật Linh
                            </Text>
                            <Text>Làm gì còn lâu mới nói</Text>
                            <Text>www.fb.com/bad.boy91vn</Text>
                        </View>
                    </View>

                    {/* Gird + Image */}
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                                borderTopWidth: 1,
                                borderTopColor: "#eae5e5"
                            }}
                        >
                            <Button
                                style={{ flex: 1, alignItems: "center", justifyContent:"center" }}
                                transparent
                                onPress={() => {
                                    this.segementClicked(BTN.APP);
                                }}
                                active={this.state.btnIndex == BTN.APP}
                            >
                                <Icon
                                    name="ios-apps-outline"
                                    style={[
                                        this.state.btnIndex == BTN.APP
                                            ? {}
                                            : { color: "grey" }
                                    ]}
                                />
                            </Button>
                            <Button
                                style={{ flex: 1, alignItems: "center", justifyContent:"center" }}
                                transparent
                                onPress={() => {
                                    this.segementClicked(BTN.LIST);
                                }}
                                active={this.state.btnIndex == BTN.LIST}
                            >
                                <Icon
                                    name="ios-list-outline"
                                    style={[
                                        this.state.btnIndex == BTN.LIST
                                            ? {}
                                            : { color: "grey" }
                                    ]}
                                />
                            </Button>
                            <Button
                                style={{ flex: 1, alignItems: "center", justifyContent:"center" }}
                                transparent
                                onPress={() => {
                                    this.segementClicked(BTN.PEOPLE);
                                }}
                                active={this.state.btnIndex == BTN.PEOPLE}
                            >
                                <Icon
                                    name="ios-people-outline"
                                    style={[
                                        this.state.btnIndex == BTN.PEOPLE
                                            ? {}
                                            : { color: "grey" }
                                    ]}
                                />
                            </Button>
                            <Button
                                style={{ flex: 1, alignItems: "center", justifyContent:"center" }}
                                transparent
                                onPress={() => {
                                    this.segementClicked(BTN.BOOKMARK);
                                }}
                                active={this.state.btnIndex == BTN.BOOKMARK}
                            >
                                <Icon
                                    name="ios-bookmark-outline"
                                    style={[
                                        this.state.btnIndex == BTN.BOOKMARK
                                            ? {}
                                            : { color: "grey" }
                                    ]}
                                />
                            </Button>
                        </View>

                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        );
    }
}

export default ProfileTab;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    }
});
