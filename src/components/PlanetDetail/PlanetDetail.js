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
              <div className={styles.row}>
                <div className={styles.detail}>
                  <div className={styles.detailTitle}>Length Of Year</div>
                  <div className={styles.value}>
                    {activePlanetState.orbitRate.toLocaleString()} {` days`}
                  </div>
                </div>
                {activePlanetState.distanceScale &&
                  (activePlanetState.name === "moon" ? (
                    <div className={styles.detail}>
                      <div className={styles.detailTitle}>
                        Distance from Earth
                      </div>
                      <div className={styles.value}>
                        {activePlanetState.distanceToEarth.toLocaleString()}
                        {` km`}
                      </div>
                    </div>
                  ) : (
                    <div className={styles.detail}>
                      <div className={styles.detailTitle}>
                        Distance from Sun
                      </div>
                      <div className={styles.value}>
                        {activePlanetState.distance.toLocaleString()}
                        {` AU`}
                      </div>
                    </div>
                  ))}
              </div>

              <div className={styles.row}>
                <div className={styles.detail}>
                  <div className={styles.detailTitle}>Radius</div>
                  <div className={styles.value}>
                    {activePlanetState.realRadius.toLocaleString()} {` km`}
                  </div>
                </div>
                {activePlanetState.moonNumber !== null && (
                  <div className={styles.detail}>
                    <div className={styles.detailTitle}>Moon</div>
                    <div className={styles.value}>
                      {activePlanetState.moonNumber}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlanetDetail;
