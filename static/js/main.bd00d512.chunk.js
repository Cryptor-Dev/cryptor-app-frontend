(this["webpackJsonpcryptor-app-frontend"]=this["webpackJsonpcryptor-app-frontend"]||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),l=s(17),n=s.n(l),i=s(12),r=s(16),o=s(25),d=s(10),m={toggle:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_TOGGLE_ON":return Object(d.a)(Object(d.a)({},e),{},{toggle:!0});case"MENU_TOGGLE_OFF":return Object(d.a)(Object(d.a)({},e),{},{toggle:!1});default:return e}},j=Object(r.b)({menuToggle:x}),u=Object(o.createLogger)({collapsed:!0}),b=Object(r.c)(j,Object(r.a)(u)),h=(s(44),s(45),s(26)),p=s(4),O=s(11),f=s(1),N=function(){return Object(f.jsxs)("div",{className:"px-4 lg:px-0 flex flex-col w-full",id:"intro",children:[Object(f.jsxs)("div",{className:"relative",children:[Object(f.jsx)("img",{src:"/assets/3d-intro.svg",alt:"",className:"absolute h-72 2xl:h-auto left-full bottom-0 2xl:top-0 -ml-64"}),Object(f.jsxs)("h1",{className:"text-white text-6xl mt-20 sm:mt-32",children:["Invest in the future of the ",Object(f.jsx)("br",{})," currency "]}),Object(f.jsxs)("p",{className:"text-white text-sm mt-6",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",Object(f.jsx)("br",{}),"ut labore et dolore magna aliqua. Ut enim ad minim veniam,"]}),Object(f.jsxs)("div",{className:"max-w-max space-x-4 mt-6",children:[Object(f.jsx)("button",{className:"text-white w-32 bg-transparent border rounded-xl py-3 text-sm font-light shadow-2xl white-paper-button",onMouseEnter:function(){O.a.to(".white-paper-button",{translateY:"0.25rem",backgroundColor:"#22C55E",duration:.2,borderWidth:0})},onMouseLeave:function(){O.a.to(".white-paper-button",{translateY:0,backgroundColor:"transparent",duration:.2,borderWidth:1})},children:"White Paper"}),Object(f.jsx)("button",{className:"text-white w-32 bg-transparent border py-3 rounded-xl text-sm font-light shadow-2xl cryptor-swap-button",onMouseEnter:function(){O.a.to(".cryptor-swap-button",{translateY:"0.25rem",backgroundColor:"#22C55E",duration:.2,borderWidth:0})},onMouseLeave:function(){O.a.to(".cryptor-swap-button",{translateY:0,backgroundColor:"transparent",duration:.2,borderWidth:1})},children:"Cryptor Swap"})]})]}),Object(f.jsxs)("div",{className:"flex flex-col text-center space-y-6 text-white",children:[Object(f.jsx)("img",{src:"./assets/laptop.svg",className:"w-auto sm:h-96 shadow-3xl mt-16 mx-auto",alt:""}),Object(f.jsx)("h1",{className:"text-2xl",children:"Lorem ipsum dolor sit amet"}),Object(f.jsxs)("p",{className:"font-light text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(f.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]}),Object(f.jsx)("button",{className:"bg-transparent border w-40 mx-auto py-3 rounded-xl font-light text-sm transition transform hover:border-transparent hover:border-0 duration-200 ease-in-out hover:bg-green-500",children:"Get Early access"})]})]})},g=s(9),v=s(23);g.a.registerPlugin(v.a);var w=function(e){var t=e.menuLink;Object(c.useEffect)((function(){g.a.from(".animate-menu",{opacity:0,right:"-100%",duration:.5,autoAlpha:0})}),[]);var s=Object(i.b)(),a=function(){s({type:"MENU_TOGGLE_OFF"})};return Object(f.jsx)("div",{className:"animate-menu flex flex-col h-screen w-screen  fixed bg-emerald-900 z-50 invisible text-white",children:Object(f.jsx)("div",{className:"flex flex-col pl-12 sm:pl-0 mr-auto sm:mx-auto my-auto space-y-8 text-3xl font-extralight sm:text-center",children:t.map((function(e,t){return Object(f.jsx)("span",{className:"cursor-pointer link-"+(t+1),onClick:function(){g.a.to(window,{scrollTo:e.link,duration:1,onStart:a})},children:e.name},e.name)}))})})};g.b.registerPlugin(v.a);var k=function(){var e=Object(i.c)((function(e){return e.menuToggle.toggle})),t=Object(i.b)(),s=[{name:"Home",link:"#intro",class:".link-1"},{name:"What we do",link:"#whatwedo",class:".link-2"},{name:"Our Team",link:"#team",class:".link-3"},{name:"Roadmap",link:"#roadmap",class:".link-4"},{name:"Tokenomics",link:"#tokenomics",class:".link-5"},{name:"White paper",link:"",class:".link-6"}];return Object(f.jsxs)("header",{className:"",children:[e&&Object(f.jsx)(w,{menuLink:s}),Object(f.jsxs)("div",{className:"pr-4 pl-4 lg:pr-0 lg:pl-0 flex w-full h-32",children:[Object(f.jsx)("img",{src:"./assets/cryptor-logo.svg",className:"w-16 h-20 my-auto",alt:""}),Object(f.jsx)("div",{className:"hidden lg:flex ml-auto my-auto text-sm font-light",children:s.map((function(e,t){return Object(f.jsx)("span",{className:"text-white ml-8 cursor-pointer link-"+(t+1),onClick:function(){g.b.to(window,{duration:1,scrollTo:e.link})},onMouseEnter:function(){g.b.to(e.class,{translateY:"-0.5rem",duration:.2})},onMouseLeave:function(){g.b.to(e.class,{translateY:0,duration:.2})},children:e.name},e.name)}))}),Object(f.jsxs)("button",{className:"lg:hidden ml-auto my-auto space-y-3",onClick:function(){t({type:"MENU_TOGGLE_ON"})},children:[Object(f.jsx)("span",{className:"bg-white h-0.5 w-8 block ml-4"}),Object(f.jsx)("span",{className:"bg-white h-0.5 w-12 block"})]})]})]})},y=function(){return Object(f.jsxs)("div",{className:"flex flex-col relative w-full text-white text-center pt-20 sm:pt-28 space-y-5",id:"team",children:[Object(f.jsx)("h1",{className:"text-2xl",children:"Meet our team"}),Object(f.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(f.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]}),Object(f.jsx)("div",{className:"h-96",children:Object(f.jsx)("div",{className:"relative"})})]})},L=function(){return Object(f.jsxs)("div",{className:"flex flex-col w-full text-white text-center pt-20 sm:pt-28 space-y-5",id:"roadmap",children:[Object(f.jsx)("h1",{className:"text-2xl",children:"Roadmap"}),Object(f.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",Object(f.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]}),Object(f.jsx)("img",{src:"./assets/roadmap.svg",className:"",alt:""})]})},T=function(){return Object(f.jsxs)("div",{className:"flex flex-col text-white pt-20 sm:pt-28 space-y-16",id:"tokenomics",children:[Object(f.jsxs)("div",{className:"mx-auto text-center",children:[Object(f.jsx)("h1",{className:"text-2xl",children:"Tokenomics"}),Object(f.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(f.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna"]})]}),Object(f.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 place-content-center gap-y-6",children:[Object(f.jsx)("img",{src:"./assets/tokenomics-icon.svg",className:"h-80 w-80",alt:""}),Object(f.jsxs)("div",{className:"space-y-3 mx-auto my-auto",children:[Object(f.jsx)("h1",{className:"text-sm",children:"Token Sale"}),Object(f.jsx)("p",{className:"text-xs",children:"Token Name: Cryptor"}),Object(f.jsx)("p",{className:"text-xs",children:"Ticker Symbol:  ~Lorem!~"}),Object(f.jsx)("p",{className:"text-xs",children:"Total Supply: 1254525566654415"}),Object(f.jsx)("p",{className:"text-xs",children:"Decimals: 11"}),Object(f.jsx)("p",{className:"text-xs",children:"BSC Contract: dfsdfdsfdsfsfdsfdsf"}),Object(f.jsx)("p",{className:"text-xs",children:"Minimum Purchased:  00.1"}),Object(f.jsx)("p",{className:"text-xs",children:"Minimum Purchased: 6.00"}),Object(f.jsx)("p",{className:"text-xs",children:"Soft Cap: 400"}),Object(f.jsx)("p",{className:"text-xs",children:"Hard Cap: 800"})]}),Object(f.jsx)("div",{className:"hidden sm:block"}),Object(f.jsx)("div",{className:"hidden sm:block"}),Object(f.jsx)("img",{src:"./assets/fund.svg",alt:"",className:"h-60 w-60 mx-auto"}),Object(f.jsxs)("div",{className:"my-auto mx-auto space-y-3",children:[Object(f.jsx)("h1",{className:"text-sm",children:"Token Allocation"}),Object(f.jsx)("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet,"}),Object(f.jsx)("p",{className:"text-xs",children:"tempor incididunt ut labore "}),Object(f.jsx)("p",{className:"text-xs",children:"veniam, quis nostrud exercitation"}),Object(f.jsx)("p",{className:"text-xs",children:"ullamco laboris nisi ut aliquip"})]}),Object(f.jsx)("div",{className:"hidden sm:block"}),Object(f.jsx)("img",{src:"./assets/fund.svg",alt:"",className:"h-60 w-60 mx-auto"}),Object(f.jsxs)("div",{className:"my-auto mx-auto space-y-3",children:[Object(f.jsx)("h1",{className:"text-sm",children:"Fund Allocation"}),Object(f.jsx)("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet,"}),Object(f.jsx)("p",{className:"text-xs",children:"tempor incididunt ut labore "}),Object(f.jsx)("p",{className:"text-xs",children:"veniam, quis nostrud exercitation"}),Object(f.jsx)("p",{className:"text-xs",children:"ullamco laboris nisi ut aliquip"})]})]}),Object(f.jsxs)("div",{className:"flex flex-col md:flex-row mx-auto space-y-12 md:space-y-0 md:space-x-28",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-2xl md:text-3xl",children:"20K+"}),Object(f.jsx)("p",{className:"text-xs",children:"Holders"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-2xl md:text-3xl",children:"$3.1M USD"}),Object(f.jsx)("p",{className:"text-xs",children:"Liquidity Generated"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-2xl md:text-3xl",children:"$35M USD"}),Object(f.jsx)("p",{className:"text-xs",children:"Market Cap"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"text-2xl md:text-3xl",children:"342T"}),Object(f.jsx)("p",{className:"text-xs",children:"Token Burned"})]})]})]})},C=function(){return Object(f.jsxs)("div",{className:"px-4 lg:px-0 flex w-full pt-28",id:"whatwedo",children:[Object(f.jsxs)("div",{className:"text-white w-1/2 space-y-5",children:[Object(f.jsx)("h1",{className:"text-2xl",children:"What we do"}),Object(f.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(f.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]})]}),Object(f.jsx)("div",{className:"w-1/2",children:Object(f.jsx)("img",{src:"./assets/3d.svg",alt:"",className:"h-80"})})]})},M=function(){return Object(f.jsxs)("div",{className:"lg:w-4/5 2xl:w-3/5 w-full h-full sm:mx-auto relative",children:[Object(f.jsx)(k,{}),Object(f.jsx)(N,{}),Object(f.jsx)(C,{}),Object(f.jsx)(y,{}),Object(f.jsx)(L,{}),Object(f.jsx)(T,{})]})},E=function(){return Object(f.jsx)(h.a,{children:Object(f.jsx)(p.c,{children:Object(f.jsx)(p.a,{path:"/",component:M})})})};var S=function(){return Object(f.jsx)("div",{className:"h-full w-full overflow-hidden",children:Object(f.jsx)(E,{})})},G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),l(e),n(e)}))};n.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{store:b,children:Object(f.jsx)(S,{})})}),document.getElementById("root")),G()}},[[50,1,2]]]);
//# sourceMappingURL=main.bd00d512.chunk.js.map