import React, { Component } from "react";
import { View } from "react-native";
import Expo from "expo";
import {
    Container,
    Text,
    Card,
    Header,
    Body,
    Button,
    Title,
    CardItem
} from "native-base";
import { observer } from "mobx-react";
import CounterStore from "./CounterStore";

@observer
export default class CounterNum extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>Doi ti</Text>
                </View>
            );
        }
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Mobx Counter</Title>
                    </Body>
                </Header>
                {/* <Card>
                    <CardItem> */}
                        <Text>{CounterStore.counter}</Text>
                    {/* </CardItem>
                </Card> */}
                <Button primary block onPress={() => CounterStore.increment()}>
                    <Text>Increment</Text>
                </Button>
                <Button primary block onPress={() => CounterStore.decrement()}>
                    <Text>Decrement</Text>
                </Button>
                <View />
            </Container>
        );
    }
}
