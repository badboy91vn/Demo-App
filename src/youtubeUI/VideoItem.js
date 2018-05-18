import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Card, CardItem, Thumbnail, Body, Left, Right } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

class VideoItem extends Component {
    nFormatter = (num, digits) => {
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
        return (
            <Card>
                <CardItem cardBody>
                    <Image
                        source={{ uri: this.props.imgVideo.url }}
                        style={{
                            height: 200,
                            width: null,
                            flex: 1,
                            margin: 10
                        }}
                    />
                </CardItem>
                <CardItem>
                    <Thumbnail
                        source={require("../images/avatar.jpg")}
                        style={{ width: 50, height: 50 }}
                    />
                    <Body
                        style={{
                            flex: 1,
                            paddingHorizontal: 20,
                            alignItems: "flex-start"
                        }}
                    >
                        <Text numberOfLines={2}>{this.props.titleVideo}</Text>
                        <Text style={{ fontSize: 13 }}>
                            {this.props.titleChannel +
                                " - " +
                                this.nFormatter(this.props.viewVideo, 1) +
                                " views"}
                        </Text>
                        <Text>{this.props.timeRelease}</Text>
                    </Body>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color="#999999" />
                    </TouchableOpacity>
                </CardItem>
            </Card>
        );
    }
}

export default VideoItem;

const styles = StyleSheet.create({
    continer: {}
});
