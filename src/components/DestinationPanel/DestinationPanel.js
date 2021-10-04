import styles from "./DestinationPanel.module.css";

import { planets, earthData, moonData } from "../../utilities/planetData";
import PlanetOption from "./PlanetOption";

function DestinationPanel() {
  const OptionPanel = () => {

    return planets.map((planet) => (
      <PlanetOption
        image={planet.thumbnail}
        name={planet.name}
        key={planet.name}
      />
    ));
  };
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
      <PlanetOption
        image={earthData.thumbnail}
        name={earthData.name}
        key={earthData.name}
      />
      <PlanetOption
        image={moonData.thumbnail}
        name={moonData.name}
        key={moonData.name}
      />
        <OptionPanel />
      </div>
    </div>
  );
}

export default DestinationPanel;
