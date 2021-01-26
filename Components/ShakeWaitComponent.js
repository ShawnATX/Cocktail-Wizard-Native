import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import ShakerImage from "../assets/cocktail_shaker.png";

const ShakeWait = () => {
  const shakeAni = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAni, {
          toValue: 1,
          duration: 320,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAni, {
          toValue: -1,
          duration: 320,
          easing: Easing.sin,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [shakeAni]);

  const spin = shakeAni.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "25deg"],
  });

  return (
    <Animated.Image
      source={ShakerImage}
      style={{
        width: "85%",
        height: "85%",
        resizeMode: "contain",
        transform: [{ rotate: spin }],
      }}
    />
  );
};

export default ShakeWait;
