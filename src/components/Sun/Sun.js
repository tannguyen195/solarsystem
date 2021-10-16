import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import "./shaderSun/SunMaterial";
import "./shaderPerlin/PerlinMaterial";
import "./shaderAround/AroundMaterial";
import useStore from "../../store/useStore";

function Sun() {
  const shaderPerlin = useRef();
  const shaderSun = useRef();
  const shaderAround = useRef();

  const cubeCamera = useRef();


  const activePlanet = useStore((state) => state.activePlanet);

  const [target] = useMemo(() => {
    const target = new THREE.WebGLCubeRenderTarget(256, {
      format: THREE.RGBFormat,
      generateMipmaps: true,
      minFilter: THREE.LinearMipMapLinearFilter,
      encoding: THREE.sRGBEncoding,
    });
    return [target];
  }, []);

  useFrame((state, delta) => {
    shaderSun.current.time += delta;

    shaderPerlin.current.time += delta;
    shaderPerlin.current.uPerlin = target.texture;

    cubeCamera.current.update(state.gl, state.scene);
  });
  const sunGeometry = useMemo(
    () => <sphereBufferGeometry args={[25, 40, 40]} />,
    []
  );
  return (
    <>
      <mesh layers={1} name="sun" position={[0, 0, 0]}>
        {sunGeometry}
        <sunMaterial ref={shaderSun} />
      </mesh>
      {activePlanet && activePlanet.name === "sun" && (
        <mesh>
          <sphereBufferGeometry args={[30, 30, 30]} />
          <aroundMaterial ref={shaderAround} />
        </mesh>
      )}

      <mesh layers={1}>
        <cubeCamera
          layers={1}
          name="cubeCamera"
          ref={cubeCamera}
          position={[0, 0, 0]}
          args={[0.1, 26, target]}
        ></cubeCamera>
        {sunGeometry}
        <perlinMaterial ref={shaderPerlin} />
      </mesh>
    </>
  );
}

export default Sun;
