(this["webpackJsonpcryptor-app-frontend"]=this["webpackJsonpcryptor-app-frontend"]||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),l=s(17),i=s.n(l),r=s(11),n=s(16),o=s(25),m=s(9),d={toggle:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_TOGGLE_ON":return Object(m.a)(Object(m.a)({},e),{},{toggle:!0});case"MENU_TOGGLE_OFF":return Object(m.a)(Object(m.a)({},e),{},{toggle:!1});default:return e}},j=Object(n.b)({menuToggle:x}),b=Object(o.createLogger)({collapsed:!0}),h=Object(n.c)(j,Object(n.a)(b)),u=(s(44),s(45),s(26)),p=s(4),O=s(10),f=s.p+"static/media/3d-intro.7f5699a6.svg",g=s.p+"static/media/dash.9d90050f.svg",N=s(0),w=function(){return Object(N.jsxs)("div",{className:"px-4 lg:px-0 flex flex-col w-full",id:"intro",children:[Object(N.jsxs)("div",{className:"relative",children:[Object(N.jsx)("img",{src:f,alt:"",className:"absolute h-72 2xl:h-auto left-full bottom-0 2xl:top-0 -ml-64 z-0"}),Object(N.jsxs)("h1",{className:"text-white text-6xl mt-20 sm:mt-32",children:["Invest in the future of the ",Object(N.jsx)("br",{})," currency "]}),Object(N.jsxs)("p",{className:"text-white text-sm mt-6",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",Object(N.jsx)("br",{}),"ut labore et dolore magna aliqua. Ut enim ad minim veniam,"]}),Object(N.jsxs)("div",{className:"max-w-max space-x-4 mt-6",children:[Object(N.jsx)("button",{className:"text-white w-32 bg-transparent border rounded-xl py-3 text-sm font-light shadow-2xl white-paper-button",onMouseEnter:function(){O.a.to(".white-paper-button",{translateY:"0.25rem",backgroundColor:"#22C55E",duration:.2,borderWidth:0})},onMouseLeave:function(){O.a.to(".white-paper-button",{translateY:0,backgroundColor:"transparent",duration:.2,borderWidth:1})},children:"White Paper"}),Object(N.jsx)("button",{className:"text-white w-32 bg-transparent border py-3 rounded-xl text-sm font-light shadow-2xl cryptor-swap-button",onMouseEnter:function(){O.a.to(".cryptor-swap-button",{translateY:"0.25rem",backgroundColor:"#22C55E",duration:.2,borderWidth:0})},onMouseLeave:function(){O.a.to(".cryptor-swap-button",{translateY:0,backgroundColor:"transparent",duration:.2,borderWidth:1})},children:"Cryptor Swap"})]})]}),Object(N.jsxs)("div",{className:"flex flex-col text-center space-y-6 text-white",children:[Object(N.jsx)("img",{src:g,className:"w-auto sm:h-96 shadow-3xl mt-16 mx-auto",alt:""}),Object(N.jsx)("h1",{className:"text-2xl",children:"Lorem ipsum dolor sit amet"}),Object(N.jsxs)("p",{className:"font-light text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(N.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]}),Object(N.jsx)("button",{className:"bg-transparent border w-40 mx-auto py-3 rounded-xl font-light text-sm transition transform hover:border-transparent hover:border-0 duration-200 ease-in-out hover:bg-green-500",children:"Get Early access"})]})]})},v=s(12),y=s(23);v.a.registerPlugin(y.a);var k=function(e){var t=e.menuLink;Object(a.useEffect)((function(){v.a.from(".animate-menu",{opacity:0,right:"-100%",duration:.5,autoAlpha:0})}),[]);var s=Object(r.b)(),c=function(){s({type:"MENU_TOGGLE_OFF"})};return Object(N.jsx)("div",{className:"animate-menu flex flex-col h-screen w-screen  fixed bg-emerald-900 z-50 invisible text-white",children:Object(N.jsx)("div",{className:"flex flex-col pl-12 sm:pl-0 mr-auto sm:mx-auto my-auto space-y-8 text-3xl font-extralight sm:text-center",children:t.map((function(e,t){return Object(N.jsx)("span",{className:"cursor-pointer link-"+(t+1),onClick:function(){v.a.to(window,{scrollTo:e.link,duration:1,onStart:c})},children:e.name},e.name)}))})})},L=s.p+"static/media/cryptor-logo.ebc6f36a.svg";v.b.registerPlugin(y.a);var C=function(){var e=Object(r.c)((function(e){return e.menuToggle.toggle})),t=Object(r.b)(),s=[{name:"Home",link:"#intro",class:".link-1"},{name:"What we do",link:"#whatwedo",class:".link-2"},{name:"Our Team",link:"#team",class:".link-3"},{name:"Roadmap",link:"#roadmap",class:".link-4"},{name:"Tokenomics",link:"#tokenomics",class:".link-5"},{name:"White paper",link:"",class:".link-6"}];return Object(N.jsxs)("header",{className:"",children:[e&&Object(N.jsx)(k,{menuLink:s}),Object(N.jsxs)("div",{className:"pr-4 pl-4 lg:pr-0 lg:pl-0 flex w-full h-32",children:[Object(N.jsx)("img",{src:L,className:"w-16 h-20 my-auto",alt:""}),Object(N.jsx)("div",{className:"hidden lg:flex ml-auto my-auto text-sm font-light",children:s.map((function(e,t){return Object(N.jsx)("span",{className:"text-white ml-8 cursor-pointer transition transform hover:-translate-y-1 link-"+(t+1),onClick:function(){v.b.to(window,{duration:1,scrollTo:e.link})},children:e.name},e.name)}))}),Object(N.jsxs)("button",{className:"lg:hidden ml-auto my-auto space-y-3",onClick:function(){t({type:"MENU_TOGGLE_ON"})},children:[Object(N.jsx)("span",{className:"bg-white h-0.5 w-8 block ml-4"}),Object(N.jsx)("span",{className:"bg-white h-0.5 w-12 block"})]})]})]})},T=s.p+"static/media/team-anas.053128f0.svg",E=s.p+"static/media/team-patric.fbb91aa8.svg",M=s.p+"static/media/facebook.ea74a507.svg",S=s.p+"static/media/twitter.bbd94b23.svg",z=s.p+"static/media/linkedin.7799cadc.svg",W=s.p+"static/media/mail.fa6debb6.svg",G=function(){return Object(N.jsxs)("div",{className:"flex flex-col relative w-full text-white text-center pt-20 sm:pt-28 space-y-5",id:"team",children:[Object(N.jsx)("h1",{className:"text-2xl",children:"Meet our team"}),Object(N.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(N.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]}),Object(N.jsxs)("div",{className:"flex flex-col md:flex-row space-y-16 md:space-y-0",children:[Object(N.jsx)("div",{className:"md:w-1/2",children:Object(N.jsxs)("div",{className:"relative max-w-max mx-auto",children:[Object(N.jsx)("div",{className:"absolute z-30 h-20 w-44 text-center bottom-0 right-0 bg-gradient-to-b from-transparent to-black filter blur-sm shadow-2xl -mb-8"}),Object(N.jsxs)("div",{className:"absolute z-40 bottom-0 right-0 -mb-8",children:[Object(N.jsx)("p",{className:"text-green-500 ",children:"Patric J. L"}),Object(N.jsx)("p",{className:"text-sm",children:"CEO"}),Object(N.jsxs)("div",{className:"flex space-x-4",children:[Object(N.jsx)("a",{href:"https://www.facebook.com/anas.afzal.129/",children:Object(N.jsx)("img",{src:M,alt:""})}),Object(N.jsx)("a",{href:"https://github.com/anas-afzal",children:Object(N.jsx)("img",{src:S,alt:""})}),Object(N.jsx)("a",{href:"https://www.linkedin.com/in/muhammadanasafzal/",children:Object(N.jsx)("img",{src:z,alt:""})}),Object(N.jsx)("a",{href:"https://www.google.com/",children:Object(N.jsx)("img",{src:W,alt:""})})]})]}),Object(N.jsx)("img",{src:E,className:"h-64",alt:""})]})}),Object(N.jsx)("div",{className:"md:w-1/2",children:Object(N.jsxs)("div",{className:"relative max-w-max mx-auto",children:[Object(N.jsx)("div",{className:"absolute z-30 h-20 w-44 text-center bottom-0 right-0 bg-gradient-to-b from-transparent to-black filter blur-sm shadow-2xl -mr-12 -mb-8"}),Object(N.jsxs)("div",{className:"absolute z-40 bottom-0 right-0 -mr-12 -mb-8",children:[Object(N.jsx)("p",{className:"text-green-500",children:"Muhammad Anas Afzal"}),Object(N.jsx)("p",{className:"text-sm",children:"CEO"}),Object(N.jsxs)("div",{className:"flex flex-row space-x-4 mx-6",children:[Object(N.jsx)("a",{href:"https://www.facebook.com/anas.afzal.129/",children:Object(N.jsx)("img",{src:M,alt:""})}),Object(N.jsx)("a",{href:"https://github.com/anas-afzal",children:Object(N.jsx)("img",{src:S,alt:""})}),Object(N.jsx)("a",{href:"https://www.linkedin.com/in/muhammadanasafzal/",children:Object(N.jsx)("img",{src:z,alt:""})}),Object(N.jsx)("a",{href:"https://www.google.com/",children:Object(N.jsx)("img",{src:W,alt:""})})]})]}),Object(N.jsx)("img",{src:T,className:"h-64",alt:""})]})})]})]})},F=s.p+"static/media/moon-and-weave.9893e841.png",P=function(){return Object(N.jsxs)("div",{className:"flex flex-col w-full text-white text-center pt-20 sm:pt-28 space-y-5",id:"roadmap",children:[Object(N.jsx)("h1",{className:"text-2xl",children:"Roadmap"}),Object(N.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",Object(N.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]}),Object(N.jsx)("img",{src:F,className:"",alt:""})]})},q=s.p+"static/media/tokenomics-icon.12f26c16.svg",_=s.p+"static/media/fund.dc841e4c.svg",U=s.p+"static/media/line-effect-token.8dc298b5.svg",A=function(){return Object(N.jsxs)("div",{className:"flex flex-col text-white pt-20 sm:pt-28",id:"tokenomics",children:[Object(N.jsxs)("div",{className:"mx-auto text-center",children:[Object(N.jsx)("h1",{className:"text-2xl",children:"Tokenomics"}),Object(N.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(N.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna"]})]}),Object(N.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 place-content-center gap-y-6 mt-16",children:[Object(N.jsx)("img",{src:q,className:"h-80 w-80",alt:""}),Object(N.jsxs)("div",{className:"space-y-3 mx-auto my-auto",children:[Object(N.jsx)("h1",{className:"text-sm",children:"Token Sale"}),Object(N.jsx)("p",{className:"text-xs",children:"Token Name: Cryptor"}),Object(N.jsx)("p",{className:"text-xs",children:"Ticker Symbol:  ~Lorem!~"}),Object(N.jsx)("p",{className:"text-xs",children:"Total Supply: 1254525566654415"}),Object(N.jsx)("p",{className:"text-xs",children:"Decimals: 11"}),Object(N.jsx)("p",{className:"text-xs",children:"BSC Contract: dfsdfdsfdsfsfdsfdsf"}),Object(N.jsx)("p",{className:"text-xs",children:"Minimum Purchased:  00.1"}),Object(N.jsx)("p",{className:"text-xs",children:"Minimum Purchased: 6.00"}),Object(N.jsx)("p",{className:"text-xs",children:"Soft Cap: 400"}),Object(N.jsx)("p",{className:"text-xs",children:"Hard Cap: 800"})]}),Object(N.jsx)("div",{className:"hidden sm:block"}),Object(N.jsx)("div",{className:"hidden sm:block"}),Object(N.jsx)("img",{src:_,alt:"",className:"h-60 w-60 mx-auto"}),Object(N.jsxs)("div",{className:"my-auto mx-auto space-y-3",children:[Object(N.jsx)("h1",{className:"text-sm",children:"Token Allocation"}),Object(N.jsx)("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet,"}),Object(N.jsx)("p",{className:"text-xs",children:"tempor incididunt ut labore "}),Object(N.jsx)("p",{className:"text-xs",children:"veniam, quis nostrud exercitation"}),Object(N.jsx)("p",{className:"text-xs",children:"ullamco laboris nisi ut aliquip"})]}),Object(N.jsx)("div",{className:"hidden sm:block"}),Object(N.jsx)("img",{src:_,alt:"",className:"h-60 w-60 mx-auto"}),Object(N.jsxs)("div",{className:"my-auto mx-auto space-y-3",children:[Object(N.jsx)("h1",{className:"text-sm",children:"Fund Allocation"}),Object(N.jsx)("p",{className:"text-xs",children:"Lorem ipsum dolor sit amet,"}),Object(N.jsx)("p",{className:"text-xs",children:"tempor incididunt ut labore "}),Object(N.jsx)("p",{className:"text-xs",children:"veniam, quis nostrud exercitation"}),Object(N.jsx)("p",{className:"text-xs",children:"ullamco laboris nisi ut aliquip"})]})]}),Object(N.jsxs)("div",{className:"flex flex-col md:flex-row relative text-center my-24 md:my-36 space-y-6 md:space-y-0",children:[Object(N.jsx)("img",{src:U,alt:"",className:"absolute z-0 w-screen hidden md:block"}),Object(N.jsxs)("div",{className:"mx-auto my-auto",children:[Object(N.jsx)("h1",{className:"text-2xl md:text-3xl",children:"20K+"}),Object(N.jsx)("p",{className:"text-xs",children:"Holders"})]}),Object(N.jsxs)("div",{className:"mx-auto my-auto",children:[Object(N.jsx)("h1",{className:"text-2xl md:text-3xl",children:"$3.1M USD"}),Object(N.jsx)("p",{className:"text-xs",children:"Liquidity Generated"})]}),Object(N.jsxs)("div",{className:"mx-auto my-auto",children:[Object(N.jsx)("h1",{className:"text-2xl md:text-3xl",children:"$35M USD"}),Object(N.jsx)("p",{className:"text-xs",children:"Market Cap"})]}),Object(N.jsxs)("div",{className:"mx-auto my-auto",children:[Object(N.jsx)("h1",{className:"text-2xl md:text-3xl",children:"342T"}),Object(N.jsx)("p",{className:"text-xs",children:"Token Burned"})]})]})]})},B=s.p+"static/media/3d.fa740bba.svg",D=function(){return Object(N.jsxs)("div",{className:"px-4 lg:px-0 flex w-full pt-28",id:"whatwedo",children:[Object(N.jsxs)("div",{className:"text-white w-1/2 space-y-5",children:[Object(N.jsx)("h1",{className:"text-2xl",children:"What we do"}),Object(N.jsxs)("p",{className:"text-sm font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",Object(N.jsx)("br",{}),"do eiusmod tempor incididunt ut labore et dolore magna "]})]}),Object(N.jsx)("div",{className:"w-1/2",children:Object(N.jsx)("img",{src:B,alt:"",className:"h-80"})})]})},H=function(){return Object(N.jsxs)("div",{className:"flex flex-col px-4 lg:px-0",children:[Object(N.jsxs)("div",{className:"flex md:flex-row flex-col space-y-6 md:space-y-0",children:[Object(N.jsxs)("div",{className:"text-white my-auto md:mx-auto w-56 space-y-2",children:[Object(N.jsx)("h1",{className:"text-2xl",children:"Stay Conencted"}),Object(N.jsx)("p",{className:"text-xs font-light",children:"Subscribe to our newsletter and never miss any update"})]}),Object(N.jsxs)("div",{className:"md:mx-auto my-auto space-x-4",children:[Object(N.jsx)("input",{type:"email",placeholder:"Enter your email",className:"bg-transparent border-b w-60"}),Object(N.jsx)("button",{className:"rounded-l-full rounded-r-full border text-white h-8 w-24",children:"Subscribe"})]})]}),Object(N.jsxs)("div",{className:"flex md:flex-row flex-col text-white my-32 space-y-12 md:space-y-0 ",children:[Object(N.jsxs)("div",{className:"md:w-1/2 space-y-2",children:[Object(N.jsx)("h1",{className:"text-2xl",children:"We always love to here you"}),Object(N.jsxs)("p",{className:"text-xs",children:["Lorem ipsum dolor sit amet, consectetur adipiscing",Object(N.jsx)("br",{}),"elit, sed do eiusmod tempor incididunt ut labore et ",Object(N.jsx)("br",{}),"dolore magna aliqua."]})]}),Object(N.jsx)("div",{className:"md:w-1/2",children:Object(N.jsxs)("div",{className:"rounded-3xl flex flex-col space-y-12 mx-8 px-8 py-12 shadow-2xl bg-gradient-to-tr from-black via-gray-900 to-emerald-900",children:[Object(N.jsx)("input",{type:"text",placeholder:"Name",className:"bg-transparent border-b"}),Object(N.jsx)("input",{type:"text",placeholder:"Email",className:"bg-transparent border-b"}),Object(N.jsx)("input",{type:"text",placeholder:"Phone",className:"bg-transparent border-b"}),Object(N.jsx)("textarea",{name:"",id:"",placeholder:"Message",className:"bg-transparent border-b"}),Object(N.jsx)("button",{className:"text-white ml-auto border w-20 h-8 rounded-lg",children:"Send"})]})})]})]})},Y=function(){return Object(N.jsxs)("div",{className:"flex flex-col md:flex-row mb-12 px-4 lg:px-0",children:[Object(N.jsxs)("div",{className:"text-white text-xs md:w-1/2",children:[Object(N.jsx)("img",{src:L,alt:""}),Object(N.jsxs)("p",{className:"mt-3",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",Object(N.jsx)("br",{}),"sed do eiusmod tempor incididunt ut labore et dolore ",Object(N.jsx)("br",{}),"magna aliqua."]}),Object(N.jsxs)("div",{className:"flex flex-row space-x-4 mt-3",children:[Object(N.jsx)("img",{src:M,alt:""}),Object(N.jsx)("img",{src:S,alt:""}),Object(N.jsx)("img",{src:z,alt:""}),Object(N.jsx)("img",{src:W,alt:""})]}),Object(N.jsx)("p",{className:"mt-12",children:"\xa9 2021 Cryptor. All rights reserved."})]}),Object(N.jsxs)("div",{className:"mt-auto text-white md:w-1/2 hidden md:block",children:[Object(N.jsx)("h3",{className:"mb-8",children:"Quick Navigation"}),Object(N.jsxs)("div",{className:"grid grid-cols-2 gap-y-3 text-xs",children:[Object(N.jsx)("p",{children:"Home"}),Object(N.jsx)("p",{children:"Roadmap"}),Object(N.jsx)("p",{children:"What we do"}),Object(N.jsx)("p",{children:"Tokenomics"}),Object(N.jsx)("p",{children:" Our Team"}),Object(N.jsx)("p",{children:"White paper"})]})]})]})},I=function(){return Object(N.jsxs)("div",{className:"lg:w-4/5 2xl:w-3/5 w-full h-full sm:mx-auto relative",children:[Object(N.jsx)(C,{}),Object(N.jsx)(w,{}),Object(N.jsx)(D,{}),Object(N.jsx)(G,{}),Object(N.jsx)(P,{}),Object(N.jsx)(A,{}),Object(N.jsx)(H,{}),Object(N.jsx)(Y,{})]})},J=function(){return Object(N.jsx)(u.a,{children:Object(N.jsx)(p.c,{children:Object(N.jsx)(p.a,{path:"/",component:I})})})};var R=function(){return Object(N.jsx)("div",{className:"h-full w-full overflow-hidden",children:Object(N.jsx)(J,{})})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),l(e),i(e)}))};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(r.a,{store:h,children:Object(N.jsx)(R,{})})}),document.getElementById("root")),$()}},[[50,1,2]]]);
//# sourceMappingURL=main.a0aa5712.chunk.js.map