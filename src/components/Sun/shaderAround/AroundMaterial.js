import * as THREE from "three";
import { extend } from "@react-three/fiber";
import vertex from "./vertex.glsl.js";
import fragment from "./fragment.glsl.js";

export default class AroundMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      side: THREE.BackSide,
      uniforms: {
        viewVector: { type: "v3", value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader: vertex(),
      fragmentShader: fragment(),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
  }

  get viewVector() {
    return this.uniforms.viewVector.value;
  }

  set viewVector(v) {
    this.uniforms.viewVector.value = v;
  }
}

extend({ AroundMaterial });
