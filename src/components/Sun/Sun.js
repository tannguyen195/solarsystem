import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import "./SunMaterial";
import "./PerlinMaterial";
import "./AroundMaterial";

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

  return (
    <group>
      <mesh name="sun" position={[0, 0, 0]}>
        <sphereBufferGeometry args={[25, 40, 40]} />
        <sunMaterial ref={shaderSun} />
      </mesh>

      {/* <mesh position={[0, 0, 0]}>
        <sphereBufferGeometry args={[17, 48, 48]} />
        <aroundMaterial ref={shaderAround} />
      </mesh> */}

      <mesh>
        <cubeCamera
          name="cubeCamera"
          ref={cubeCamera}
          position={[0, 0, 0]}
          args={[0.1, 26, target]}
        ></cubeCamera>
        <sphereBufferGeometry args={[25, 40, 40]} />
        <perlinMaterial ref={shaderPerlin} />
      </mesh>
    </group>
  );
}

export default Sun;
