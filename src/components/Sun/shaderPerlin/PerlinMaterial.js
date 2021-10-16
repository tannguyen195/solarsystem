import * as THREE from "three";
import { extend } from "@react-three/fiber";
import vertex from "./vertex.glsl.js";
import fragment from "./fragment.glsl.js";

export default class PerlinMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      extensions: {
        derivatives: true,
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        uPerlin: { value: null },
        resolution: {
          value: new THREE.Vector4(),
        },
      },
      vertexShader: vertex(),
      fragmentShader: fragment(),
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

extend({ PerlinMaterial });
