import { useState, useEffect } from "react";
import styles from "./Fallback.module.css";

import { useSpring, animated } from "react-spring";

function Fallback({ progress }) {
  const [displayState, setDisplayState] = useState("flex");
  const [transformState, setTransformState] = useState(0);

  const opacity = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 2000 },
  });

  useEffect(() => {
    setTransformState(progress / 100);

    let timer;
    if (progress === 100) {
      timer = setTimeout(() => setDisplayState("none"), 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);

  return (
    <animated.div
      style={progress === 100 ? { ...opacity, display: displayState } : {}}
      className={styles.fallback}
    >
      <h1>GENERATING SOLAR SYSTEM </h1>
      <div
        style={{ transform: `scaleX(${transformState})` }}
        className={styles.loadingBar}
      />
      <span>{progress} %</span>
    </animated.div>
  );
}

export default Fallback;
