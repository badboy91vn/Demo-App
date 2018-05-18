import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class VideoItemView extends Component {
    nFormatter = (num, digits) => {
        if (num == null || num == "") {
            return "";
        }

        var si = [
                { value: 1e18, symbol: "E" },
                { value: 1e15, symbol: "P" },
                { value: 1e12, symbol: "T" },
                { value: 1e9, symbol: "G" },
                { value: 1e6, symbol: "M" },
                { value: 1e3, symbol: "k" }
            ],
            rx = /\.0+$|(\.[0-9]*[1-9])0+$/,
            i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (
                    (num / si[i].value).toFixed(digits).replace(rx, "$1") +
                    si[i].symbol
                );
            }
        }
        return num.toFixed(digits).replace(rx, "$1");
    };

    render() {
        let video = this.props.video;
        return (
            <View style={styles.continer}>
                <Image
                    source={{ uri: video.snippet.thumbnails.standard.url }}
                    style={{ height: 200 }}
                />

                <View style={styles.desContainer}>
                    <Image
                        source={require("../images/avatar.jpg")}
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                    {/* Video Detail */}
                    <View style={styles.videoDetail}>
                        <Text numberOfLines={2} style={styles.videoTitle}>
                            {video.snippet.title}
                        </Text>
                        <Text
                            style={{
                                fontSize: 13,
                                color: "#3C3C3C",
                                paddingTop: 3
                            }}
                        >
                            {video.snippet.channelTitle +
                                " - " +
                                this.nFormatter(video.statistics.viewCount, 1) +
                                " views - " +
                                video.snippet.publishedAt}
                        </Text>
                    </View>
                    {/* Btn option */}
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color="#999999" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default VideoItemView;

const styles = StyleSheet.create({
    continer: { padding: 10 },
    desContainer: { flexDirection: "row", paddingTop: 10 },
    videoDetail: { flex: 1, paddingHorizontal: 15 },
    videoTitle: { fontSize: 16, color: "#3C3C3C" }
});
