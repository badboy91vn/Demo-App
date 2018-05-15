import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Platform,
    StatusBar
} from "react-native";
import {
    Container,
    Content,
    Icon,
    Thumbnail,
    Header,
    Left,
    Body,
    Right
} from "native-base";

import HomeCardComponent from "../Components/HomeCardComponent";

class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
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
                            name="ios-camera-outline"
                            style={{ paddingLeft: 10 }}
                        />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 15 }}>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon
                            name="ios-send-outline"
                            style={{ paddingRight: 10 }}
                        />
                    </Right>
                </Header>

                <Content>
                    {/* Stories + Watch ALl + Scrollview */}
                    <View style={{ height: 100 }}>
                        {/* Stories + Watch ALl */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 8
                            }}
                        >
                            <Text style={{ fontWeight: "bold" }}>Stories</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                            >
                                <Icon
                                    name="md-play"
                                    style={{ fontSize: 12, paddingRight: 5 }}
                                />
                                <Text>Watch All</Text>
                            </View>
                        </View>

                        {/* Scrollview */}
                        <View style={{ flex: 2 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingStart: 5,
                                    paddingEnd: 5,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_1.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_2.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_3.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_1.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_2.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_3.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_1.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_2.jpg")}
                                />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5,
                                        borderColor: "pink",
                                        borderWidth: 2
                                    }}
                                    source={require("../../images/amazon/recommended_3.jpg")}
                                />
                            </ScrollView>
                        </View>
                    </View>

                    {/* Content */}
                    <HomeCardComponent
                        postDate="26/04/2018"
                        imgUri="1"
                        countLike={100}
                        textContent="Change icon in react-native-navigation tab 13 Tháng
                        Mười Hai 2017 tabbarios - resizing tabBar ios icon
                        react native 26 Tháng Tám 2017 resize - How to
                        adjust image size to fit in TabBar 8 Tháng Sáu 2017
                        How to style <TabBarItem> icons in React Native
                        18 Tháng Mười 2015 Các kết quả khác từ
                        stackoverflow.com"
                    />
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
                </Content>
            </Container>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    }
});
