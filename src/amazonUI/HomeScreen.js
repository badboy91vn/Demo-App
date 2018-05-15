import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar
} from "react-native";

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
import Swiper from "react-native-swiper";

import RecommendationsCardItem from "../amazonUI/RecommendationsCardItem";

const mau1 = "#3a455c";

class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: <Icon name="home" style={{ width: 24, height: 24 }} />
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
                            Home Page
                        </Text>
                    </Body>
                    <Right>
                        <Icon name="md-cart" style={{ color: "white" }} />
                    </Right>
                </Header>

                {/* Category + Search */}
                <View style={styles.catelogySearch}>
                    {/* Category */}
                    <TouchableOpacity>
                        <View style={styles.categoryView}>
                            <Text style={{ fontSize: 12 }}>Shop by</Text>
                            <Text style={{ fontWeight: "bold" }}>Category</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Search */}
                    <View style={styles.searchView}>
                        <Item style={styles.searchItemView}>
                            <Icon
                                name="search"
                                style={{ fontSize: 12, paddingTop: 5 }}
                            />
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>

                <Content style={{ backgroundColor: "#d5d5d6", marginTop: 70 }}>
                    {/* Account Info */}
                    <View style={styles.contentView}>
                        <Text>Hello, HNL</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text>Your account</Text>
                            <Icon
                                name="arrow-forward"
                                style={{ fontSize: 18, paddingLeft: 5 }}
                            />
                        </View>
                    </View>

                    {/* Swiper IMAGE */}
                    <Swiper autoplay={true} style={{ height: 100 }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                source={require("../images/amazon/swiper_2.jpg")}
                                style={styles.imageSwiper}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                source={require("../images/amazon/swiper_3.jpg")}
                                style={styles.imageSwiper}
                            />
                        </View>
                    </Swiper>

                    {/* Card */}
                    <Card
                        style={{
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    >
                        <CardItem
                            header
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: "#dee0e2"
                            }}
                        >
                            <Text>Your Recommendations</Text>
                        </CardItem>

                        <RecommendationsCardItem
                            itemName="You can heal your life"
                            itemCreator="Nhật Linh"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={require("../images/amazon/recommended_1.jpg")}
                            rating={4}
                        />

                        <RecommendationsCardItem
                            itemName="UnCharted 4"
                            itemCreator="Nhật Linh"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={require("../images/amazon/recommended_2.jpg")}
                            rating={4}
                        />

                        <RecommendationsCardItem
                            itemName="UFC 3"
                            itemCreator="Nhật Linh"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={require("../images/amazon/recommended_3.jpg")}
                            rating={4}
                        />
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default HomeScreen;

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
    },

    catelogySearch: {
        position: "absolute",
        top: 90,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: mau1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5
    },
    categoryView: {
        width: 100,
        height: 50,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#e7e7eb"
    },
    searchView: {
        flex: 1,
        height: "100%",
        marginLeft: 5,
        justifyContent: "center"
    },
    searchItemView: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 4
    },

    contentView: {
        backgroundColor: "white",
        height: 50,
        flexDirection: "row",
        paddingHorizontal: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    imageSwiper: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "contain"
    }
});
