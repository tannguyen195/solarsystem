(this.webpackJsonpsolarsystem=this.webpackJsonpsolarsystem||[]).push([[0],{17:function(e,t,a){"use strict";var n=a(10),i=a(30),s=a.n(i),r=a(11),l=function(e,t){return{cameraPos:new r.Vector3(838918.0733672641,788633.9991424268,813186.7754809225),setCameraPos:function(t){e((function(){return{cameraPos:t}}))},cameraRos:new r.Vector3(-.7700713215209677,.6374423945561629,.5234656298847726)}},c=function(e,t){return{isRendered:!1,setIsRendered:function(t){e((function(){return{isRendered:t}}))},activePlanet:null,setActivePlanet:function(t){e((function(){return{activePlanet:t}}))},toggleGalaxy:!1,setToggleGalaxy:function(t){e((function(){return{toggleGalaxy:t}}))}}},o=s()((function(e,t){return Object(n.a)(Object(n.a)({},l(e,t)),c(e,t))}));t.a=o},20:function(e,t,a){e.exports={panel:"DestinationPanel_panel__1NFU4",container:"DestinationPanel_container__2AHHx",option:"DestinationPanel_option__3NeZm",name:"DestinationPanel_name__2jEsH",planet:"DestinationPanel_planet__2jRWi",active:"DestinationPanel_active__3kSfd",subPanel:"DestinationPanel_subPanel__6mcrU",subOption:"DestinationPanel_subOption__3y95h"}},23:function(e,t,a){e.exports={root:"PlanetDetail_root__25GuC",section:"PlanetDetail_section__2QeEw",title:"PlanetDetail_title__nMBEH",desc:"PlanetDetail_desc__yrAkl",detail:"PlanetDetail_detail__1JYVL",detailTitle:"PlanetDetail_detailTitle__129_2",value:"PlanetDetail_value__3V5M7",flex:"PlanetDetail_flex__Ii3lu"}},26:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"e",(function(){return p})),a.d(t,"a",(function(){return g})),a.d(t,"c",(function(){return y})),a.d(t,"d",(function(){return O}));var n=a.p+"static/media/texture_earth.1d9f4954.jpg",i=a.p+"static/media/texture_moon.076144c3.jpeg",s=a.p+"static/media/texture_venus.212cb5ee.jpeg",r=a.p+"static/media/texture_mercury.ef31624b.jpeg",l=a(47),c=a.p+"static/media/texture_saturn.721ee595.jpeg",o=a.p+"static/media/texture_uranus.6989dacf.jpeg",u=a.p+"static/media/texture_neptune.165bdad0.jpeg",d=a.p+"static/media/texture_mars.b793dd75.jpeg",m=a.p+"static/media/bumpmap_earth.3bc3af08.jpg",b=a.p+"static/media/normal_earth.50692705.png",h=a.p+"static/media/specular_earth.c1ee5f99.png",v=a.p+"static/media/texture_earth_cloud.4373337e.png",f=25,j={name:"The Milky Way",desc:"The Milky Way is the galaxy that includes the Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye.",data:[{title:"Radius",value:"52,850 light years"},{title:"Age",value:"13.51 billion years"},{title:"Number of stars",value:"100\u2013400 billion"}],layers:11,size:1},p={name:"sun",layers:1,size:f,orbitRate:230,data:[{title:"Distance from Earth",value:"149.25 million km (1 AU)"},{title:"Gravity",value:"274 m/s\xb2"},{title:"Mass",value:"1.989 \xd7 10^30 kg"},{title:"Surface Temperature",value:"5,778 K"},{title:"Radius",value:"696,340 km"}],distanceToEarth:1,desc:"The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit."},g={name:"earth",layers:2,texture:n,orbitRate:365.2565,rotationRate:-.015,size:1,axialTilt:[Math.PI/180*23.4,0,0],distanceScale:75,distance:1,data:[{title:"Radius",value:"6.371 km"},{title:"Distance from Sun",value:"149.25 million km (1 AU)"},{title:"Mass",value:"5.972 \xd7 10^24 kg"},{title:"Moon",value:"1"},{title:"Population",value:"7.753 billion (2020)"}],desc:"Earth\u2014our home planet\u2014is the only place we know of so far that\u2019s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",orbitData:{size:50.01+f,innerDiameter:49.99+f,facets:320,color:16777215,name:"earthOrbit",distance:0},bumpMap:m,specularMap:h,normalMap:b,earthCloud:v},y={name:"moon",layers:3,texture:i,orbitRate:29.5,rotationRate:-.01,size:.27,axialTilt:[Math.PI/180*6.68,0,0],distanceScale:25.00125,data:[{title:"Distance from Earth",value:"384,400 km"},{title:"Radius",value:"1.727 km"},{title:"Mass",value:"7.34767309 \xd7 10^22 kg"},{title:"Gravity",value:"1.62 m/s\xb2"}],distance:25e-6,desc:"Earth's Moon is the only place beyond Earth where humans have set foot, so far. The Moon makes our planet more livable by moderating how much it wobbles on its axis.",orbitData:{size:25.133,innerDiameter:25.113,facets:320,color:16777215,name:"moonOrbit",distance:0}},O=[{name:"mercury",layers:4,texture:r,orbitRate:87.969,rotationRate:-.0061,size:1/2.6114,axialTilt:[Math.PI/180*.01,0,0],distanceScale:45,data:[{title:"Distance from Sun",value:"47.833 million km (0.4 AU)"},{title:"Radius",value:"2.440 km"},{title:"Mass",value:"3.285 \xd7 10^23 kg"},{title:"Gravity",value:"3.7 m/s\xb2"},{title:"Length of Day",value:"58d 15h 30m"},{title:"Length of Year",value:"88 days"},{title:"Moon",value:"0"}],distance:.4,desc:"Mercury\u2014the smallest planet in our solar system and closest to the Sun\u2014is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",orbitData:{size:20.01+f,innerDiameter:19.99+f,facets:320,color:16777215,name:"mercuryOrbit",distance:0}},{name:"venus",layers:5,texture:s,orbitRate:225,rotationRate:6172839e-11,size:1/1.05292553191,axialTilt:[Math.PI/180*2.64,0,0],distanceScale:60,data:[{title:"Distance from Sun",value:"108.91 million km (0.7 AU)"},{title:"Radius",value:"6.052 km"},{title:"Mass",value:"4.867 \xd7 10^24 kg"},{title:"Gravity",value:"8.87 m/s\xb2"},{title:"Length of Day",value:"116d 18h 0m"},{title:"Length of Year",value:"225 days"},{title:"Moon",value:"0"}],distance:.7,desc:"Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",orbitData:{size:60.01,innerDiameter:59.99,facets:320,color:16777215,name:"venusOrbit",distance:0}},{name:"mars",layers:6,texture:d,orbitRate:687,rotationRate:-.015,size:.53,axialTilt:[Math.PI/180*25.19,0,0],distanceScale:100,data:[{title:"Distance from Sun",value:"244.49 million km (1.5 AU)"},{title:"Radius",value:"3.390 km"},{title:"Mass",value:"6.39 \xd7 10^23 kg"},{title:"Gravity",value:"3.721 m/s\xb2"},{title:"Length of Day",value:"1d 0h 37m"},{title:"Length of Year",value:"1.88 years"},{title:"Moon",value:"2"}],distance:1.5,desc:"Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was\u2014billions of years ago\u2014wetter and warmer, with a thicker atmosphere.",orbitData:{size:100.01,innerDiameter:99.99,facets:320,color:16777215,name:"marsOrbit",distance:0}},{name:"jupiter",layers:7,texture:l.a,orbitRate:4333,rotationRate:-.036,size:10.97,axialTilt:[Math.PI/180*3.12,0,0],distanceScale:285,data:[{title:"Distance from Sun",value:"750 million km (5.2 AU)"},{title:"Radius",value:"69.911 km"},{title:"Mass",value:"1.898 \xd7 10^27 kg"},{title:"Gravity",value:"24.79 m/s\xb2"},{title:"Length of Day",value:"0d 9h 56m"},{title:"Length of Year",value:"11.86 years"},{title:"Moon",value:"79"}],distance:5.2,desc:"Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",orbitData:{size:285.01,innerDiameter:284.99,facets:320,color:16777215,name:"jupiterOrbit",distance:0}},{name:"saturn",layers:8,texture:c,orbitRate:10759,rotationRate:-.03529,size:9.14,axialTilt:[Math.PI/180*26.73,0,0],distanceScale:500,data:[{title:"Distance from Sun",value:"1.4839 billion km (9.5 AU)"},{title:"Radius",value:"58.232 km"},{title:"Mass",value:"5.683 \xd7 10^26 kg"},{title:"Gravity",value:"10.44 m/s\xb2"},{title:"Length of Day",value:"0d 10h 42m"},{title:"Length of Year",value:"29.45 years"},{title:"Moon",value:"62"}],distance:9.5,desc:"Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",orbitData:{size:500.01,innerDiameter:499.99,facets:320,color:16777215,name:"saturnOrbit",distance:0}},{name:"uranus",layers:9,texture:o,orbitRate:30660,rotationRate:-.0211,size:3.98,axialTilt:[Math.PI/180*82.23,0,0],distanceScale:1015,data:[{title:"Distance from Sun",value:"2.9515 billion km (19.8 AU)"},{title:"Radius",value:"25.362 km"},{title:"Mass",value:"8.681 \xd7 10^25 kg"},{title:"Gravity",value:"8.87 m/s\xb2"},{title:"Length of Day",value:"0d 17h 14m"},{title:"Length of Year",value:"84 years"},{title:"Moon",value:"27"}],moonNumber:27,distance:19.8,desc:"Uranus\u2014seventh planet from the Sun\u2014rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",orbitData:{size:1015.01,innerDiameter:1014.99,facets:320,color:16777215,name:"uranusOrbit",distance:0}},{name:"neptune",layers:10,texture:u,orbitRate:60266,rotationRate:-.0225,size:3.86,axialTilt:[Math.PI/180*28.33,0,0],distanceScale:1530,data:[{title:"Distance from Sun",value:"4.475 billion km (30.1 AU)"},{title:"Radius",value:"24.622 km"},{title:"Mass",value:"1.024 \xd7 10^26 kg"},{title:"Gravity",value:"11.15 m/s\xb2"},{title:"Length of Day",value:"0d 16h 6m"},{title:"Length of Year",value:"164.81 years"},{title:"Moon",value:"14"}],distance:30.1,desc:"Neptune\u2014the eighth and most distant major planet orbiting our Sun\u2014is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",orbitData:{size:1530.01,innerDiameter:1529.99,facets:320,color:16777215,name:"neptuneOrbit",distance:0}}]},33:function(e,t,a){e.exports={fallback:"Fallback_fallback__4Vn0R",loader:"Fallback_loader__7GaeN",text:"Fallback_text__kAYVN",progress:"Fallback_progress__3FSWU",loadingBar:"Fallback_loadingBar__15lRv"}},47:function(e,t,a){"use strict";t.a=a.p+"static/media/texture_jupiter.6620327c.jpeg"},56:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),s=a(36),r=a.n(s),l=(a(56),a(16)),c=a(63),o=a(65),u=a(12),d=a(17);var m=function(){var e=Object(d.a)((function(e){return e.isRendered})),t=Object(n.useState)(!0),a=Object(u.a)(t,2),i=a[0],s=a[1];return Object(l.e)((function(t){var a=t.camera;t.scene;if(!0===e&&i){var n={x:66.68508708051569,y:62.688036623625365,z:64.63972187177964};a.position.lerp(n,.1),a.position.clone().sub(n).length()<.1&&s(!1)}})),null};var b=function(){var e=Object(d.a)((function(e){return e.toggleGalaxy})),t=Object(d.a)((function(e){return e.setToggleGalaxy})),a=Object(d.a)((function(e){return e.activePlanet})),i=Object(d.a)((function(e){return e.setActivePlanet})),s=Object(n.useState)(!0),r=Object(u.a)(s,2),c=r[0],o=r[1],m=Object(l.g)().camera;return Object(n.useEffect)((function(){m.layers.enableAll(),m.layers.disable(11)}),[]),Object(n.useEffect)((function(){e?(m.layers.set(11),o(!0),i(null)):(m.layers.enableAll(),m.layers.disable(11),o(!0))}),[e]),Object(n.useEffect)((function(){a&&t(!1)}),[a]),Object(l.e)((function(t){var a=t.camera,n=t.scene;if(!0===e){var i,s,r={x:0,y:0,z:0};if(null===(i=n.trackball)||void 0===i||i.target.lerp(r,.05),null===(s=n.trackball)||void 0===s||s.update(),c){a.position.lerp({x:0,y:3,z:5},.1);var l=a.position.clone().sub(r).length();l<5.1&&l>5&&o(!1)}}})),null},h=a(10),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){var e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{var t=window.matchMedia&&matchMedia("(pointer:coarse)");if(t&&"(pointer:coarse)"===t.media)e=!!t.matches;else if("orientation"in window)e=!0;else{var a=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(a)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(a)}}i(e?"Mobile":"Desktop")}),[]),a};var f=function(){var e=v(),t=Object(d.a)((function(e){return e.activePlanet})),a=Object(n.useState)(!1),i=Object(u.a)(a,2),s=i[0],r=i[1];return Object(n.useEffect)((function(){r(!0)}),[t]),Object(l.e)((function(a){var n=a.camera,i=a.scene;if(s&&t){var l=null===i||void 0===i?void 0:i.getObjectByName(t.name),c=t.size,o=l.position,u="Mobile"!==e?3*c:5*c;n.position.lerp(Object(h.a)(Object(h.a)({},o),{},{z:o.z+u}),.05);var d=n.position.clone().sub(o).length();d<u+.1&&d>u-.1&&r(!1)}if(t){var m,b,v,f=null===(m=i.getObjectByName(t.name))||void 0===m?void 0:m.position;null===(b=i.trackball)||void 0===b||b.target.lerp(f,.05),null===(v=i.trackball)||void 0===v||v.update()}})),null},j=a(9);var p=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(m,{}),Object(j.jsx)(b,{})]})};var g=function(){return Object(j.jsxs)("group",{layers:1,children:[Object(j.jsx)("ambientLight",{intensity:.3,l:!0}),Object(j.jsx)("pointLight",{color:"rgb(255, 220, 180)",intensity:1.5})]})},y=a(64),O=function(){return Object(j.jsx)(y.a,{attach:"trackball"})},x=a(33),_=a.n(x),k=a(43);var M=function(e){var t=e.progress,a=Object(n.useState)("flex"),i=Object(u.a)(a,2),s=i[0],r=i[1],l=Object(n.useState)(0),c=Object(u.a)(l,2),o=c[0],d=c[1],m=Object(k.useSpring)({from:{opacity:1},to:{opacity:0},config:{duration:2e3}});return Object(n.useEffect)((function(){var e;return d(t/100),100===t&&(e=setTimeout((function(){return r("none")}),2e3)),function(){clearTimeout(e)}}),[t]),Object(j.jsxs)(k.animated.div,{style:100===t?Object(h.a)(Object(h.a)({},m),{},{display:s}):{},className:_.a.fallback,children:[Object(j.jsx)("div",{className:_.a.text,children:"GENERATING SOLAR SYSTEM "}),Object(j.jsx)("div",{style:{transform:"scaleX(".concat(o,")")},className:_.a.loadingBar}),Object(j.jsxs)("span",{className:_.a.progress,children:[parseInt(t)," %"]})]})},D=a(20),P=a.n(D),S=a(13),R=a(19),T=a(50),w=a.n(T);var z=function(e){var t=e.isActive,a=e.children,i=Object(n.useState)(!1),s=Object(u.a)(i,2),r=s[0],l=s[1],c=Object(R.useSpring)({from:{scale:"100%"},to:{scale:r?"120%":"100%"},config:{duration:200}});return Object(j.jsx)(R.animated.div,{onMouseOver:function(){return l(!0)},onMouseLeave:function(){return l(!1)},style:Object(h.a)({},c),className:w()(Object(S.a)({},P.a.active,t)),children:a})};var N=function(e){var t=e.thumbnail,a=e.name,n=e.isActive,i=e.containerStyle;return Object(j.jsx)(z,{isActive:n,children:Object(j.jsxs)("div",{className:i,children:[Object(j.jsx)("img",{className:P.a.planet,src:t,alt:a}),Object(j.jsx)("div",{className:P.a.name,children:a})]})})},A=a.p+"static/media/sun.7862a776.png",E=a.p+"static/media/earth.990ac782.png",G=a.p+"static/media/moon.2b4c176a.png",L=a.p+"static/media/venus.397fdee2.png",I=a.p+"static/media/mercury.a7105a56.png",F=a.p+"static/media/jupiter.529cdbe0.png",U=a.p+"static/media/saturn.00b7295f.png",B=a.p+"static/media/uranus.607cb33c.png",Y=a.p+"static/media/neptune.48cf14b7.png",C=a.p+"static/media/mars.6cae79d3.png",V=[{id:1,name:"The Milky Way",thumbnail:a.p+"static/media/galaxy.a98ff7dd.png"},{id:2,name:"sun",thumbnail:A},{name:"moon",thumbnail:G,id:3}],W=[{name:"mercury",thumbnail:I,id:1},{name:"venus",thumbnail:L,id:2},{id:3,name:"earth",thumbnail:E},{name:"mars",thumbnail:C,id:4},{name:"jupiter",thumbnail:F,id:5},{name:"saturn",thumbnail:U,id:6},{name:"uranus",thumbnail:B,id:7},{name:"neptune",thumbnail:Y,id:8}],H=a(14),J=(a(11),a(26));var q=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],i=t[1],s=Object(d.a)((function(e){return e.isRendered})),r=Object(d.a)((function(e){return e.setToggleGalaxy})),l=Object(d.a)((function(e){return e.setActivePlanet})),c=Object(d.a)((function(e){return e.activePlanet}));Object(n.useEffect)((function(){!0===s&&i(!0)}),[s]);var o=Object(R.useSpringRef)(),m={ref:o,from:{opacity:0,scale:0},enter:function(e){return function(t){return t({opacity:1,scale:1,delay:3500-50*(W.length-e.id)})}},leave:{opacity:0,scale:0}},b=Object(R.useTransition)(a?W:[],m),v=Object(R.useTransition)(a?V:[],m);Object(R.useChain)([o],[0,a?.1:.6]);var f=function(e){var t;"The Milky Way"===e?r(!0):l((t=e,[].concat(Object(H.a)(J.d),[J.a,J.c,J.e,J.b]).find((function(e){return e.name===t}))))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:P.a.panel,children:Object(j.jsx)(R.animated.div,{className:P.a.container,children:b((function(e,t){return Object(j.jsx)(R.animated.div,{style:e,children:Object(j.jsx)("div",{onClick:function(){return f(t.name)},children:Object(n.createElement)(N,Object(h.a)(Object(h.a)({containerStyle:P.a.option},t),{},{key:t.name,isActive:!!c&&t.name===c.name}))})})}))})}),Object(j.jsx)("div",{className:P.a.subPanel,children:Object(j.jsx)(R.animated.div,{children:v((function(e,t){return Object(j.jsx)(R.animated.div,{style:e,children:Object(j.jsx)("div",{onClick:function(){return f(t.name)},children:Object(n.createElement)(N,Object(h.a)(Object(h.a)({},t),{},{containerStyle:P.a.subOption,key:t.name,isActive:!!c&&t.name===c.name}))})})}))})})]})},K=a(23),Q=a.n(K);var X=function(){var e,t=Object(d.a)((function(e){return e.activePlanet})),a=Object(n.useState)(null),i=Object(u.a)(a,2),s=i[0],r=i[1],l=Object(d.a)((function(e){return e.toggleGalaxy}));return Object(n.useEffect)((function(){r(t),!t&&l&&r(J.b)}),[t,l]),console.log(s),Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsxs)("div",{className:Q.a.root,children:[Object(j.jsxs)("div",{className:Q.a.section,children:[Object(j.jsx)("div",{className:Q.a.title,children:s.name}),Object(j.jsx)("div",{className:Q.a.desc,children:s.desc})]}),Object(j.jsx)("div",{className:Q.a.section,children:Object(j.jsx)("div",{className:Q.a.flex,children:null===(e=s.data)||void 0===e?void 0:e.map((function(e){return Object(j.jsxs)("div",{className:Q.a.detail,children:[Object(j.jsx)("div",{className:Q.a.detailTitle,children:e.title}),Object(j.jsx)("div",{className:Q.a.value,children:e.value})]},e.title)}))})})]})})},Z=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,70))}));var $=function(){var e=Object(d.a)((function(e){return e.cameraPos})),t=Object(d.a)((function(e){return e.setIsRendered}));function a(){var e=Object(c.a)().progress;return Object(n.useEffect)((function(){console.log(e),100===e&&t(!0)}),[e]),Object(j.jsx)(M,{progress:e})}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(X,{}),Object(j.jsx)(q,{}),Object(j.jsx)(a,{}),Object(j.jsxs)(l.a,{colorManagement:!0,style:{background:"#000"},camera:{position:e,near:.001,far:9e5,layers:0},children:[Object(j.jsx)(o.a,{}),Object(j.jsx)(g,{}),Object(j.jsx)(p,{}),Object(j.jsx)(O,{}),Object(j.jsx)(n.Suspense,{fallback:null,children:Object(j.jsx)(Z,{})})]})]})},ee=function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)($,{})}),document.getElementById("root")),ee()}},[[61,1,2]]]);
//# sourceMappingURL=main.c39b12a6.chunk.js.map