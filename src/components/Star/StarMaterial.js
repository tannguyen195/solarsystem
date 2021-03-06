import * as THREE from 'three'
import { extend } from '@react-three/fiber'

export default class StarMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSize: { value: 3000 },
      },
      vertexShader: `
      uniform float uPixelRatio;
      uniform float uSize;
      uniform float uTime;
      attribute float aScale;    
      attribute vec3 color;
      varying vec3 vColor;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2 * 20.0;
        modelPosition.z += cos(uTime + modelPosition.x * 100.0) * aScale * 0.2 * 20.0;
        modelPosition.x += cos(uTime + modelPosition.x * 100.0) * aScale * 0.2 * 20.0;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPostion = projectionMatrix * viewPosition;    
        gl_Position = projectionPostion;
        gl_PointSize = uSize * aScale * uPixelRatio ;
        gl_PointSize *= (1.0 / - viewPosition.z);
        vColor = color;
      }`,
      fragmentShader: `
      varying vec3 vColor;
      void main() {
        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
        float strength = 0.05 / distanceToCenter - 0.1;
        
        gl_FragColor = vec4(vColor, strength);
      }`,
    })
  }

  get time() {
    return this.uniforms.uTime.value
  }

  set time(v) {
    this.uniforms.uTime.value = v
  }
}

extend({ StarMaterial })
