export default function vertex() {
  return `
    uniform float uSize;
    uniform float uTime;

    varying vec3 vColor;

    attribute float aScale;
    attribute vec3 aRandomness;
    

    float PI = 3.14159265359;
    void main() {
      /**
       * Position
       */
      vec4 modelPosition  = modelMatrix * vec4(position, 1.0);

      // Spin
      float angle = atan(modelPosition.x, modelPosition.z);
      float distanceToCenter = length(modelPosition.xz);
      float angleOffet = (1.0 / distanceToCenter) * uTime * 0.2;
      angle += angleOffet;
      modelPosition.x = cos(angle) * distanceToCenter;
      modelPosition.z = sin(angle) * distanceToCenter;
      
      //Randomness
      modelPosition.xyz += aRandomness;
 

      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;
      /**
       * Size
       */
      gl_PointSize = aScale * uSize;
      gl_PointSize *= ( 1.0 / - viewPosition.z );

      /**
       * Color
       */
      vColor = color;
    }
`;
}
