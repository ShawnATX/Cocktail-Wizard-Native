import React from "react";
import { Image, StyleSheet } from "react-native";
import ShakerImage from "../assets/cocktail_shaker.png";

const ShakeWait = () => {
  return (
    <Image
      source={ShakerImage}
      style={{ width: 350, height: 450 }}
      //   className="shakeSlow shake-constant responsive-img"
    />
  );
};

const styles = StyleSheet.create({
  //   CSShake :: shake-slow
  //   v1.5.0
  //   CSS classes to move your DOM
  //   (c) 2015 @elrumordelaluz
  //   http://elrumordelaluz.github.io/csshake/
  //   Licensed under MIT
  //     shakeSlow: {
  //         display:'inherit',
  //         transformOrigin: 'center center'
  //     },
  //     shakeSlow{
  //         animationPlaystate: 'running'
  //     }@keyframes shake-slow{2%{transform:translate(2px, -2px) rotate(3.5deg)}4%{transform:translate(7px, 3px) rotate(-.5deg)}6%{transform:translate(6px, 3px) rotate(.5deg)}8%{transform:translate(4px, 7px) rotate(.5deg)}10%{transform:translate(-8px, 3px) rotate(1.5deg)}12%{transform:translate(3px, -6px) rotate(-2.5deg)}14%{transform:translate(2px, -8px) rotate(1.5deg)}16%{transform:translate(2px, 7px) rotate(2.5deg)}18%{transform:translate(1px, 5px) rotate(-1.5deg)}20%{transform:translate(-1px, 0px) rotate(.5deg)}22%{transform:translate(1px, -2px) rotate(3.5deg)}24%{transform:translate(1px, -8px) rotate(-2.5deg)}26%{transform:translate(-7px, -6px) rotate(3.5deg)}28%{transform:translate(-6px, -5px) rotate(3.5deg)}30%{transform:translate(9px, -7px) rotate(-1.5deg)}32%{transform:translate(3px, 5px) rotate(3.5deg)}34%{transform:translate(10px, -9px) rotate(-1.5deg)}36%{transform:translate(8px, -8px) rotate(3.5deg)}38%{transform:translate(-9px, 5px) rotate(.5deg)}40%{transform:translate(-3px, -9px) rotate(1.5deg)}42%{transform:translate(5px, 7px) rotate(1.5deg)}44%{transform:translate(-4px, 1px) rotate(-.5deg)}46%{transform:translate(3px, 1px) rotate(1.5deg)}48%{transform:translate(-9px, 6px) rotate(2.5deg)}50%{transform:translate(1px, 3px) rotate(-2.5deg)}52%{transform:translate(7px, -9px) rotate(2.5deg)}54%{transform:translate(10px, 4px) rotate(-.5deg)}56%{transform:translate(3px, -5px) rotate(1.5deg)}58%{transform:translate(4px, -3px) rotate(-.5deg)}60%{transform:translate(9px, 5px) rotate(-1.5deg)}62%{transform:translate(8px, -9px) rotate(.5deg)}64%{transform:translate(-8px, -9px) rotate(-1.5deg)}66%{transform:translate(-9px, -1px) rotate(1.5deg)}68%{transform:translate(-4px, -2px) rotate(3.5deg)}70%{transform:translate(-2px, 6px) rotate(-2.5deg)}72%{transform:translate(3px, 1px) rotate(1.5deg)}74%{transform:translate(-4px, -3px) rotate(2.5deg)}76%{transform:translate(3px, 1px) rotate(-.5deg)}78%{transform:translate(8px, 0px) rotate(2.5deg)}80%{transform:translate(10px, -6px) rotate(2.5deg)}82%{transform:translate(-4px, 6px) rotate(1.5deg)}84%{transform:translate(-2px, 2px) rotate(3.5deg)}86%{transform:translate(-5px, 3px) rotate(2.5deg)}88%{transform:translate(7px, -4px) rotate(2.5deg)}90%{transform:translate(10px, 9px) rotate(-.5deg)}92%{transform:translate(8px, 4px) rotate(.5deg)}94%{transform:translate(7px, 10px) rotate(2.5deg)}96%{transform:translate(2px, -2px) rotate(-.5deg)}98%{transform:translate(-1px, -5px) rotate(3.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}
  // .shake-slow:hover,
  // .shake-trigger:hover
  // .shake-slow,
  // .shake-slow
  // .shake-freeze,
  // .shake-slow
  // .shake-constant{animation-name:shake-slow;animation-duration:5s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}
  // .shake-freeze,
  // .shake-constant
  // .shake-constant--hover:hover,
  // .shake-trigger:hover
  // .shake-constant
  // .shake-constant--hover{animation-play-state:paused}
  // .shake-freeze:hover,
  // .shake-trigger:hover
  // .shake-freeze,
  // .shake-slow:hover,
  // .shake-trigger:hover
});

export default ShakeWait;
