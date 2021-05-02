import React, { useRef } from "react";
import {
  Image,
  PanResponder,
  Animated,
  useWindowDimensions,
} from "react-native";
import Styles from "../Styles/Styles";

const DrinkImage = (props) => {
  const { image, getDrink } = props;

  //Getting device screen width to set the image size to 82%, and setting the left/right margins to 9%
  const imageDimension = useWindowDimensions().width * 0.82;
  const imageGutter = useWindowDimensions().width * 0.09;

  const pan = useRef(new Animated.ValueXY()).current;

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
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const getImageStyle = () => {
    return [
      Styles.imageCard,
      { height: imageDimension },
      { width: imageDimension },
      { position: "absolute" },
      { left: imageGutter },
      { top: 0 },
      {
        transform: [{ translateX: pan.x }, { translateY: 0 }],
      },
      {
        opacity: pan.x.interpolate({
          inputRange: [-150, 0, 150],
          outputRange: [0.6, 1, 0.6],
        }),
      },
    ];
  };

  return (
    <Animated.View style={getImageStyle()} {...panResponder.panHandlers}>
      <Image
        source={image.image ? { uri: image.image } : null}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      />
    </Animated.View>
  );
};

export default DrinkImage;
