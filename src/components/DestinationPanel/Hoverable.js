import { useState } from "react";
import styles from "./DestinationPanel.module.css";
import { useSpring, animated } from "@react-spring/web";
import cn from "classnames";

function Hoverable({ isActive, children }) {
  const [isHover, toggleHover] = useState(false);

  const size = useSpring({
    from: { scale: "100%" },
    to: { scale: isHover ? "120%" : "100%" },
    config: { duration: 200 },
  });

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
