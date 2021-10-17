import styles from "./Destination.module.css";

import Hoverable from "./Hoverable";

function Option({ thumbnail, name, isActive, containerStyle }) {
  return (
    <Hoverable isActive={isActive}>
      <div className={containerStyle}>
        <img className={styles.planet} src={thumbnail} alt={name} />
        <div className={styles.name}>{name}</div>
      </div>
    </Hoverable>
  );
}

export default Option;
