import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const setFromEvent = (e) => setDirection(e.wheelDeltaY > 0);
    window.addEventListener("wheel", setFromEvent);

    return () => {
      window.removeEventListener("wheel", setFromEvent);
    };
  }, []);

  return direction;
};
export default useScrollDirection;
