import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

class IMGView extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.imgGird}>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/1.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/2.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/3.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/4.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/4.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/4.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/4.png")}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.imgWrap}>
                        <Image
                            source={require("../images/swiper/4.png")}
                            style={styles.img}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default IMGView;

const styles = StyleSheet.create({
    imgGird: { flexDirection: "row", flexWrap: "wrap" },
    imgWrap: {
        margin: 2,
        width: width / 2 - 4,
        height: 120
    },
    img: {
        flex: 1,
        width: null,
        alignSelf: "stretch"
    }
});
