import useStore from "../../store/useStore";
import { useEffect, useState } from "react";
import styles from "./DestinationPanel.module.css";
import { getPlanetByName } from "../../utilities/helper";
import { useSpring, animated } from "@react-spring/web";
import cn from "classnames";

function PlanetOption({ thumbnail, name }) {
  const [isHover, toggleHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const size = useSpring({
    from: { scale: "100%" },
    to: { scale: isHover ? "120%" : "100%" },
    config: { duration: 200 },
  });

  const setActivePlanet = useStore((state) => state.setActivePlanet);
  const activePlanet = useStore((state) => state.activePlanet);

  const setUpdateCameraPosition = useStore(
    (state) => state.setUpdateCameraPosition
  );

  const onPlanetClick = () => {
    setActivePlanet(getPlanetByName(name));
    setUpdateCameraPosition(true);
  };

  useEffect(() => {

    setIsActive(true);
    if (name !== activePlanet?.name) setIsActive(false);
  }, [activePlanet, name]);

  return (
    <animated.div
      onMouseOver={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      onClick={() => onPlanetClick()}
      style={{ ...size }}
      className={cn(styles.option, { [styles.active]: isActive })}
    >
      <img className={styles.planet} src={thumbnail} alt={name} />
      <div className={styles.name}>{name}</div>
    </animated.div>
  );
}

export default PlanetOption;
