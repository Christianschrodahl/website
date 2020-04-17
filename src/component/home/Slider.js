import React, { useState, useEffect, useRef } from "react";
import Images from "./../../constants/Images";
function Slider() {
  const [slides, setSlider] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) =>
          seconds <= Image.length ? seconds + 1 : (seconds = 0)
        );
        setSlider(Images[seconds]);
      }, 2000);
    } else if (!isActive && slides !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [slides, isActive]);
  return (
    <div>
      <img src={slides} alt="test" />
    </div>
  );
}
export default Slider;
