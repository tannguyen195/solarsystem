import "./scrollBar.css";
import { useRef, useEffect, useState } from "react";
import state from "../state";
import useDeviceDetector from "../../hooks/deviceDetector";
const ScrollBar = ({ domContent }) => {
  const isMobile = useDeviceDetector() === "Mobile" ? 1 : 0;
  const scrollArea = useRef();
  const [offsetTop, updateOffsetTop] = useState(0);
  const [movingDirection, setMovingDirection] = useState(null);

  const onScroll = (container) => {

    if (isMobile) {
      container.target.addEventListener("touchstart", startTouch, false);
      container.target.addEventListener("touchmove", moveTouch, false);

      // Swipe Up / Down / Left / Right
      var initialX = null;
      var initialY = null;

      function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
      }

      function moveTouch(e) {
        if (initialX === null) {
          return;
        }

        if (initialY === null) {
          return;
        }

        var currentX = e.touches[0].clientX;
        var currentY = e.touches[0].clientY;

        var diffX = initialX - currentX;
        var diffY = initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
          // sliding horizontally
          if (diffX > 0) {
            // swiped left
           
          } else {
            // swiped right
        
          }
        } else {
          // sliding vertically
          if (diffY > 0) {
            // swiped up
            setMovingDirection(1);
          } else {
            // swiped down
            setMovingDirection(0);
          }
        }

        initialX = null;
        initialY = null;

        e.preventDefault();
      }
    } else {
      setMovingDirection(scrollArea.current.scrollTop > offsetTop ? 0 : 1);
      updateOffsetTop(scrollArea.current.scrollTop);
    }
  };

  useEffect(() => {
    let offset = document
      .getElementById("section2")
      ?.getBoundingClientRect().top;

    movingDirection === 0
      ? (state.top.current = offset + 30)
      : (state.top.current = 0);
  }, [movingDirection]);

  return (
    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
      <div style={{ height: `${state.sections * 100}vh` }}></div>
    </div>
  );
};

export default ScrollBar;
