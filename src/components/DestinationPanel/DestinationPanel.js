import styles from "./DestinationPanel.module.css";

import { planets, earthData, moonData } from "../../utilities/planetData";
import PlanetOption from "./PlanetOption";

function DestinationPanel() {
  const OptionPanel = () => {
    return planets.map((planet) => (
      <PlanetOption {...planet} key={planet.name} />
    ));
  };
  return (
    <div className={styles.panel}>
      <div className={styles.container}>
        <PlanetOption {...earthData} key={earthData.name} />
        <PlanetOption {...moonData} key={moonData.name} />
        <OptionPanel />
      </div>
    </div>
  );
}

export default DestinationPanel;
