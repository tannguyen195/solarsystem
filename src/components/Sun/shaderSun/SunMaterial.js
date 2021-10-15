import * as THREE from "three";
import { extend } from "@react-three/fiber";
import vertex from "./vertex.glsl.js";
import fragment from "./fragment.glsl.js";

export default class SunMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives: enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: {
          value: new THREE.Vector4(),
        },
        
      },
      vertexShader: vertex(),
      fragmentShader: fragment(),
    });
  }


  get time() {
    return this.uniforms.time.value
  }

  set time(v) {
    this.uniforms.time.value = v
  }

}

extend({ SunMaterial });
