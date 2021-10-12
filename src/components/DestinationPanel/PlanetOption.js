import useStore from "../../store/useStore";
import styles from "./DestinationPanel.module.css";
import { getPlanetByName } from "../../utilities/helper";

function PlanetOption({ thumbnail, name }) {
  const setActivePlanet = useStore((state) => state.setActivePlanet);
  const setUpdateCameraPosition = useStore(
    (state) => state.setUpdateCameraPosition
  );

  const onPlanetClick = () => {
    setActivePlanet(getPlanetByName(name));
    setUpdateCameraPosition(true);
  };
  return (
    <div
      onClick={() => onPlanetClick()}
      className={ styles.option }
    >
      <img className={styles.planet} src={thumbnail} alt={name} />
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default PlanetOption;
