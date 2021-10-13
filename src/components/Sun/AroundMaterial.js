import * as THREE from "three";
import { extend } from "@react-three/fiber";
import vertex from "./shaderAround/vertex.glsl.js";
import fragment from "./shaderAround/fragment.glsl.js";

export default class AroundMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      side: THREE.BackSide,
      uniforms: {
        time: { value: 0 },
        resolution: {
          value: new THREE.Vector4(),
        },
      },
      vertexShader: vertex(),
      fragmentShader: fragment(),
      blending: THREE.AdditiveBlending,
    });
  }

  get time() {
    return this.uniforms.time.value;
  }

  set time(v) {
    this.uniforms.time.value = v;
  }

  get uPerlin() {
    return this.uniforms.uPerlin.value;
  }

  set uPerlin(v) {
    this.uniforms.uPerlin.value = v;
  }
}

extend({ AroundMaterial });
