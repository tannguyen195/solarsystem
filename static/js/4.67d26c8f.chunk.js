(this.webpackJsonpsolarsystem=this.webpackJsonpsolarsystem||[]).push([[4],{65:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(13),n=a(9),i=a(18),c=function(e){return e===Object(e)&&!Array.isArray(e)&&"function"!==typeof e};function o(e){var t=Object(i.c)(n.TextureLoader,c(e)?Object.values(e):e);if(c(e)){var a=Object.keys(e),o={};return a.forEach((function(e){return Object.assign(o,Object(r.a)({},e,t[a.indexOf(e)]))})),o}return t}o.preload=function(e){return i.c.preload(n.TextureLoader,e)},o.clear=function(e){return i.c.clear(n.TextureLoader,e)}},66:function(e,t,a){"use strict";a.r(t);var r=a(11),n=a(34),i=a(6),c=a(18),o=a(65),s=a(22),u=a(9),j=a(10);var b=function(e){var t=e.size,a=e.innerDiameter,r=e.facets,n=e.color,i=e.name,c=e.distance;return Object(j.jsxs)("mesh",{name:i,rotation:[Math.PI/2,0,0],position:[c,0,0],children:[Object(j.jsx)("ringBufferGeometry",{args:[t,a,r]}),Object(j.jsx)("meshStandardMaterial",{attach:"material",side:u.DoubleSide,color:n})]})};var l=function(e){var t=e.name,a=e.rotationRate,l=e.orbitRate,O=e.size,m=e.texture,p=e.axialTilt,h=e.bumpMap,f=e.specularMap,x=e.earthCloud,v=e.distanceScale,d=e.planetGeometry,y=Object(o.a)({map:m,bumpMap:h,specularMap:f}),g=Object(o.a)({map:x}),M=Object(i.useRef)(),z=Object(s.a)((function(e){var t;return null===(t=e.activePlanet)||void 0===t?void 0:t.name}));return Object(c.b)((function(e){e.scene;var r=Date.now();z!==t&&"moon"!==z&&(M.current.rotation.y+=.1*a,M.current.position.x=Math.sin(r*(1/(200*l))+10)*v,M.current.position.z=Math.cos(r*(1/(200*l))+10)*v)})),Object(j.jsxs)("group",{children:[Object(j.jsxs)("mesh",{scale:O,rotation:p,name:t,position:[v,0,0],ref:M,children:[d,Object(j.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({attach:"material"},y),{},{shininess:0,bumpScale:.005,specular:new u.Color("grey")})),Object(j.jsxs)("mesh",{children:[Object(j.jsx)("sphereBufferGeometry",{args:[O+.005,48,48]}),Object(j.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({},g),{},{attach:"material",transparent:!0}))]})]}),Object(j.jsx)(b,Object(r.a)({},n.a.orbitData))]})};var O=function(e){var t=e.name,a=e.rotationRate,n=e.orbitRate,u=e.size,l=e.texture,O=e.distanceScale,m=e.axialTilt,p=e.orbitData,h=e.planetGeometry,f=Object(o.a)({map:l}),x=Object(i.useRef)(),v=Object(s.a)((function(e){var t;return null===(t=e.activePlanet)||void 0===t?void 0:t.name}));return Object(c.b)((function(e){var r=e.scene,i=Date.now();if(x.current.rotation.y+=.1*a,t!==v&&(x.current.position.x=Math.sin(i*(1/(200*n))+10)*O,x.current.position.z=Math.cos(i*(1/(200*n))+10)*O,"moon"===t)){var c,o=null===(c=r.getObjectByName("earth"))||void 0===c?void 0:c.position;x.current.position.x=x.current.position.x+o.x,x.current.position.z=x.current.position.z+o.z}})),Object(j.jsxs)("group",{children:[Object(j.jsxs)("mesh",{scale:u,rotation:m,name:t,position:[O,0,0],ref:x,children:[h,Object(j.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({attach:"material"},f),{},{shininess:0,bumpScale:.3}))]})," ",Object(j.jsx)(b,Object(r.a)({},p))]})},m=a(49);var p=function(){var e=Object(i.useRef)(),t=Object(o.a)({map:m.a});return Object(c.b)((function(t){var a,r=null===(a=t.scene.getObjectByName("saturn"))||void 0===a?void 0:a.position;e.current.position.x=r.x,e.current.position.z=r.z})),Object(j.jsxs)("mesh",{ref:e,position:[0,0,0],name:"saturnRing",rotation:[Math.PI/2*-26.73,0,0],children:[Object(j.jsx)("torusBufferGeometry",{args:[20,4,2,50]}),Object(j.jsx)("meshBasicMaterial",Object(r.a)(Object(r.a)({attach:"material"},t),{},{side:u.DoubleSide}))]})};var h=function(e){var t=e.name,a=e.rotationRate,n=e.orbitRate,u=e.size,b=e.texture,l=e.distanceScale,O=e.axialTilt,m=e.planetGeometry,p=(e.orbitData,Object(o.a)({map:b})),h=Object(i.useRef)(),f=Object(s.a)((function(e){var t;return null===(t=e.activePlanet)||void 0===t?void 0:t.name})),x=Object(c.d)().scene;return Object(c.b)((function(){var e=Date.now();if(h.current.rotation.y+=.1*a,t!==f){var r;h.current.position.x=Math.sin(e*(1/(200*n))+10)*l,h.current.position.z=Math.cos(e*(1/(200*n))+10)*l;var i=null===(r=x.getObjectByName("earth"))||void 0===r?void 0:r.position;h.current.position.x=i.x+h.current.position.x/10,h.current.position.z=i.z+h.current.position.z/10}})),Object(j.jsxs)("mesh",{scale:u,rotation:O,name:t,position:[0,0,0],ref:h,children:[m,Object(j.jsx)("meshPhongMaterial",Object(r.a)(Object(r.a)({attach:"material"},p),{},{shininess:0,bumpScale:.3}))]})},f=a.p+"static/media/texture_sun.2876e8ab.jpeg";var x=function(){var e=Object(o.a)({map:f});return Object(j.jsxs)("mesh",{position:[0,0,0],children:[Object(j.jsx)("sphereBufferGeometry",{args:[n.d,48,48]}),Object(j.jsx)("meshPhongMaterial",Object(r.a)({emissive:"#fc9601",emissiveIntensity:.7,attach:"material"},e))]})};t.default=function(){var e=Object(j.jsx)("sphereBufferGeometry",{args:[1,40,40]});return Object(j.jsxs)("group",{children:[Object(j.jsx)(x,{}),Object(j.jsx)(l,Object(r.a)(Object(r.a)({},n.a),{},{planetGeometry:e}),n.a.name),Object(j.jsx)(h,Object(r.a)({planetGeometry:e},n.b),n.b.name),n.c.map((function(t){return Object(j.jsx)(O,Object(r.a)({planetGeometry:e},t),t.name)})),Object(j.jsx)(p,{})]})}}}]);
//# sourceMappingURL=4.67d26c8f.chunk.js.map