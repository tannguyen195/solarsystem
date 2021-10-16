import * as THREE from "three";
import { extend } from "@react-three/fiber";

import vertex from "./vertex.glsl.js";
import fragment from "./fragment.glsl.js";

export default class GalaxyMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
    
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uSize: { value: 30 },
        uTime: { value: 0 },
      },
      vertexShader: vertex(),
      fragmentShader: fragment(),
    });
  }

  get uTime() {
    return this.uniforms.uTime.value;
  }

  set uTime(v) {
    return (this.uniforms.uTime.value = v);
  }
}

extend({ GalaxyMaterial });
