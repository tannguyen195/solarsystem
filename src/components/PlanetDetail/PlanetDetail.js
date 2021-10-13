import { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import styles from "./PlanetDetail.module.css";

function PlanetDetail() {
  const activePlanet = useStore((state) => state.activePlanet);
  const [activePlanetState, setActivePlanetState] = useState(null);

  useEffect(() => {
    setActivePlanetState(activePlanet);
  }, [activePlanet]);

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
              {activePlanetState.data.map((item) => (
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
