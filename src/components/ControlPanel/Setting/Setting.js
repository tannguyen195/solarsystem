import styles from "./Setting.module.css";

import useStore from "../../../store/useStore";

import spaceSound from "../../../assets/sounds/ambiant.mp3";

import useAudio from "../../../hooks/audio";

import soundOn from "../../../assets/images/on.svg";
import soundOff from "../../../assets/images/off.svg";

function Setting() {
  const setMute = useStore((state) => state.setMute);

  const [backgroundSound, toggleBackgroundSound] = useAudio(spaceSound);

  function handleClickSound() {
    toggleBackgroundSound();
    setMute(!useStore.getState().mute);
  }

  return (
    <div className={styles.root}>
      <img
        className={styles.image}
        onClick={handleClickSound}
        src={backgroundSound ? soundOn : soundOff}
        alt="sound"
      />
    </div>
  );
}

export default Setting;
