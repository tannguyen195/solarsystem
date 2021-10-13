export default function vertex() {
  return `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    uniform vec2 pixels;
    float PI = 3.14159265359;
    
    void main() {
      vPosition = position;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); 
    }
`;
}
