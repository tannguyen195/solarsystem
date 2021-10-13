(this.webpackJsonpsolarsystem=this.webpackJsonpsolarsystem||[]).push([[4],{66:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(13),i=t(10),o=t(17),a=function(e){return e===Object(e)&&!Array.isArray(e)&&"function"!==typeof e};function s(e){var n=Object(o.f)(i.TextureLoader,a(e)?Object.values(e):e);if(a(e)){var t=Object.keys(e),s={};return t.forEach((function(e){return Object.assign(s,Object(r.a)({},e,n[t.indexOf(e)]))})),s}return n}s.preload=function(e){return o.f.preload(i.TextureLoader,e)},s.clear=function(e){return o.f.clear(i.TextureLoader,e)}},67:function(e,n,t){"use strict";t.r(n);var r=t(9),i=t(30),o=t(5),a=t(17),s=t(66),c=t(20),u=t(10),l=t(11);var v=function(e){var n=e.size,t=e.innerDiameter,r=e.facets,i=e.color,o=e.name,a=e.distance;return Object(l.jsxs)("mesh",{name:o,rotation:[Math.PI/2,0,0],position:[a,0,0],children:[Object(l.jsx)("ringBufferGeometry",{args:[n,t,r]}),Object(l.jsx)("meshStandardMaterial",{attach:"material",side:u.DoubleSide,color:i})]})};var m=function(e){var n=e.name,t=e.rotationRate,m=e.orbitRate,x=e.size,p=e.texture,f=e.axialTilt,b=e.bumpMap,d=e.specularMap,j=e.earthCloud,h=e.distanceScale,y=e.planetGeometry,g=Object(s.a)({map:p,bumpMap:b,specularMap:d}),O=Object(s.a)({map:j}),z=Object(o.useRef)(),w=Object(c.a)((function(e){var n;return null===(n=e.activePlanet)||void 0===n?void 0:n.name}));return Object(a.e)((function(e){e.scene;var r=Date.now();w!==n&&"moon"!==w&&(z.current.rotation.y+=.1*t,z.current.position.x=Math.sin(r*(1/(200*m))+10)*h,z.current.position.z=Math.cos(r*(1/(200*m))+10)*h)})),Object(l.jsxs)("group",{children:[Object(l.jsxs)("mesh",{scale:x,rotation:f,name:n,position:[h,0,0],ref:z,children:[y,Object(l.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({attach:"material"},g),{},{shininess:0,bumpScale:.005,specular:new u.Color("grey")})),Object(l.jsxs)("mesh",{children:[Object(l.jsx)("sphereBufferGeometry",{args:[x+.005,48,48]}),Object(l.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({},O),{},{attach:"material",transparent:!0}))]})]}),Object(l.jsx)(v,Object(r.a)({},i.a.orbitData))]})};var x=function(e){var n=e.name,t=e.rotationRate,i=e.orbitRate,u=e.size,m=e.texture,x=e.distanceScale,p=e.axialTilt,f=e.orbitData,b=e.planetGeometry,d=Object(s.a)({map:m}),j=Object(o.useRef)(),h=Object(c.a)((function(e){var n;return null===(n=e.activePlanet)||void 0===n?void 0:n.name}));return Object(a.e)((function(e){var r=e.scene,o=Date.now();if(j.current.rotation.y+=.1*t,n!==h&&(j.current.position.x=Math.sin(o*(1/(200*i))+10)*x,j.current.position.z=Math.cos(o*(1/(200*i))+10)*x,"moon"===n)){var a,s=null===(a=r.getObjectByName("earth"))||void 0===a?void 0:a.position;j.current.position.x=j.current.position.x+s.x,j.current.position.z=j.current.position.z+s.z}})),Object(l.jsxs)("group",{children:[Object(l.jsxs)("mesh",{scale:u,rotation:p,name:n,position:[x,0,0],ref:j,children:[b,Object(l.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({attach:"material"},d),{},{shininess:0,bumpScale:.3}))]})," ",Object(l.jsx)(v,Object(r.a)({},f))]})},p=t(47);var f=function(){var e=Object(o.useRef)(),n=Object(s.a)({map:p.a});return Object(a.e)((function(n){var t,r=null===(t=n.scene.getObjectByName("saturn"))||void 0===t?void 0:t.position;e.current.position.x=r.x,e.current.position.z=r.z})),Object(l.jsxs)("mesh",{ref:e,position:[0,0,0],name:"saturnRing",rotation:[Math.PI/2*-26.73,0,0],children:[Object(l.jsx)("torusBufferGeometry",{args:[20,4,2,50]}),Object(l.jsx)("meshBasicMaterial",Object(r.a)(Object(r.a)({attach:"material"},n),{},{side:u.DoubleSide}))]})};var b=function(e){var n=e.name,t=e.rotationRate,i=e.orbitRate,u=e.size,v=e.texture,m=e.distanceScale,x=e.axialTilt,p=e.planetGeometry,f=(e.orbitData,Object(s.a)({map:v})),b=Object(o.useRef)(),d=Object(c.a)((function(e){var n;return null===(n=e.activePlanet)||void 0===n?void 0:n.name})),j=Object(a.g)().scene;return Object(a.e)((function(){var e=Date.now();if(b.current.rotation.y+=.1*t,n!==d){var r;b.current.position.x=Math.sin(e*(1/(200*i))+10)*m,b.current.position.z=Math.cos(e*(1/(200*i))+10)*m;var o=null===(r=j.getObjectByName("earth"))||void 0===r?void 0:r.position;b.current.position.x=o.x+b.current.position.x/10,b.current.position.z=o.z+b.current.position.z/10}})),Object(l.jsxs)("mesh",{scale:u,rotation:x,name:n,position:[0,0,0],ref:b,children:[p,Object(l.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({attach:"material"},f),{},{shininess:0,bumpScale:.3}))]})},d=t(12),j=t(1),h=t(2),y=t(3),g=t(4);var O=function(e){Object(y.a)(t,e);var n=Object(g.a)(t);function t(){return Object(j.a)(this,t),n.call(this,{extensions:{derivatives:"#extension GL_OES_standard_derivatives: enable"},side:u.DoubleSide,uniforms:{time:{value:0},resolution:{value:new u.Vector4}},vertexShader:"\n    uniform float time;\n    varying vec3 vPosition;\n \n    uniform vec2 pixels;\n    float PI = 3.14159265359;\n    void main() {\n      vPosition = position;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n    }\n",fragmentShader:"\n  uniform float time; \n  uniform float progress; \n  uniform sampler2D texture1;\n  uniform vec4 resolution;\n  varying vec3 vPosition;\n\n  float PI = 3.14159265359;\n    \n  // Description : Array and textureless GLSL 2D/3D/4D simplex \n  //               noise functions.\n  //      Author : Ian McEwan, Ashima Arts.\n  //  Maintainer : stegu\n  //     Lastmod : 20110822 (ijm)\n  //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n  //               Distributed under the MIT License. See LICENSE file.\n  //               https://github.com/ashima/webgl-noise\n  //               https://github.com/stegu/webgl-noise\n  // \n\n  vec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\n  float mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\n  vec4 permute(vec4 x) {\n      return mod289(((x*34.0)+10.0)*x);\n  }\n\n  float permute(float x) {\n      return mod289(((x*34.0)+10.0)*x);\n  }\n\n  vec4 taylorInvSqrt(vec4 r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n\n  float taylorInvSqrt(float r)\n  {\n    return 1.79284291400159 - 0.85373472095314 * r;\n  }\n\n  vec4 grad4(float j, vec4 ip)\n    {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; \n\n    return p;\n    }\n              \n  // (sqrt(5) - 1)/4 = F4, used once below\n  #define F4 0.309016994374947451\n\n  float snoise(vec4 v)\n    {\n    const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                          0.276393202250021,  // 2 * G4\n                          0.414589803375032,  // 3 * G4\n                        -0.447213595499958); // -1 + 4 * G4\n\n  // First corner\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n  // Other corners\n\n  // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n  //  i0.x = dot( isX, vec3( 1.0 ) );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n  //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    // i0 now contains the unique values 0,1,2,3 in each channel\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n    //  x1 = x0 - i1  + 1.0 * C.xxxx\n    //  x2 = x0 - i2  + 2.0 * C.xxxx\n    //  x3 = x0 - i3  + 3.0 * C.xxxx\n    //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n  // Permutations\n    i = mod289(i); \n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n              i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n  // Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n  // 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n  // Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n  // Mix contributions from the five corners\n    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n    }\n\n    float fbm(vec4 p) {\n      float sum = 0.;\n      float amp = 1.;\n      float scale = 1.;\n      for(int i = 0;i < 8;i++) {\n        sum += snoise(p*scale)*amp;\n        p.w += 100.;\n        amp *= .9;\n        scale += 2.;\n      }\n      return sum;\n    }\n  void main() {\n    vec4 p = vec4(vPosition*.4,time*0.005);\n    float noisy = fbm(p);\n\n    vec4 p1 = vec4(vPosition*.2,time*.005);\n    float spots = max(snoise(p1), 0.);\n\n    gl_FragColor = vec4(noisy);\n    gl_FragColor *= mix(1., spots, 0.5);\n  }\n  "})}return Object(h.a)(t,[{key:"time",get:function(){return this.uniforms.time.value},set:function(e){this.uniforms.time.value=e}}]),t}(u.ShaderMaterial);Object(a.d)({SunMaterial:O});var z=function(e){Object(y.a)(t,e);var n=Object(g.a)(t);function t(){return Object(j.a)(this,t),n.call(this,{extensions:{derivatives:"#extension GL_OES_standard_derivatives: enable"},side:u.DoubleSide,uniforms:{time:{value:0},uPerlin:{value:null},resolution:{value:new u.Vector4}},vertexShader:"\n    uniform float time;\n    uniform vec2 pixels;\n    float PI = 3.14159265359;\n    \n    varying vec3 vLayer0;\n    varying vec3 vLayer1;\n    varying vec3 vLayer2;\n  \n    varying vec3 eyeVector;\n    varying vec3 vNormal;\n\n    mat2 rotate(float a) {\n      float s = sin(a);\n      float c = cos(a);\n      return mat2(c, -s, s, c);\n    }\n    \n    void main() {\n      vNormal = normal;\n      vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n      eyeVector = normalize(worldPosition.xyz - cameraPosition);\n\n      float t = time*.005;\n\n      mat2 rot = rotate(t);\n      vec3 p0 = position;      \n      p0.yz = rot*p0.yz;\n      vLayer0 = p0;\n\n      mat2 rot1 = rotate(t*1.5 + 10.);\n      vec3 p1 = position;      \n      p1.xz = rot1*p1.xz;\n      vLayer1 = p1;\n\n      mat2 rot2 = rotate(t*2.0 + 30.);\n      vec3 p2 = position;      \n      p2.xy = rot2*p2.xy;\n      vLayer2 = p2;\n\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n    }\n",fragmentShader:"\n  uniform float time; \n  uniform float progress; \n  uniform sampler2D texture1;\n  uniform vec4 resolution;\n  uniform samplerCube uPerlin;\n\n  varying vec3 eyeVector;\n  varying vec3 vNormal;\n\n  float PI = 3.14159265359;\n  \n  varying vec3 vLayer0;\n  varying vec3 vLayer1;\n  varying vec3 vLayer2;\n\n  float Fresnel(vec3 eyeVector, vec3 worldNormal) {\n    return pow(1.0 + dot(eyeVector, worldNormal),3.0);\n  }\n\n  vec3 brightnessToColor(float b) {\n    b *= 0.25;\n    return (vec3(b, b*b, b*b*b*b)/0.25)*0.6;\n  }\n  \n  float supersun() {\n    float sum = 0.;\n    sum += textureCube(uPerlin, vLayer0).r;\n    sum += textureCube(uPerlin, vLayer1).r;\n    sum += textureCube(uPerlin, vLayer2).r;\n    sum += 0.33;\n    return sum;\n  }\n\n  void main() {\n   float brightness = supersun();\n   brightness = brightness*.9 + 1.;\n\n   float fres = Fresnel(eyeVector, vNormal);\n\n   brightness += pow(fres,0.8);\n\n   vec3 col = brightnessToColor(brightness);\n\n   gl_FragColor = vec4(col,1.0);\n\n  }\n  "})}return Object(h.a)(t,[{key:"time",get:function(){return this.uniforms.time.value},set:function(e){this.uniforms.time.value=e}},{key:"uPerlin",get:function(){return this.uniforms.uPerlin.value},set:function(e){this.uniforms.uPerlin.value=e}}]),t}(u.ShaderMaterial);Object(a.d)({PerlinMaterial:z});var w=function(e){Object(y.a)(t,e);var n=Object(g.a)(t);function t(){return Object(j.a)(this,t),n.call(this,{side:u.BackSide,uniforms:{time:{value:0},resolution:{value:new u.Vector4}},vertexShader:"\n    uniform float time;\n    varying vec2 vUv;\n    varying vec3 vPosition;\n    varying vec3 vNormal;\n    uniform vec2 pixels;\n    float PI = 3.14159265359;\n    \n    void main() {\n      vPosition = position;\n      vNormal = normal;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); \n    }\n",fragmentShader:"\n  uniform float time; \n  uniform float progress; \n  uniform sampler2D texture1;\n  uniform vec4 resolution;\n\n  varying vec2 vUv;\n  varying vec3 vNormal;\n  varying vec3 vPosition;\n\n  float PI = 3.14159265359;\n\n  vec3 brightnessToColor(float b) {\n    b *= 0.25;\n    return (vec3(b, b*b, b*b*b*b)/0.25)*0.6;\n  }\n  \n  void main() {\n    float radial = 1. - vNormal.z;\n    radial *= radial* radial;\n\n    float brightness = 1. + radial*0.83;\n\n    gl_FragColor.rgb = brightnessToColor(brightness)*radial;\n    gl_FragColor.a = radial;\n    // float intensity = pow(.5 - dot(vNormal, vec3(0.5,0,0.)), 2.);\n    // gl_FragColor = vec4(1., .6, .4, 1.) * intensity;\n  }\n  ",blending:u.AdditiveBlending})}return Object(h.a)(t,[{key:"time",get:function(){return this.uniforms.time.value},set:function(e){this.uniforms.time.value=e}},{key:"uPerlin",get:function(){return this.uniforms.uPerlin.value},set:function(e){this.uniforms.uPerlin.value=e}}]),t}(u.ShaderMaterial);Object(a.d)({AroundMaterial:w});var P=function(){var e=Object(o.useRef)(),n=Object(o.useRef)(),t=Object(o.useRef)(),r=Object(o.useMemo)((function(){return[new u.WebGLCubeRenderTarget(256,{format:u.RGBFormat,generateMipmaps:!0,minFilter:u.LinearMipMapLinearFilter,encoding:u.sRGBEncoding})]}),[]),i=Object(d.a)(r,1)[0];return Object(a.e)((function(r,o){n.current.time+=o,e.current.time+=o,e.current.uPerlin=i.texture,t.current.update(r.gl,r.scene)})),Object(l.jsxs)("group",{children:[Object(l.jsxs)("mesh",{name:"sun",position:[0,0,0],children:[Object(l.jsx)("sphereBufferGeometry",{args:[25,40,40]}),Object(l.jsx)("sunMaterial",{ref:n})]}),Object(l.jsxs)("mesh",{children:[Object(l.jsx)("cubeCamera",{name:"cubeCamera",ref:t,position:[0,0,0],args:[.1,26,i]}),Object(l.jsx)("sphereBufferGeometry",{args:[25,40,40]}),Object(l.jsx)("perlinMaterial",{ref:e})]})]})};n.default=function(){var e=Object(l.jsx)("sphereBufferGeometry",{args:[1,40,40]});return Object(l.jsxs)("group",{children:[Object(l.jsx)(P,{}),Object(l.jsx)(m,Object(r.a)(Object(r.a)({},i.a),{},{planetGeometry:e}),i.a.name),Object(l.jsx)(b,Object(r.a)({planetGeometry:e},i.b),i.b.name),i.c.map((function(n){return Object(l.jsx)(x,Object(r.a)({planetGeometry:e},n),n.name)})),Object(l.jsx)(f,{})]})}}}]);
//# sourceMappingURL=4.9bbc7e52.chunk.js.map