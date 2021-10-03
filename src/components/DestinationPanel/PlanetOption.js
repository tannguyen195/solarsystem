import useStore from "../../store/useStore";
import styles from "./DestinationPanel.module.css";

function PlanetOption({ image, name }) {
  const setActivePlanet = useStore((state) => state.setActivePlanet);
  const setUpdateCameraPosition = useStore(
    (state) => state.setUpdateCameraPosition
  );

  const onPlanetClick = () => {
    setActivePlanet(name);
    setUpdateCameraPosition(true);
  };
  return (
    <div onClick={() => onPlanetClick()} className={styles.option}>
      <img className={styles.planet} src={image} alt={name} />
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default PlanetOption;
