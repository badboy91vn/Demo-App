import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";

import {
    Container,
    Content,
    Header,
    Left,
    Icon,
    Right,
    Body,
    Input,
    Item,
    Card,
    CardItem
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";

import RecommendationsCardItemClone from "../amazonUI/RecommendationsCardItemClone";

const mau1 = "#3a455c";

class HomeScreenClone extends Component {
    static navigationOptions = {
        drawerIcon: <Icon name="home" style={{ width: 24, height: 24 }} />
    };

    render() {
        return (
            <Container>
                {/* HEADER  */}
                <Header style={[styles.androidHeader, styles.header]}>
                    <Left style={{ flexDirection: "row" }}>
                        <Icon
                            name="md-menu"
                            style={{ color: "white", marginRight: 15 }}
                            onPress={() => {
                                this.props.navigation.navigate("DrawerOpen");
                            }}
                        />
                        <FAIcon
                            name="amazon"
                            style={{ color: "white", fontSize: 32 }}
                        />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            Home Page
                        </Text>
                    </Body>
                    <Right>
                        <Icon name="md-cart" style={{ color: "white" }} />
                    </Right>
                </Header>

                {/* Catygory + SearchBar */}
                <View style={styles.cateSearchView}>
                    {/* CATEGORY */}
                    <TouchableOpacity>
                        <View style={styles.categoryView}>
                            <View>
                                <Text style={{ fontSize: 12 }}>Shop by</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: "bold" }}>
                                    Catygory
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* SearchBar */}
                    <Item style={styles.itemSearchBar}>
                        <Icon
                            name="search"
                            style={{ fontSize: 12, paddingTop: 5 }}
                        />
                        <Input placeholder="Search" />
                    </Item>
                </View>

                {/* Content */}
                <Content style={{ backgroundColor: "#d5d5d6", marginTop: 70 }}>
                    {/* Account Infor */}
                    <View style={styles.accountInfor}>
                        <Text>Hello, HNL</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Your Account</Text>
                            <Icon
                                style={{ fontSize: 18, paddingLeft: 5 }}
                                name="arrow-forward"
                            />
                        </View>
                    </View>

                    {/* IMAGE Swiper */}
                    <Swiper autoplay={true} style={{ height: 100 }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={styles.imgSwiper}
                                source={require("../images/amazon/swiper_2.jpg")}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={styles.imgSwiper}
                                source={require("../images/amazon/swiper_3.jpg")}
                            />
                        </View>
                    </Swiper>

                    <Card style={{ marginLeft: 5, marginRight: 5 }}>
                        <CardItem
                            header
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: "#dee0e2"
                            }}
                        >
                            <Text>Your Recommendations</Text>
                        </CardItem>

                        <RecommendationsCardItemClone
                            imgUri={require("../images/amazon/recommended_1.jpg")}
                            title="You can heal your life"
                            creator="Nhật Linh"
                            price="$10"
                            savings="2"
                            rating={5}
                        />

                        <RecommendationsCardItemClone
                            imgUri={require("../images/amazon/recommended_2.jpg")}
                            title="UnChart 4"
                            creator="Nhật Linh"
                            price="$56"
                            savings="6"
                            rating={3}
                        />

                        <RecommendationsCardItemClone
                            imgUri={require("../images/amazon/recommended_3.jpg")}
                            title="UFC 4"
                            creator="Nhật Linh"
                            price="$50"
                            savings="4"
                            rating={4.5}
                        />
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default HomeScreenClone;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    },
    header: {
        height: 90,
        backgroundColor: mau1
    },

    cateSearchView: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 90,
        height: 70,
        flexDirection: "row",
        backgroundColor: mau1,
        alignItems: "center",
        paddingHorizontal: 5
    },
    categoryView: {
        backgroundColor: "#e7e7eb",
        marginLeft: 5,
        borderRadius: 4,
        width: 100,
        height: 50,
        padding: 5
    },
    itemSearchBar: {
        flex: 1,
        marginLeft: 5,
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: "white"
    },

    accountInfor: {
        backgroundColor: "white",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5
    },

    imgSwiper: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
    }
});
