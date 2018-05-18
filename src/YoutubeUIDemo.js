import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    Platform,
    StatusBar
} from "react-native";
import { Card, Content } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

import VideoItem from "../src/youtubeUI/VideoItem";
import VideoItemView from "../src/youtubeUI/VideoItemView";

import data from "../src/youtubeUI/data.json";
// console.log(data.items);

class YoutubeUIDemo extends Component {
    content = () => {
        let dataObj = [];
        let count = 0;
        for (const obj of data.items) {
            dataObj.push(
                <VideoItemView key={count} video={obj} />

                // <VideoItemView
                //     key={obj}
                //     imgVideo={obj.snippet.thumbnails.standard}
                //     titleVideo={obj.snippet.title}
                //     titleChannel={obj.snippet.channelTitle}
                //     viewVideo={obj.statistics.viewCount}
                //     timeRelease={obj.snippet.publishedAt}
                // />
            );
            count++;
        }
        return dataObj;
    };

    render() {
        return (
            <View style={[styles.androidHeader, styles.container]}>
                <View style={styles.navBar}>
                    <Image
                        source={require("../src/images/youtube.png")}
                        style={{ width: 96, height: 50 }}
                    />
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <Icon
                                name="search"
                                size={25}
                                style={{ marginLeft: 25 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name="account-circle"
                                size={25}
                                style={{ marginLeft: 25 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <Content style={styles.body}>{this.content()}</Content> */}
                {/* <ScrollView>
                    <View style={styles.body}>{this.content()}</View>
                </ScrollView> */}
                <View style={styles.body}>
                    <FlatList
                        data={data.items}
                        keyExtractor={item => item.id}
                        renderItem={video => (
                            <VideoItemView video={video.item} />
                        )}
                        ItemSeparatorComponent={() => (
                            <View
                                style={{
                                    height: 1,
                                    backgroundColor: "#E5E5E5"
                                }}
                            />
                        )}
                    />
                </View>

                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name="home" size={25} />
                        <Text style={styles.tabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name="whatshot" size={25} />
                        <Text style={styles.tabTitle}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name="subscriptions" size={25} />
                        <Text style={styles.tabTitle}>Subscriptions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Icon name="folder" size={25} />
                        <Text style={styles.tabTitle}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default YoutubeUIDemo;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    },
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rightNav: {
        flexDirection: "row"
    },

    body: {
        flex: 1
    },

    tabBar: {
        backgroundColor: "white",
        height: 60,
        borderTopWidth: 0.5,
        borderColor: "#e5e5e5",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    tabItem: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    tabTitle: {
        fontSize: 11,
        color: "#3e3e3e",
        paddingTop: 4
    }
});
