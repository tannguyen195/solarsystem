import { useState, useEffect } from "react";
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.getElementById("scroll-bar", (e) => setScrollPosition(e));

    return () => document.removeEventListener("getElementById", setScrollPosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
