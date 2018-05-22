import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";

import ImageOverlay from "./ImageOverlay";

class CustomeImage extends Component {
    render() {
        return (
            <ImageBackground
                source={this.props.imgURL}
                style={{
                    width: "100%",
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <ImageOverlay                     
                    header={this.props.header}
                    paragraph={this.props.paragraph} 
                    />
            </ImageBackground>
        );
    }
}

export default CustomeImage;
