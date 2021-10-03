import styles from "./DestinationPanel.module.css";

import { planets } from "../../utilities/planetData";
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
        <OptionPanel />
      </div>
    </div>
  );
}

export default DestinationPanel;
