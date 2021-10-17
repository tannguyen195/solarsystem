import styles from "./Destination.module.css";
import { useEffect, useState } from "react";
import Option from "./Option";
import { panel1, panel2 } from "./data";
import useStore from "../../../store/useStore";
import { getPlanetByName } from "../../../utilities/helper";

import {
  useTransition,
  useChain,
  animated,
  useSpringRef,
} from "@react-spring/web";

function DestinationPanel() {
  const [open, set] = useState(false);
  const isRendered = useStore((state) => state.isRendered);

  const setToggleGalaxy = useStore((state) => state.setToggleGalaxy);
  const setActivePlanet = useStore((state) => state.setActivePlanet);

  const activePlanet = useStore((state) => state.activePlanet);

  useEffect(() => {
    if (isRendered === true) set(true);
  }, [isRendered]);

  const transApi = useSpringRef();

  const transitionOption = {
    ref: transApi,
    from: { opacity: 0, scale: 0 },
    enter: (item) => (next) =>
      next({
        opacity: 1,
        scale: 1,
        delay: 3500 - (panel1.length - item.id) * 50,
      }),
    leave: { opacity: 0, scale: 0 },
  };

  const transitionPanel1 = useTransition(open ? panel1 : [], transitionOption);
  const transitionPanel2 = useTransition(open ? panel2 : [], transitionOption);

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [transApi] : [transApi], [0, open ? 0.1 : 0.6]);

  const onPlanetClick = (name) => {
    if (name === "The Milky Way") setToggleGalaxy(true);
    else setActivePlanet(getPlanetByName(name));
  };

  return (
    <>
      <div className={styles.panel}>
        <animated.div className={styles.container}>
          {transitionPanel1((style, item) => (
            <animated.div style={style}>
              <div onClick={() => onPlanetClick(item.name)}>
                <Option
                  containerStyle={styles.option}
                  {...item}
                  key={item.name}
                  isActive={
                    activePlanet ? item.name === activePlanet.name : false
                  }
                />
              </div>
            </animated.div>
          ))}
        </animated.div>
      </div>

      <div className={styles.subPanel}>
        <animated.div>
          {transitionPanel2((style, item) => (
            <animated.div style={style}>
              <div onClick={() => onPlanetClick(item.name)}>
                <Option
                  {...item}
                  containerStyle={styles.subOption}
                  key={item.name}
                  isActive={
                    activePlanet ? item.name === activePlanet.name : false
                  }
                />
              </div>
            </animated.div>
          ))}
        </animated.div>
      </div>
    </>
  );
}

export default DestinationPanel;
