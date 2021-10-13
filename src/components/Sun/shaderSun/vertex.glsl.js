export default function vertex() {
  return `
    uniform float time;
    varying vec3 vPosition;
 
    uniform vec2 pixels;
    float PI = 3.14159265359;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
`;
}
