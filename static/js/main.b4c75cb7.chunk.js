(this.webpackJsonpsolarsystem=this.webpackJsonpsolarsystem||[]).push([[0],{20:function(e,t,a){"use strict";var i=a(9),n=a(29),s=a.n(n),r=a(10),l=function(e,t){return{isControl:!1,setControl:function(t){e((function(){return{isControl:t}}))},activePlanet:null,setActivePlanet:function(t){e((function(){return{activePlanet:t}}))},activeCameraPlanet:null,setActiveCameraPlanet:function(t){e((function(){return{activeCameraPlanet:t}}))},shouldUpdateCameraPosition:!0,setUpdateCameraPosition:function(t){e((function(){return{shouldUpdateCameraPosition:t}}))},cameraPos:new r.Vector3(838918.0733672641,788633.9991424268,813186.7754809225),setCameraPos:function(t){e((function(){return{cameraPos:t}}))},cameraRos:new r.Vector3(-.7700713215209677,.6374423945561629,.5234656298847726)}},o=s()((function(e,t){return Object(i.a)({},l(e,t))}));t.a=o},22:function(e,t,a){e.exports={root:"PlanetDetail_root__25GuC",section:"PlanetDetail_section__2QeEw",title:"PlanetDetail_title__nMBEH",desc:"PlanetDetail_desc__yrAkl",detail:"PlanetDetail_detail__1JYVL",detailTitle:"PlanetDetail_detailTitle__129_2",value:"PlanetDetail_value__3V5M7",flex:"PlanetDetail_flex__Ii3lu"}},25:function(e,t,a){e.exports={panel:"DestinationPanel_panel__1NFU4",container:"DestinationPanel_container__2AHHx",option:"DestinationPanel_option__3NeZm",name:"DestinationPanel_name__2jEsH",planet:"DestinationPanel_planet__2jRWi",active:"DestinationPanel_active__3kSfd"}},30:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return O}));var i=a.p+"static/media/texture_earth.1d9f4954.jpg",n=a.p+"static/media/texture_moon.076144c3.jpeg",s=a.p+"static/media/texture_venus.212cb5ee.jpeg",r=a.p+"static/media/texture_mercury.ef31624b.jpeg",l=a(47),o=a.p+"static/media/texture_saturn.721ee595.jpeg",c=a.p+"static/media/texture_uranus.6989dacf.jpeg",u=a.p+"static/media/texture_neptune.165bdad0.jpeg",d=a.p+"static/media/texture_mars.b793dd75.jpeg",m=a.p+"static/media/bumpmap_earth.3bc3af08.jpg",b=a.p+"static/media/normal_earth.50692705.png",v=a.p+"static/media/specular_earth.c1ee5f99.png",h=a.p+"static/media/texture_earth_cloud.4373337e.png",f=25,p={name:"sun",size:f,orbitRate:230,data:[{title:"Distance from Earth",value:"149.25 million km (1 AU)"},{title:"Gravity",value:"274 m/s\xb2"},{title:"Mass",value:"1.989 \xd7 10^30 kg"},{title:"Surface Temperature",value:"5,778 K"},{title:"Radius",value:"696,340 km"}],distanceToEarth:1,desc:"The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit."},j={name:"earth",texture:i,orbitRate:365.2565,rotationRate:-.015,size:1,axialTilt:[Math.PI/180*23.4,0,0],distanceScale:75,distance:1,data:[{title:"Radius",value:"6.371 km"},{title:"Distance from Sun",value:"149.25 million km (1 AU)"},{title:"Mass",value:"5.972 \xd7 10^24 kg"},{title:"Moon",value:"1"},{title:"Population",value:"7.753 billion (2020)"}],desc:"Earth\u2014our home planet\u2014is the only place we know of so far that\u2019s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",orbitData:{size:50.01+f,innerDiameter:49.99+f,facets:320,color:16777215,name:"earthOrbit",distance:0},bumpMap:m,specularMap:v,normalMap:b,earthCloud:h},g={name:"moon",texture:n,orbitRate:29.5,rotationRate:-.01,size:.27,axialTilt:[Math.PI/180*6.68,0,0],distanceScale:25.00125,data:[{title:"Distance from Earth",value:"384,400 km"},{title:"Radius",value:"1.727 km"},{title:"Mass",value:"7.34767309 \xd7 10^22 kg"},{title:"Gravity",value:"1.62 m/s\xb2"}],distance:25e-6,desc:"Earth's Moon is the only place beyond Earth where humans have set foot, so far. The Moon makes our planet more livable by moderating how much it wobbles on its axis.",orbitData:{size:25.133,innerDiameter:25.113,facets:320,color:16777215,name:"moonOrbit",distance:0}},O=[{name:"mercury",texture:r,orbitRate:87.969,rotationRate:-.0061,size:1/2.6114,axialTilt:[Math.PI/180*.01,0,0],distanceScale:45,data:[{title:"Distance from Sun",value:"47.833 million km (0.4 AU)"},{title:"Radius",value:"2.440 km"},{title:"Mass",value:"3.285 \xd7 10^23 kg"},{title:"Gravity",value:"3.7 m/s\xb2"},{title:"Length of Day",value:"58d 15h 30m"},{title:"Length of Year",value:"88 days"},{title:"Moon",value:"0"}],distance:.4,desc:"Mercury\u2014the smallest planet in our solar system and closest to the Sun\u2014is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",orbitData:{size:20.01+f,innerDiameter:19.99+f,facets:320,color:16777215,name:"mercuryOrbit",distance:0}},{name:"venus",texture:s,orbitRate:225,rotationRate:6172839e-11,size:1/1.05292553191,axialTilt:[Math.PI/180*2.64,0,0],distanceScale:60,data:[{title:"Distance from Sun",value:"108.91 million km (0.7 AU)"},{title:"Radius",value:"6.052 km"},{title:"Mass",value:"4.867 \xd7 10^24 kg"},{title:"Gravity",value:"8.87 m/s\xb2"},{title:"Length of Day",value:"116d 18h 0m"},{title:"Length of Year",value:"225 days"},{title:"Moon",value:"0"}],distance:.7,desc:"Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",orbitData:{size:60.01,innerDiameter:59.99,facets:320,color:16777215,name:"venusOrbit",distance:0}},{name:"mars",texture:d,orbitRate:687,rotationRate:-.015,size:.53,axialTilt:[Math.PI/180*25.19,0,0],distanceScale:100,data:[{title:"Distance from Sun",value:"244.49 million km (1.5 AU)"},{title:"Radius",value:"3.390 km"},{title:"Mass",value:"6.39 \xd7 10^23 kg"},{title:"Gravity",value:"3.721 m/s\xb2"},{title:"Length of Day",value:"1d 0h 37m"},{title:"Length of Year",value:"1.88 years"},{title:"Moon",value:"2"}],distance:1.5,desc:"Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was\u2014billions of years ago\u2014wetter and warmer, with a thicker atmosphere.",orbitData:{size:100.01,innerDiameter:99.99,facets:320,color:16777215,name:"marsOrbit",distance:0}},{name:"jupiter",texture:l.a,orbitRate:4333,rotationRate:-.036,size:10.97,axialTilt:[Math.PI/180*3.12,0,0],distanceScale:285,data:[{title:"Distance from Sun",value:"750 million km (5.2 AU)"},{title:"Radius",value:"69.911 km"},{title:"Mass",value:"1.898 \xd7 10^27 kg"},{title:"Gravity",value:"24.79 m/s\xb2"},{title:"Length of Day",value:"0d 9h 56m"},{title:"Length of Year",value:"11.86 years"},{title:"Moon",value:"79"}],distance:5.2,desc:"Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",orbitData:{size:285.01,innerDiameter:284.99,facets:320,color:16777215,name:"jupiterOrbit",distance:0}},{name:"saturn",texture:o,orbitRate:10759,rotationRate:-.03529,size:9.14,axialTilt:[Math.PI/180*26.73,0,0],distanceScale:500,data:[{title:"Distance from Sun",value:"1.4839 billion km (9.5 AU)"},{title:"Radius",value:"58.232 km"},{title:"Mass",value:"5.683 \xd7 10^26 kg"},{title:"Gravity",value:"10.44 m/s\xb2"},{title:"Length of Day",value:"0d 10h 42m"},{title:"Length of Year",value:"29.45 years"},{title:"Moon",value:"62"}],distance:9.5,desc:"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",orbitData:{size:500.01,innerDiameter:499.99,facets:320,color:16777215,name:"saturnOrbit",distance:0}},{name:"uranus",texture:c,orbitRate:30660,rotationRate:-.0211,size:3.98,axialTilt:[Math.PI/180*82.23,0,0],distanceScale:1015,data:[{title:"Distance from Sun",value:"2.9515 billion km (19.8 AU)"},{title:"Radius",value:"25.362 km"},{title:"Mass",value:"8.681 \xd7 10^25 kg"},{title:"Gravity",value:"8.87 m/s\xb2"},{title:"Length of Day",value:"0d 17h 14m"},{title:"Length of Year",value:"84 years"},{title:"Moon",value:"27"}],moonNumber:27,distance:19.8,desc:"Uranus\u2014seventh planet from the Sun\u2014rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",orbitData:{size:1015.01,innerDiameter:1014.99,facets:320,color:16777215,name:"uranusOrbit",distance:0}},{name:"neptune",texture:u,orbitRate:60266,rotationRate:-.0225,size:3.86,axialTilt:[Math.PI/180*28.33,0,0],distanceScale:1530,data:[{title:"Distance from Sun",value:"4.475 billion km (30.1 AU)"},{title:"Radius",value:"24.622 km"},{title:"Mass",value:"1.024 \xd7 10^26 kg"},{title:"Gravity",value:"11.15 m/s\xb2"},{title:"Length of Day",value:"0d 16h 6m"},{title:"Length of Year",value:"164.81 years"},{title:"Moon",value:"14"}],distance:30.1,desc:"Neptune\u2014the eighth and most distant major planet orbiting our Sun\u2014is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",orbitData:{size:1530.01,innerDiameter:1529.99,facets:320,color:16777215,name:"neptuneOrbit",distance:0}}]},33:function(e,t,a){e.exports={fallback:"Fallback_fallback__4Vn0R",loader:"Fallback_loader__7GaeN",text:"Fallback_text__kAYVN",progress:"Fallback_progress__3FSWU",loadingBar:"Fallback_loadingBar__15lRv"}},47:function(e,t,a){"use strict";t.a=a.p+"static/media/texture_jupiter.6620327c.jpeg"},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var i=a(5),n=a.n(i),s=a(36),r=a.n(s),l=a(12),o=(a(56),a(17)),c=a(63),u=a(65),d=a(9),m=a(20),b=function(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){var e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{var t=window.matchMedia&&matchMedia("(pointer:coarse)");if(t&&"(pointer:coarse)"===t.media)e=!!t.matches;else if("orientation"in window)e=!0;else{var a=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(a)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(a)}}n(e?"Mobile":"Desktop")}),[]),a};var v=function(e){var t=e.isLoading,a=Object(o.g)().scene,n=b(),s=Object(m.a)((function(e){return e.activePlanet})),r=Object(i.useState)(null),c=Object(l.a)(r,2),u=c[0],v=c[1],h=Object(i.useState)(!1),f=Object(l.a)(h,2),p=f[0],j=f[1],g=Object(i.useState)(!0),O=Object(l.a)(g,2),x=O[0],y=O[1];return Object(i.useEffect)((function(){v(s),j(!0)}),[s]),Object(o.e)((function(e){var i=e.camera;if(!1===t&&x){var r={x:66.68508708051569,y:62.688036623625365,z:64.63972187177964};i.position.lerp(r,.1),i.position.clone().sub(r).length()<.1&&y(!1)}if((null===s||void 0===s?void 0:s.name)!==(null===u||void 0===u?void 0:u.name)&&v(s),p&&u){var l=null===a||void 0===a?void 0:a.getObjectByName(u.name),o=s.size,c=l.position,m="Mobile"!==n?3*o:5*o;i.position.lerp(Object(d.a)(Object(d.a)({},c),{},{z:c.z+m}),.05),i.position.clone().sub(c).length()<m&&j(!1)}if(u){var b,h,f,g=null===a||void 0===a||null===(b=a.getObjectByName(u.name))||void 0===b?void 0:b.position;null===(h=a.trackball)||void 0===h||h.target.lerp(g,.05),null===(f=a.trackball)||void 0===f||f.update()}})),null},h=a(11);var f=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ambientLight",{intensity:.3}),Object(h.jsx)("pointLight",{color:"rgb(255, 220, 180)",intensity:1.5})]})},p=a(64),j=function(){return Object(h.jsx)(p.a,{attach:"trackball"})},g=a(33),O=a.n(g),x=a(43);var y=function(e){var t=e.progress,a=Object(i.useState)("flex"),n=Object(l.a)(a,2),s=n[0],r=n[1],o=Object(i.useState)(0),c=Object(l.a)(o,2),u=c[0],m=c[1],b=Object(x.useSpring)({from:{opacity:1},to:{opacity:0},config:{duration:2e3}});return Object(i.useEffect)((function(){var e;return m(t/100),100===t&&(e=setTimeout((function(){return r("none")}),2e3)),function(){clearTimeout(e)}}),[t]),Object(h.jsxs)(x.animated.div,{style:100===t?Object(d.a)(Object(d.a)({},b),{},{display:s}):{},className:O.a.fallback,children:[Object(h.jsx)("div",{className:O.a.text,children:"GENERATING SOLAR SYSTEM "}),Object(h.jsx)("div",{style:{transform:"scaleX(".concat(u,")")},className:O.a.loadingBar}),Object(h.jsxs)("span",{className:O.a.progress,children:[parseInt(t)," %"]})]})},_=a(25),k=a.n(_),P=a(13),D=a(14),M=(a(10),a(30));var S=a(18),R=a(50),w=a.n(R);var T=function(e){var t=e.thumbnail,a=e.name,n=Object(i.useState)(!1),s=Object(l.a)(n,2),r=s[0],o=s[1],c=Object(i.useState)(!1),u=Object(l.a)(c,2),b=u[0],v=u[1],f=Object(S.useSpring)({from:{scale:"100%"},to:{scale:r?"120%":"100%"},config:{duration:200}}),p=Object(m.a)((function(e){return e.setActivePlanet})),j=Object(m.a)((function(e){return e.activePlanet})),g=Object(m.a)((function(e){return e.setUpdateCameraPosition})),O=function(){var e;p((e=a,[].concat(Object(D.a)(M.c),[M.a,M.b,M.d]).find((function(t){return t.name===e})))),g(!0)};return Object(i.useEffect)((function(){v(!0),a!==(null===j||void 0===j?void 0:j.name)&&v(!1)}),[j,a]),Object(h.jsxs)(S.animated.div,{onMouseOver:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onClick:function(){return O()},style:Object(d.a)({},f),className:w()(k.a.option,Object(P.a)({},k.a.active,b)),children:[Object(h.jsx)("img",{className:k.a.planet,src:t,alt:a}),Object(h.jsx)("div",{className:k.a.name,children:a})]})},N=a.p+"static/media/sun.7862a776.png",z=a.p+"static/media/earth.990ac782.png",E=a.p+"static/media/moon.2b4c176a.png",L=a.p+"static/media/venus.397fdee2.png",A=a.p+"static/media/mercury.a7105a56.png",C=a.p+"static/media/jupiter.529cdbe0.png",I=a.p+"static/media/saturn.00b7295f.png",U=a.p+"static/media/uranus.607cb33c.png",F=a.p+"static/media/neptune.48cf14b7.png",G=[{id:1,name:"sun",thumbnail:N},{id:2,name:"earth",thumbnail:z},{name:"moon",thumbnail:E,id:3},{name:"mercury",thumbnail:A,id:4},{name:"venus",thumbnail:L,id:5},{name:"mars",thumbnail:a.p+"static/media/mars.6cae79d3.png",id:6},{name:"jupiter",thumbnail:C,id:7},{name:"saturn",thumbnail:I,id:8},{name:"uranus",thumbnail:U,id:9},{name:"neptune",thumbnail:F,id:10}];var B=function(e){var t=e.isLoading,a=Object(i.useState)(!1),n=Object(l.a)(a,2),s=n[0],r=n[1];Object(i.useEffect)((function(){!1===t&&r(!0)}),[t]);var o=Object(S.useSpringRef)(),c=Object(S.useTransition)(s?G:[],{ref:o,trail:400/70,from:{opacity:0,scale:0},enter:function(e){return function(t){return t({opacity:1,scale:1,delay:3500-50*(G.length-e.id)})}},leave:{opacity:0,scale:0}});return Object(S.useChain)([o],[0,s?.1:.6]),Object(h.jsx)("div",{className:k.a.panel,children:Object(h.jsx)(S.animated.div,{className:k.a.container,children:c((function(e,t){return Object(h.jsx)(S.animated.div,{style:e,children:Object(i.createElement)(T,Object(d.a)(Object(d.a)({},t),{},{key:t.name}))})}))})})},Y=a(22),V=a.n(Y);var H=function(){var e=Object(m.a)((function(e){return e.activePlanet})),t=Object(i.useState)(null),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(i.useEffect)((function(){s(e)}),[e]),Object(h.jsx)(h.Fragment,{children:n&&Object(h.jsxs)("div",{className:V.a.root,children:[Object(h.jsxs)("div",{className:V.a.section,children:[Object(h.jsx)("div",{className:V.a.title,children:n.name}),Object(h.jsx)("div",{className:V.a.desc,children:n.desc})]}),Object(h.jsx)("div",{className:V.a.section,children:Object(h.jsx)("div",{className:V.a.flex,children:n.data.map((function(e){return Object(h.jsxs)("div",{className:V.a.detail,children:[Object(h.jsx)("div",{className:V.a.detailTitle,children:e.title}),Object(h.jsx)("div",{className:V.a.value,children:e.value})]},e.title)}))})})]})})},J=Object(i.lazy)((function(){return a.e(5).then(a.bind(null,69))}));var q=function(){var e=Object(m.a)((function(e){return e.cameraPos})),t=Object(i.useState)(!0),a=Object(l.a)(t,2),n=a[0],s=a[1];function r(){var e=Object(c.a)().progress;return Object(i.useEffect)((function(){100===e&&s(!1)}),[e]),Object(h.jsx)(y,{progress:e})}return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"bg"}),Object(h.jsx)(H,{}),Object(h.jsx)(B,{isLoading:n}),Object(h.jsx)(r,{}),Object(h.jsxs)(o.a,{colorManagement:!0,style:{background:"#232323"},camera:{position:e,near:.001,far:9e5},children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(f,{}),Object(h.jsx)(v,{isLoading:n}),Object(h.jsx)(j,{}),Object(h.jsx)(i.Suspense,{fallback:null,children:Object(h.jsx)(J,{})})]})]})},W=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,70)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root")),W()}},[[61,1,2]]]);
//# sourceMappingURL=main.b4c75cb7.chunk.js.map