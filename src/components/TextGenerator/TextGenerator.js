import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import noto from "./noto.json";
import "./TextMaterial";

function TextGenerator({ text, position }) {
  const font = new THREE.FontLoader().parse(noto);

  const config = useMemo(() => ({ font, size: 5, height: 0.01 }), [font]);
  const mesh = useRef();

  const shader = useRef();
  return (
    <mesh ref={mesh} position={position}>
      <textGeometry args={["4", config]} />
      <textMaterial ref={shader} />
    </mesh>
  );
}

export default TextGenerator;
