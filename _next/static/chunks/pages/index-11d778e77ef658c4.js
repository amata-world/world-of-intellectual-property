(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},7477:function(e,n,r){"use strict";var t=r(5893),l=r(7987),s=r(4184),c=r.n(s),a=r(1664),i=r.n(a),o=r(8363);function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){d(e,n,r[n])}))}return e}function f(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}n.Z=function(e){var n=e.className,r=f(e,["className"]),s=(0,l.K)(),a=s.account,d=s.deactivate;return a?(0,t.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,t.jsxs)("label",u({tabIndex:0},r,{className:c()("btn btn-sm normal-case",n),children:[a.slice(0,9),"..."]})),(0,t.jsxs)("ul",{tabIndex:0,className:"dropdown-content menu shadow shadow-blue-500/50 rounded-box bg-gray-700 w-52",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/creators/dashboard",children:(0,t.jsx)("a",{children:"Dashboard"})})}),(0,t.jsx)("li",{className:"divider"}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:function(){return d()},children:"Disconnect"})})]})]}):(0,t.jsx)(o.Z,{className:"btn-sm",children:"Dashboard"})}},8363:function(e,n,r){"use strict";var t=r(5893),l=r(7987),s=r(4184),c=r.n(s),a=r(1163);r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}n.Z=function(e){var n=e.className,r=e.children,s=(e.onClick,o(e,["className","children","onClick"])),d=(0,a.useRouter)(),u=(0,l.K)(),f=u.activateBrowserWallet,x=u.account;return(0,t.jsx)("button",function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}({},s,{className:c()("btn btn-primary",n),onClick:function(){x?d.push("/creators/dashboard"):f()},children:x?r||"Go to dashboard":"Connect to wallet"}))}},9843:function(e,n,r){"use strict";r.d(n,{W:function(){return o}});var t=r(5893),l=r(9008),s=r(1664),c=r.n(s),a=(r(7294),r(7477)),i=function(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"Creators"}),(0,t.jsx)("meta",{name:"description",content:"Explore the tools to connect universes"})]}),(0,t.jsxs)("header",{className:"flex flex-row justify-between",children:[(0,t.jsxs)("ul",{className:"flex flex-row",children:[(0,t.jsx)("li",{className:"p-4",children:(0,t.jsx)(c(),{href:"/",children:(0,t.jsx)("a",{className:"btn btn-ghost btn-sm",children:"WIP"})})}),(0,t.jsx)("li",{className:"p-4",children:(0,t.jsx)(c(),{href:"/creators",children:(0,t.jsx)("a",{className:"btn btn-ghost btn-sm",children:"Creators"})})})]}),(0,t.jsx)("ul",{className:"flex flex-row",children:(0,t.jsx)("li",{className:"p-4",children:(0,t.jsx)(a.Z,{})})})]}),n]})};function o(e){return(0,t.jsx)(i,{children:e})}},6222:function(e,n,r){"use strict";r.d(n,{p:function(){return i}});var t=r(5893),l=r(4184),s=r.n(l),c=r(865),a=r.n(c),i=function(e){return(0,t.jsxs)("div",{className:"fixed inset-0 bg-slate-800/80 flex flex-col items-center justify-center",children:[(0,t.jsxs)("div",{className:s()(a()["mosaic-loader"],e.className),children:[(0,t.jsx)("div",{className:s()(a().cell,a()["d-0"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-1"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-2"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-3"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-1"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-2"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-3"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-4"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-2"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-3"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-4"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-5"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-3"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-4"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-5"])}),(0,t.jsx)("div",{className:s()(a().cell,a()["d-6"])})]}),(0,t.jsx)("span",{className:"mt-4",children:"Loading..."})]})}},3445:function(e,n,r){"use strict";r.d(n,{CU:function(){return f},Lu:function(){return m},_e:function(){return x}});var t=r(5503),l=r(6257),s=r(7294),c=r(7702);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}var o=(0,t.ZF)({apiKey:"AIzaSyCVB2mRNk-Rjdvc3z8jpXl3Wus6kQ0Ewcc",authDomain:"world-of-intellectual-property.firebaseapp.com",projectId:"world-of-intellectual-property",storageBucket:"world-of-intellectual-property.appspot.com",messagingSenderId:"206251839987",appId:"1:206251839987:web:bc66bdb41dab85f5408286"}),d=(0,l.ad)(o),u=(0,c.v0)();function f(){return d}function x(e,n){var r=f(),t=(0,s.useState)(0),c=t[0],a=t[1],o=(0,s.useCallback)((function(){return a(c+1)}),[c]),d=(0,s.useState)({refetch:o,loading:!0}),u=d[0],x=d[1];return(0,s.useEffect)((function(){n&&(x({refetch:o,loading:!0}),console.log("GET",n,e,r),(0,l.QT)((0,l.JU)(r,e,n)).then((function(e){e.exists()?x({refetch:o,data:i({},e.data(),{id:e.id}),loading:!1}):x({refetch:o,loading:!1,error:"not found"})})))}),[r,e,n,o]),u}function m(e){var n=f(),r=(0,s.useState)(0),t=r[0],c=r[1],a=(0,s.useCallback)((function(){return c(t+1)}),[t]),o=(0,s.useState)({refetch:a,loading:!0}),d=o[0],u=o[1];return(0,s.useEffect)((function(){u({refetch:a,loading:!0}),(0,l.PL)((0,l.IO)((0,l.hJ)(n,e))).then((function(e){var n=[];e.forEach((function(e){return n.push(i({},e.data(),{id:e.id}))})),u({data:n,refetch:a,loading:!1})}),(function(e){return u({refetch:a,loading:!1,error:e.toString()})}))}),[n,e,a]),d}(0,c.XB)(u)},5970:function(e,n,r){"use strict";r.r(n);var t=r(5893),l=r(9008),s=r(9843),c=r(3445),a=r(6222),i=r(1664),o=r.n(i),d=function(){var e=(0,c.Lu)("experiences"),n=e.data;return e.loading?(0,t.jsx)(a.p,{}):(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:"World of Intellectual Property"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("div",{className:"mb-8 prose dark:prose-invert",children:(0,t.jsx)("h1",{children:"Browse our experiences"})}),(0,t.jsx)("ul",{className:"flex flex-row flex-wrap w-full max-w-6xl justify-evenly",children:null===n||void 0===n?void 0:n.map((function(e){return(0,t.jsxs)("li",{className:"card m-4 w-72 max-h-screen bg-base-100 shadow-sm shadow-cyan-500",children:[(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:e.imageUrl,alt:e.name})}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h2",{className:"card-title",children:(0,t.jsx)(o(),{href:"/experiences/".concat(e.id),children:(0,t.jsx)("a",{children:e.name})})}),(0,t.jsx)("div",{className:"tooltip","data-tip":e.ownerAddress,children:(0,t.jsxs)("p",{className:"text-left text-xs text-slate-400",children:["by ",e.ownerAddress.slice(0,9),"..."]})}),(0,t.jsx)("p",{className:"max-h-32 text-ellipsis overflow-hidden",children:e.description||"N/A"}),(0,t.jsxs)("div",{className:"text-sm text-slate-200",children:["Price: ",e.ticketPrice," ",(0,t.jsx)("span",{className:"kbd kbd-xs",children:"TFUEL"})]}),(0,t.jsxs)("div",{className:"text-sm text-cyan-400",children:["Only ",e.totalSupply,"/",e.totalSupply," left!"]}),(0,t.jsx)("div",{className:"mt-4 card-actions justify-end",children:(0,t.jsx)("button",{className:"btn btn-xs btn-secondary",onClick:function(){},children:"Buy now"})})]})]},e.id)}))})]})};d.applyLayout=s.W,n.default=d},865:function(e){e.exports={"mosaic-loader":"Preloader_mosaic-loader__jq8NF",cell:"Preloader_cell__lBHYZ",ripple:"Preloader_ripple__R9Jzf","d-1":"Preloader_d-1__p6lZ4","d-2":"Preloader_d-2__lx_Xc","d-3":"Preloader_d-3__o1U_O","d-4":"Preloader_d-4__ZLgWD","d-5":"Preloader_d-5__CQzvL","d-6":"Preloader_d-6__myXah"}}},function(e){e.O(0,[16,612,515,700,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);