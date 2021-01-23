import React from "react";
import { Image, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

const DrinkImage = (props) => {
  const { image } = props;

  return (
    <Surface style={styles.surface}>
      <Image
        source={{ uri: image.image }}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 6,
    height: 350,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
});

export default DrinkImage;
