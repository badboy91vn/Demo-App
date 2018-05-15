import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { CardItem, Right } from "native-base";
import StarRating from "react-native-star-rating";

class RecommendationsCardItem extends Component {
    render() {
        return (
            <CardItem>
                <View>
                    <Image
                        style={{ height: 90, width: 60 }}
                        source={this.props.imageUri}
                    />
                </View>
                
                <Right style={styles.rightStyle}>
                    <Text>{this.props.itemName}</Text>
                    <Text style={{ color: "grey", fontSize: 11 }}>
                        {this.props.itemCreator}
                    </Text>
                    <Text style={styles.textPrice}>{this.props.itemPrice}</Text>
                    <Text>
                        <Text style={styles.textYouSave}>You save </Text>
                        ${this.props.savings}
                    </Text>
                    <StarRating
                        disabled={true}
                        starSize={12}
                        maxStars={5}
                        rating={this.props.rating}
                        fullStarColor="#ffa500"
                        emptyStarColor="#ffa500"
                    />
                </Right>
            </CardItem>
        );
    }
}

export default RecommendationsCardItem;

const styles = StyleSheet.create({
    rightStyle: {
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 20,
        height: 90
    },
    textPrice: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#c4402f"
    },
    textYouSave: {
        color: "grey",
        fontWeight: "300",
        fontSize: 13
    }
});
