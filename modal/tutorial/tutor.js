import * as React from "react";
import { FlatList, Image, View, StyleSheet } from "react-native";

let state = [
    { image: require("../../assets/Tutorial/Component 1.png") },
    { image: require("../../assets/Tutorial/Component 2.png") },
    { image: require("../../assets/Tutorial/Component 3.png") },
    { image:require("../../assets/Tutorial/Component 4.png") },
    { image:require("../../assets/Tutorial/Component 5.png") },
    { image:require("../../assets/Tutorial/Component 6.png") },
    { image:require("../../assets/Tutorial/Component 9.png") },
    { image:require("../../assets/Tutorial/Component 10.png") },
    { image:require("../../assets/Tutorial/Component 7.png") },
    { image:require("../../assets/Tutorial/Component 11.png") },
];

export function Carousel(){
    return (
        <FlatList
            data={state}
            renderItem={({ item, index }) => (
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={item.image}
                        resizeMethod="auto"
                    />
                </View>
            )}
            horizontal
            keyExtractor={(item, index) => String(index)}
        />

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 500,
        height: 500,
        resizeMode: "contain",
    },
});
