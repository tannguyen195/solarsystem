import styles from "./DestinationPanel.module.css";
import { useEffect, useState } from "react";
import PlanetOption from "./PlanetOption";
import { planets } from "./data";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

function DestinationPanel({ isLoading }) {
  const [open, set] = useState(false);
 
  useEffect(() => {
    if (isLoading === false) set(true);
  }, [isLoading]);

  const springApi = useSpringRef();

  const { size } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%" },
    to: {
      size: open ? "100%" : "20%",
    },
  });

  const transApi = useSpringRef();

  const transition = useTransition(open ? planets : [], {
    ref: transApi,
    trail: 400 / 4,
    from: { opacity: 0, scale: 0 },
    enter: (item) => (next) =>
      next({
        opacity: 1,
        scale: 1,
        delay: 3500 - (planets.length - item.id) * 50,
      }),
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.panel}>
      <animated.div className={styles.container}>
        {transition((style, item) => (
          <animated.div style={style}>
            <PlanetOption {...item} key={item.name} />
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}

export default DestinationPanel;