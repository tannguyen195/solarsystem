import styles from "./Fallback.module.css";
import loader from "../../assets/images/rings.svg";

function Fallback() {
  return (
    <div className={styles.fallback}>
      <img className={styles.loader} alt="loader" src={loader} />
      <h1>GENERATING SOLAR SYSTEM </h1>
    </div>
  );
}

export default Fallback;
