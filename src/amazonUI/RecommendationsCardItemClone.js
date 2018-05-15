import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { CardItem, Right } from "native-base";
import StarRating from "react-native-star-rating";

class RecommendateionsCardItem extends Component {
    render() {
        return (
            <CardItem>
                <View>
                    <Image
                        source={this.props.imgUri}
                        style={{ width: 60, height: 90 }}
                    />
                </View>

                <Right
                    style={{
                        flex: 1,
                        alignItems: "flex-start",
                        paddingHorizontal: 20,
                        height: 90
                    }}
                >
                    <Text>{this.props.title}</Text>
                    <Text style={{ fontSize: 11, color: "grey" }}>
                        {this.props.creator}
                    </Text>
                    <Text
                        style={{
                            color: "red",
                            fontSize: 14,
                            fontWeight: "bold"
                        }}
                    >
                        {this.props.price}
                    </Text>
                    <Text>
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "300",
                                color: "grey"
                            }}
                        >
                            You save{" "}
                        </Text>
                        ${this.props.savings}
                    </Text>
                    <StarRating
                        disabled={true}
                        starSize={12}
                        maxStars={5}
                        fullStarColor="orange"
                        emptyStarColor="orange"
                        rating={this.props.rating}
                    />
                </Right>
            </CardItem>
        );
    }
}

export default RecommendateionsCardItem;
