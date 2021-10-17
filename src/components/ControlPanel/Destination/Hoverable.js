import { useState, useEffect } from "react";
import styles from "./Destination.module.css";
import { useSpring, animated } from "@react-spring/web";
import cn from "classnames";
import { playAudio } from "../../../utilities/helper";
import tickSound from "../../../assets/sounds/tick.mp3";

const tick = new Audio(tickSound);

function Hoverable({ isActive, children }) {
  const [isHover, toggleHover] = useState(false);

  const size = useSpring({
    from: { scale: "100%" },
    to: { scale: isHover ? "120%" : "100%" },
    config: { duration: 200 },
  });

  useEffect(() => {
    if (isHover) void playAudio(tick, 1, false);
  }, [isHover]);

  return (
    <animated.div
      onMouseOver={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      style={{ ...size }}
      className={cn({ [styles.active]: isActive })}
    >
      {children}
    </animated.div>
  );
}

export default Hoverable;
