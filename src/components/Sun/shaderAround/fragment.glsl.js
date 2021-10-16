export default function fragment() {
  return `
  varying vec3 vNormal;

  vec3 brightnessToColor(float b) {
    b *= 0.25;
    return (vec3(b, b*b, b*b*b*b)/0.25)*0.6;
  }

  void main() 
  {
    float radial = 1. - vNormal.z;
    radial *= radial*radial;
   
    float brightness = 1. + radial*.4 ;
    vec3 glow = brightnessToColor(brightness)*radial ;

    gl_FragColor.rgb = glow;
    gl_FragColor.a = radial;

  }
  `;
}
