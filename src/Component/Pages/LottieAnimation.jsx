import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "..//../groovyWalk.json";

const LottieAnimation = () => {
  return (
    <div className="w-full h-96">
      <Lottie animationData={groovyWalkAnimation} />;
    </div>
  );
};

export default LottieAnimation;
