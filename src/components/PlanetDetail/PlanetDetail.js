import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import styles from "./PlanetDetail.module.css";
import { galaxyData } from "../../utilities/planetData";
function PlanetDetail() {
  const activePlanet = useStore((state) => state.activePlanet);
  const [activePlanetState, setActivePlanetState] = useState(null);
  const toggleGalaxy = useStore((state) => state.toggleGalaxy);

  useEffect(() => {
    setActivePlanetState(activePlanet);
    if (!activePlanet && toggleGalaxy) setActivePlanetState(galaxyData);
  }, [activePlanet, toggleGalaxy]);

  return (
    <>
      {activePlanetState && (
        <div className={styles.root}>
          <div className={styles.section}>
            <div className={styles.title}>{activePlanetState.name}</div>
            <div className={styles.desc}>{activePlanetState.desc}</div>
          </div>
          <div className={styles.section}>
            <div className={styles.flex}>
              {activePlanetState.data?.map((item) => (
                <div key={item.title} className={styles.detail}>
                  <div className={styles.detailTitle}>{item.title}</div>
                  <div className={styles.value}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlanetDetail;
