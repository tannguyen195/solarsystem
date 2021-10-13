export default function fragment() {
  return `
  uniform float time; 
  uniform float progress; 
  uniform sampler2D texture1;
  uniform vec4 resolution;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  float PI = 3.14159265359;

  vec3 brightnessToColor(float b) {
    b *= 0.25;
    return (vec3(b, b*b, b*b*b*b)/0.25)*0.6;
  }
  
  void main() {
    float radial = 1. - vNormal.z;
    radial *= radial* radial;

    float brightness = 1. + radial*0.83;

    gl_FragColor.rgb = brightnessToColor(brightness)*radial;
    gl_FragColor.a = radial;
    // float intensity = pow(.5 - dot(vNormal, vec3(0.5,0,0.)), 2.);
    // gl_FragColor = vec4(1., .6, .4, 1.) * intensity;
  }
  `;
}
