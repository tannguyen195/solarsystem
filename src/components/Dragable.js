
import { useGesture } from "@use-gesture/react";

const Dragable = (props) => {

  const bind = useGesture({
    onDrag: ({offset: [x, y]}) => {
      console.log("onDrag");
    },
  });

  return <mesh {...bind()}> {props.children}</mesh>;
};

export default Dragable;
