import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import "./shaderSun/SunMaterial";
import "./shaderPerlin/PerlinMaterial";
import "./shaderAround/AroundMaterial";

function Sun() {
  const shaderPerlin = useRef();
  const shaderSun = useRef();

  const cubeCamera = useRef();

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

      {/* <mesh position={[0, 0, 0]}>
        <sphereBufferGeometry args={[17, 48, 48]} />
        <aroundMaterial ref={shaderAround} />
      </mesh> */}

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
