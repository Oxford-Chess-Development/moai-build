(this["webpackJsonptoastie-splash"]=this["webpackJsonptoastie-splash"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),s=a.n(r),l=(a(9),a(1));a(10);function i(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logoWrapper"},o.a.createElement("img",{src:"/toastie-splash/images/favicon.png",className:"logo",alt:"logo"})),o.a.createElement("div",{className:"nameWrapper"},o.a.createElement("div",{className:"name"},o.a.createElement("span",{className:"bold"},"Tournament")," by Oxford Chess Development")),o.a.createElement("div",{className:"buttonContainer"},["Home","Features","Preview","Downloads","About"].map((function(t){return o.a.createElement("a",{className:"button",onClick:function(){return e.setID(t)}},t)}))))}function c(e){for(var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(n.useReducer)((function(e,t){return t&&setTimeout((function(){return d(!1)}),1e4),t}),!1),c=Object(l.a)(i,2),m=c[0],d=c[1],u=e.children?e.children.length:0,h=[],p=e.children||[],f=function(e){h.push(o.a.createElement("span",{className:["dot",e===r?"dotSelected":""].join(" "),onClick:function(){s(e),d(!0)}}))},g=0;g<p.length;g++)f(g);var b=Object(n.useCallback)((function(){var t;if(e.autoAdvance)return m||(t=setTimeout((function(){return s((r+1)%u)}),e.autoAdvance)),function(){clearTimeout(t)}}),[r,u,e.autoAdvance,m]);return Object(n.useEffect)(b,[b]),o.a.createElement("div",{className:"textGallery"},o.a.createElement("div",{className:"stage",style:{left:"calc(-100% * ".concat(r,")")}},p.map((function(e){return o.a.createElement("div",null,e)}))),o.a.createElement("div",{className:"selection"},h))}var m=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1];return function(e){var t=e.id;if("home"===t.toLowerCase()?window.location.hash="":window.location.hash="#"+t.toLowerCase(),document.getElementsByTagName("BODY")[0]){var a=document.getElementById("section-"+t.toLowerCase());a&&window.scrollTo({top:a.offsetTop-.12*window.innerHeight,left:0,behavior:"smooth"})}}({id:a}),o.a.createElement("div",{className:"App"},o.a.createElement(i,{setID:r}),o.a.createElement("div",{id:"section-home",className:"section",style:{backgroundColor:"#111111"}},o.a.createElement("div",{className:"subheader"}),o.a.createElement("div",{className:"imageWrapper"},o.a.createElement("img",{className:"homeImage",src:"/toastie-splash/images/cover-plain.jpg",alt:"Tournament by Oxford Chess Development"}))),o.a.createElement("div",{id:"section-features",className:"section",style:{backgroundColor:"rgb(44, 49, 19)"}},o.a.createElement("div",{className:"subheader"},"Features"),o.a.createElement(c,{autoAdvance:3e3},o.a.createElement("div",null,o.a.createElement("h3",null,"Modern"),o.a.createElement("p",null,"Built with the latest front-end technologies and constantly updated. Designed to work on any platform, cross-platform. ")),o.a.createElement("div",null,o.a.createElement("h3",null,"Functional"),o.a.createElement("p",null,"Gone are the days of a single-use single-method platform. Tournament seeks to let tournament creators run things the way they want, providing as many different options and variations as possible to suit their needs.")),o.a.createElement("div",null,o.a.createElement("h3",null,"Intuitive"),o.a.createElement("p",null,"Tournament seeks to place everything right where you expect. Any feature you might be looking for there is there, right when you need it.")))),o.a.createElement("div",{id:"section-preview",className:"section",style:{backgroundColor:"#2d132c"}},o.a.createElement("div",{className:"subheader"},"Preview"),o.a.createElement("div",null,o.a.createElement("h3",null,"Desktop App"),o.a.createElement("p",null,"The desktop (organiser) app of this software is available to beta test on this ",o.a.createElement("a",{href:"http://toastie-desktop.s3-website.eu-west-2.amazonaws.com/",target:"_blank",rel:"noopener noreferrer"},"online webpage"),".")),o.a.createElement("div",null,o.a.createElement("h3",null,"Mobile App"),o.a.createElement("p",null,"The design of the mobile (player) app of this software has been published online on ",o.a.createElement("a",{href:"https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile",target:"_blank",rel:"noopener noreferrer"},"Figma"),"."))),o.a.createElement("div",{id:"section-downloads",className:"section",style:{backgroundColor:"lilac"}},o.a.createElement("div",{className:"subheader"},"Downloads"),"The Desktop version of this app will be available to download for Windows, Mac, and Debian-based Linux distributions. The mobile client for players will be available on the AppStore and the Google Play Store."),o.a.createElement("div",{id:"section-about",className:"section",style:{backgroundColor:"rgb(80, 5, 5)"}},o.a.createElement("div",{className:"subheader"},"About"),"Aloysius Lip is a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He enjoys programming in his free time."),o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"icons"},o.a.createElement("a",{href:"https://facebook.com/oxfordchess",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/toastie-splash/icons/facebook.png"})),o.a.createElement("a",{href:"https://aloysiuslip.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/toastie-splash/icons/website.png"})),o.a.createElement("a",{href:"http://toastie-desktop.s3-website.eu-west-2.amazonaws.com/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/toastie-splash/icons/desktop.png"})),o.a.createElement("a",{href:"https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/toastie-splash/icons/mobile.png"})),o.a.createElement("a",{href:"mailto:aloysius.lip@gmail.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/toastie-splash/icons/email.png"}))),o.a.createElement("div",{className:"author"},"Copyright 2020, Aloysius Lip")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ab5dde82.chunk.js.map