import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Animated,
    PanResponder
} from "react-native";

const ARTICLES = [
    { id: "1", uri: require("./images/swiper/1.png"), txt: "Ha" },
    { id: "2", uri: require("./images/swiper/2.png"), txt: "Nhat" },
    { id: "3", uri: require("./images/swiper/3.png"), txt: "Linh" },
    { id: "4", uri: require("./images/swiper/4.png"), txt: "Ha Nhat Linh" }
];

// Set Var Sreen
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

// Chứa nội dung text
class ContentSwiper extends Component {
    render() {
        return (
            <View style={styles.viewAbsolute}>
                {/* image */}
                <View style={{ flex: 2, backgroundColor: "black" }}>
                    <Image
                        style={{
                            flex: 1,
                            height: null,
                            width: null,
                            resizeMode: "center"
                        }}
                        source={this.props.uriObj}
                    />
                </View>
                {/* text */}
                <View style={{ flex: 3, padding: 5 }}>
                    <Text>{this.props.textObj}</Text>
                </View>
            </View>
        );
    }
}
// export ContentSwiper;

class SwiperDemo extends Component {
    constructor(props) {
        super(props);

        this.swipedViewUp = new Animated.ValueXY();
        this.swipedViewDown = new Animated.ValueXY({
            x: 0,
            y: -SCREEN_HEIGHT
        });
        this.state = {
            curIndex: 0
        };
    }

    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                console.log("onPanResponderMove: " + gestureState.dy + " | curIndex - " + this.state.curIndex);
                // Vuốt xuống
                if (gestureState.dy > 0 && this.state.curIndex > 0) {
                    this.swipedViewDown.setValue({
                        x: 0,
                        y: -SCREEN_HEIGHT + gestureState.dy
                    });
                } else {
                    // Vuốt lên
                    this.swipedViewUp.setValue({ x: 0, y: gestureState.dy });
                }
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (
                    this.state.curIndex > 0 &&
                    gestureState.dy > 50 &&
                    gestureState.vy > 0.7
                ) {
                    // Vuốt xuống
                    Animated.timing(this.swipedViewDown, {
                        toValue: { x: 0, y: 0 },
                        duration: 400
                    }).start(() => {
                        this.setState({ curIndex: this.state.curIndex - 1 });
                        this.swipedViewDown.setValue({
                            x: 0,
                            y: -SCREEN_HEIGHT
                        });
                    });
                } else if (
                    -gestureState.dy > 50 &&
                    -gestureState.vy > 0.7 &&
                    this.state.curIndex < ARTICLES.length - 1
                ) {
                    // Vuốt lên
                    Animated.timing(this.swipedViewUp, {
                        toValue: { x: 0, y: -SCREEN_HEIGHT },
                        duration: 400
                    }).start(() => {
                        this.setState({ curIndex: this.state.curIndex + 1 });
                        this.swipedViewUp.setValue({ x: 0, y: 0 });
                    });
                } else {
                    // Vuốt ko hết set lại hết vị chí
                    Animated.parallel([
                        Animated.spring(this.swipedViewUp, {
                            toValue: { x: 0, y: 0 }
                        }),
                        Animated.spring(this.swipedViewDown, {
                            toValue: { x: 0, y: -SCREEN_HEIGHT }
                        })
                    ]).start();
                }
            }
        });
    }

    renderArticles = () => {
        return ARTICLES.map((item, i) => {
            // console.log(this.state.curIndex - 1);
            // Vuốt xuống
            // Chỉ create View đầu tiên để vuốt xuống
            if (this.state.curIndex - 1 == i) {
                console.log(
                    "swipedViewDown: curIndex - " +
                        this.state.curIndex +
                        " | view - " +
                        (i + 1)
                );
                return (
                    <Animated.View
                        key={item.id}
                        style={this.swipedViewDown.getLayout()}
                        {...this.PanResponder.panHandlers}
                    >
                        <ContentSwiper
                            uriObj={ARTICLES[i].uri}
                            textObj={ARTICLES[i].txt}
                        />
                    </Animated.View>
                );
            } else if (this.state.curIndex > i) {
                console.log(
                    "Null: curIndex - " +
                        this.state.curIndex +
                        " | view - " +
                        (i + 1)
                );
                return null;
            }

            // Vuốt lên
            // Chỉ gán PanResponed Hander cho 1 view hiện tại
            if (this.state.curIndex == i) {
                console.log(
                    "swipedViewUp: curIndex - " +
                        this.state.curIndex +
                        " | view - " +
                        (i + 1)
                );
                return (
                    <Animated.View
                        key={item.id}
                        style={this.swipedViewUp.getLayout()}
                        {...this.PanResponder.panHandlers}
                    >
                        <ContentSwiper
                            uriObj={ARTICLES[i].uri}
                            textObj={ARTICLES[i].txt}
                        />
                    </Animated.View>
                );
            } else {
                console.log(
                    "View not Animated: curIndex - " +
                        this.state.curIndex +
                        " | view - " +
                        (i + 1)
                );
                return (
                    <Animated.View key={item.id}>
                        <ContentSwiper
                            uriObj={ARTICLES[i].uri}
                            textObj={ARTICLES[i].txt}
                        />
                    </Animated.View>
                );
            }
        }).reverse();
    };

    render() {
        return <View style={styles.container}>{this.renderArticles()}</View>;
    }
}

export default SwiperDemo;

const styles = StyleSheet.create({
    container: {
        flex: 1
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center"
    },
    viewAbsolute: {
        flex: 1,
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: "white"
    }
});
