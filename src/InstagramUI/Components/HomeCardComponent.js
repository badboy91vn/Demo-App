import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
    Card,
    CardItem,
    Thumbnail,
    Left,
    Body,
    Right,
    Button,
    Icon
} from "native-base";

class HomeCardComponent extends Component {
    render() {
        const images = {
            "1": require("../../images/swiper/1.png"),
            "2": require("../../images/swiper/2.png"),
            "3": require("../../images/swiper/3.png"),
            "4": require("../../images/swiper/4.png")
        };

        return (
            <Card>
                {/* Avatar + Name + PostDate */}
                <CardItem>
                    <Left>
                        <Thumbnail
                            source={require("../../images/avatar.jpg")}
                        />
                        <Body>
                            <Text>Hà Nhật Linh</Text>
                            <Text note>{this.props.postDate}</Text>
                        </Body>
                    </Left>
                </CardItem>
                {/* Body */}
                <CardItem cardBody>
                    <Image
                        source={images[this.props.imgUri]}
                        style={{
                            flex: 1,
                            width: null,
                            height: 200
                        }}
                    />
                </CardItem>
                {/* All Button */}
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon
                                name="ios-heart-outline"
                                style={{ color: "black" }}
                            />
                        </Button>
                        <Button transparent>
                            <Icon
                                name="ios-chatbubbles-outline"
                                style={{ color: "black" }}
                            />
                        </Button>
                        <Button transparent>
                            <Icon
                                name="ios-send-outline"
                                style={{ color: "black" }}
                            />
                        </Button>
                    </Left>
                </CardItem>
                {/* Count Like */}
                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.countLike} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{this.props.textContent}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default HomeCardComponent;
