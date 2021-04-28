import React, { useRef } from "react";
import { Image, PanResponder, Animated } from "react-native";
import Styles from "../Styles/Styles";

const DrinkImage = (props) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const { image, getDrink } = props;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        pan.setValue({
          x: 0,
          y: 0,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, { vx, vy }) => {
        if (pan.x._value < -150) {
          getDrink();
        } else if (pan.x._value > 150) {
          getDrink();
        } else {
          Animated.spring(pan, {
            toValue: 0,
          }).start();
        }
      },
    })
  ).current;

  const getImageStyle = () => {
    return [
      Styles.card,
      { position: "absolute" },
      { left: 0 },
      { top: 0 },
      {
        transform: [{ translateX: pan.x }, { translateY: 0 }],
      },
      {
        opacity: pan.x.interpolate({
          inputRange: [-150, 0, 150],
          outputRange: [0.5, 1, 0.5],
        }),
      },
    ];
  };

  return (
    <Animated.View style={getImageStyle()} {...panResponder.panHandlers}>
      <Image
        source={{ uri: image.image }}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      />
    </Animated.View>
  );
};

export default DrinkImage;
