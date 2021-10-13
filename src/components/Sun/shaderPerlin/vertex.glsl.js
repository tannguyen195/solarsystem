export default function vertex() {
  return `
    uniform float time;
    uniform vec2 pixels;
    float PI = 3.14159265359;
    
    varying vec3 vLayer0;
    varying vec3 vLayer1;
    varying vec3 vLayer2;
  
    varying vec3 eyeVector;
    varying vec3 vNormal;

    mat2 rotate(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }
    
    void main() {
      vNormal = normal;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      eyeVector = normalize(worldPosition.xyz - cameraPosition);

      float t = time*.005;

      mat2 rot = rotate(t);
      vec3 p0 = position;      
      p0.yz = rot*p0.yz;
      vLayer0 = p0;

      mat2 rot1 = rotate(t*1.5 + 10.);
      vec3 p1 = position;      
      p1.xz = rot1*p1.xz;
      vLayer1 = p1;

      mat2 rot2 = rotate(t*2.0 + 30.);
      vec3 p2 = position;      
      p2.xy = rot2*p2.xy;
      vLayer2 = p2;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
`;
}
